var fs = require('fs');

var array = fs.readFileSync('./cinemas.txt').toString().split('\n');

array = cleanArrayItems(array);

function cleanArrayItems(array){
    array.map(function(item, idx){
        if(item == ''){
            array.splice(idx, 1);
        }
    })
    
    return array;
}

array.map(function(cine){
    getCinemaFromInputReaded(cine);
})

function getCinemaFromInputReaded(item){
    
    var cine = {
        name : String,
        number_cinema_rooms : Number,
        city : String
    }
    
    var count = countWordsInItem(item);
    
    if(count > 1){
        //aqui ya tengo un cine
        
        var itemSplit = item.split('.');
        
        cine.name = getCinemaNameFromItemSplit(itemSplit);
        cine.number_cinema_rooms = getRoomsFromItemSplit(itemSplit);
        cine.city = getCityFromItemSplit(itemSplit);
        console.log(cine);
    }

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
    var aux = item[1].split('Salas') || item[1].split('Sala');
    return aux[0].trim();
}

function getCityFromItemSplit(item){
    
    var aux;
    
    if(item.indexOf('Salas') > -1){
        aux = item[1].split('Salas');
    }else{
        aux =  item[1].split('Sala');
    }

    var cityName = aux[1].replace('(','').replace(')','').trim();
    return cityName;
}