// Retrieve user data from localStorage
// localStorage.getItem('userData'): This retrieves the value associated with the key 'userData' from the browser's local storage.
// JSON.parse(): This parses the retrieved value from a JSON string to a JavaScript object.
// || []: If there is no data in the local storage for the key 'userData', it initializes an empty array.
var userData = JSON.parse(localStorage.getItem('userData')) || [];

// Display user data in the table
var userDataBody = document.getElementById('userDataBody');
userData.forEach(function(user) {
  var row = document.createElement('tr');
  row.innerHTML = '<td class="border">' + user.name + '</td><td class="border">' + user.email + '</td><td class="border">' + user.password + '</td>';
  userDataBody.appendChild(row);
});