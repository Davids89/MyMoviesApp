var Cinema=require("../models/Cinema.js");module.exports={getCinemas:function(e,r){Cinema.find({},function(e,n){return e?r.status(500).json({error:"Error in server"}):r.status(200).json(n)})}};