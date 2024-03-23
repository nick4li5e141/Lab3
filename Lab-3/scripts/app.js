
// the user name will be displayed in the navbar when login 
$(document).ready(function(){
    $('#loginButton').click(function(event){
        // prevent from submission
        event.preventDefault();
        var username = $('#username').val();
        $('<li class="nav-link text-side">' + username + '</li>');
    });
});

// creating div element "errorMessage" this will be used to display error when validations are not met
$(document).ready(function(){
    $('#errorMessages').hide();
    
    // first and last nme validation
    $('#fName, #lName').on('input', function(){
        if($(this).val().length < 2) {
            $('#errorMessages').text('first and last name must contain at least 2 characters').show();
        } else {
            $('#errorMessages').hide();
        }
    });
    // validation for email must have at least 8 characters and include @
    $('#email').on('input', function(){
        var email = $(this).val();
        if(email.length < 8 || !email.includes('@')) {
            $('#errorMessages').text('Email must be at least 8 charachters long and include @ symbol').show();
        } else {
            $('#errorMessages').hide();
        }
    });

// validation for password and confirm pass to be like each other and the password must contain 6 characters
    $('#registerForm').on('submit', function(event){
        var password = $('#password').val();
        var confirmPassword = $('#cpassword').val();
        if(password !== confirmPassword || password.length < 6) {
            $('#errorMessages').text('passwords do not match or are less than 6 charachters').show();
            event.preventDefault();

        }
    });
    
});

// creating a user class
class User {
    constructor(firstName, lastName, username, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        
    }
}


// the submit action 
$('#registerForm').on('submit', function(event){
    event.preventDefault();

    var user = new User(
        $('#fName').val(),
        $('#lName').val(),
        $('#username').val(),
        $('#email').val(),
        $('#password').val()
    );
    console.log(user);
    
    //reset the form
    $(this)[0].reset();
    //hide error message
    $('#errorMessages').hide();
});