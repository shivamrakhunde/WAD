const mongoose=require('mongoose')
const songschema=new mongoose.Schema({
    SongName:String,
    Film:String,
    MusicDirector:String,
    Singer:String
})
const model=mongoose.model('songs',songschema)
module.exports=model