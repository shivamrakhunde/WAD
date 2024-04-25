// script.js

$(document).ready(function() {
    // Event listener for registration form submission
    $('#registrationForm').submit(function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get input values
      var name = $('#name').val();
      var email = $('#email').val();
      var password = $('#password').val();
  
      // Create user object
      var user = {
        name: name,
        email: email,
        password: password
      };
  
      // Send user data to server using AJAX POST method
      $.ajax({
        type: 'POST',
        url: 'https://example.com/register',
        data: user,
        success: function(response) {
          // Store user data in local storage
          var users = JSON.parse(localStorage.getItem('users')) || [];
          users.push(user);
          localStorage.setItem('users', JSON.stringify(users));
  
          // Redirect to user list page
          window.location.href = 'users.html';
        },
        error: function(xhr, status, error) {
          console.error('Error:', error);
          alert('Failed to register user. Please try again later.');
        }
      });
    });
  
    // Function to display user list
    function displayUserList() {
      var users = JSON.parse(localStorage.getItem('users')) || [];
      var userList = $('#userList');
      userList.empty();
      users.forEach(function(user) {
        var listItem = $('<li>').text(user.name + ' - ' + user.email);
        userList.append(listItem);
      });
    }
  
    // Call function to display user list when the users.html page is loaded
    if (window.location.pathname === '/users.html') {
      displayUserList();
    }
  });
  