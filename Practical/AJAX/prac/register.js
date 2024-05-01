document.getElementById('Form').addEventListener("submit",function(event){
    event.preventDefault();
    var name=document.getElementById('Name').value;
    var email=document.getElementById('Email').value;
    var pass =document.getElementById('Password').value;
    var obj={
        name:name,
        email:email,
        pass:pass
    }
    var exist=JSON.parse(localStorage.getItem('obj'))||[];
    exist.push(obj);
    localStorage.setItem('obj',JSON.stringify(exist));
    window.location.href='user.html';
});