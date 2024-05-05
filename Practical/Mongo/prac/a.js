const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const songDet=require('./b.js');

const app=express();

app.use(bodyParser.urlencoded({extended:true}));

const db='mongodb://127.0.0.1:27017/db'
const port=8000

// Add
app.post('/addition',async function(request,response){
    const song = await songDet.create({
        SongName:request.body.SongName,
        Film:request.body.Film,
        MusicDirector:request.body.MusicDirector,
        Singer:request.body.Singer
    })
    response.send({message:"Record added successfully.",student:song})
})

app.get('/display',async function(request,response){
    const songs=await songDet.find()
    let html='<table>'
    html+='<tr><th>Song</th><th>Film</th><th>Director</th><th>Singer</th>'
    songs.map(function(song){
        html+='<tr>'
        html+='<td>'+song.SongName+'</td>'
        html+='<td>'+song.Film+'</td>'
        html+='<td>'+song.MusicDirector+'</td>'
        html+='<td>'+song.Singer+'</td>'
        html+='/<tr>'
    })
    html+='</table>'

    response.send(html)
})

app.get('/cnt',async function(request,response){
    const songs=await songDet.find()
    response.send({message:"Total no of records: "+songs.length,songs})
})

app.get('/dirsongs/:dirname',async function(request,response){
    const dirname=request.params.dirname
    const songs=await songDet.find({MusicDirector:dirname})
    response.send({message:dirname+'songs',songs})
})

app.get('/dirsingersongs/:dir/:singer',async function(request,response){
    const dir=request.params.dir
    const singer=request.params.singer
    const songs=await songDet.find({MusicDirector:dir,Singer:singer})
    response.send({message:"Successfully",songs})
})

app.delete('/remove/:song',async function(request,response){
    const song=request.params.song
    const songs=await songDet.deleteOne({SongName:song})
    response.send({message:"deleted",songs})
})

mongoose.connect(db)
    .then(()=>{
        app.listen(port,()=>{
            console.log("Port "+port+ " is listening...")
        })
    })
    .catch(()=>{
        console.log("Error: "+error)
    })
