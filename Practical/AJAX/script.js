document.getElementById('registrationForm').addEventListener("submit", function(event) {

  //   This line prevents the default behavior of form submission, which is to reload the page. It ensures that the form data is processed using JavaScript without causing a page reload.
    event.preventDefault();

    // This line retrieves the value entered in the input field with the id name and assigns it to the variable name.
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // This line creates an object named userData containing the user's name, email, and password.
    var userData = {
      name: name,
      email: email,
      password: password
    };

    // Get existing data from localStorage or initialize an empty array
    var existingData = JSON.parse(localStorage.getItem('userData')) || [];
    
    // Add new user data to the array
    existingData.push(userData);

    // Save updated data back to localStorage
    // This line converts the existingData array to a JSON string using JSON.stringify() and stores it in local storage under the key 'userData'. This updates the user data stored in local storage with the newly added user registration data.
    localStorage.setItem('userData', JSON.stringify(existingData));

    // Redirect to the data list page
    window.location.href = 'data-list.html';
  });