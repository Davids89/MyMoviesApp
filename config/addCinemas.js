var fs = require('fs');
var array = fs.readFileSync(__dirname + "/cinemas.txt").toString().split('\n');
var database = require('./database.js');
var Cinema = require('../app/models/Cinema.js');

function main(){
    
    array = cleanArrayItems(array);
    
    array.map(function(cine){
    var cines = getCinemaFromInputReaded(cine);
    
    Cinema.find({}, function(err, cinemas){
        if(cinemas.length == 0){
            cines.map(function(cine){
                var mCine = new Cinema();
                mCine.name = cine.name;
                mCine.number_cinema_rooms = cine.number_cinema_rooms;
                mCine.city = cine.city;
                
                mCine.save(function(err){
                    if(err){
                        console.log("Error saving cinema");
                    }
                })
            })
        }
    })
})
    
}//final main

function cleanArrayItems(array){
    array.map(function(item, idx){
        if(item == ''){
            array.splice(idx, 1);
        }
    })

    return array;
}//final cleanArrayItems

function getCinemaFromInputReaded(item){
    
    var cine = {
        name : String,
        number_cinema_rooms : Number,
        city : String
    }
    
    var cines = [];
    
    var count = countWordsInItem(item);
    
    if(count > 1){
        //aqui ya tengo un cine
        
        var itemSplit = item.split('.');
        
        cine.name = getCinemaNameFromItemSplit(itemSplit);
        cine.number_cinema_rooms = getRoomsFromItemSplit(itemSplit);
        cine.city = getCityFromItemSplit(itemSplit);
        console.log(cine.city);
        cines.push(cine);
    }
    
    return cines;

}

function countWordsInItem(item){
    
    var count = 0;
    
    for(var i = 0; i < item.length; i++){
        if(item[i] == ' '){
            count++;
        }
    }
    
    return count;
}

function getCinemaNameFromItemSplit(item){
    return item[0];
}

function getRoomsFromItemSplit(item){
    var aux = item[1].split('Salas');
    return aux[0].trim();
}

function getCityFromItemSplit(item){
    
    var aux = item[1].split('Salas');
    
    var cityName = aux[1].replace('(','').replace(')','').trim();
    return cityName;
}

main();