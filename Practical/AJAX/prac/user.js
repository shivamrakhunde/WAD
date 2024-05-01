var exist = JSON.parse(localStorage.getItem('obj'));
var body = document.getElementById('tablebody')
exist.forEach(function(user){
    var row = document.createElement('tr');
    row.innerHTML='<td>'+user.name+'</td>'+'<td>'+user.email+'</td>'+'<td>'+user.password+'</td>';
    body.append(row);
});