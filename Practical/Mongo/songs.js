// object creation
const mongoose = require('mongoose')

// schema creation
const songsSchema=new mongoose.Schema({
    Songname:String,
    Film:String,
    Music_Director:String,
    Singer:String
});

// Model Creation
const songsModel= mongoose.model('songs',songsSchema);

// Export
module.exports=songsModel