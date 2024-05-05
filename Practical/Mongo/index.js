// server
const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const songDetails=require('./songs.js');

const app=express();

// congfigure middle-ware
// app.use(express.json);
app.use(bodyParser.urlencoded({extended:true}));


const db="mongodb://127.0.0.1:27017/songs"
const port=4000


app.post('/add',async function(request,response){
    const song=await songDetails.create({
        Songname:request.body.Songname,
        Film:request.body.Film,
        Music_Director:request.body.Music_Director,
        Singer:request.body.Singer
    })
    response.send({message:"Request Accepted",student: song});
})

app.get('/show',async function(request,response){
    const songs=await songDetails.find();

    let html='<table>'
    html+='<tr><th>Songname</th><th>Film</th><th>Music_Director</th><th>Singer</th>'

    songs.map(function(song){
        html+='<tr>'
        html+='<td>'+song.Songname+'</td>'
        html+='<td>'+song.Film+'</td>'
        html+='<td>'+song.Music_Director+'</td>'
        html+='<td>'+song.Singer+'</td>'
        html+='</tr>'
    })

    html+='</table>'

    response.send(html);
})

app.get('/count',async function(request,response){
    const songs=await songDetails.find();
    response.send({message:songs.length,songs})
})

app.get('/DirectorSongs/:director',async function(request,response){
    const director=request.params.director;
    const songs=await songDetails.find({Music_Director:director})
    response.send({songs})
})

app.get('/DirectorSingerSongs/:director/:singer',async function(request,response){
    director=request.params.director
    singer=request.params.singer
    const songs=await songDetails.find({Music_Director:director,Singer:singer})
    response.send(songs)
})

app.delete('/delete/:song',async function(request,response){
    song=request.params.song
    const songs= await songDetails.deleteOne({Songname:song})
    response.send({message:"deleted",songs})
})


mongoose.connect(db)
    .then(()=>{
        app.listen(port,()=>{
            console.log("server is listening at "+port);
        })
    })
    .catch(()=>{
        console.log('Failed!!!')
        console.log('Error occurred '+error);
    })