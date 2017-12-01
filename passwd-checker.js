// Password Checker Challenge
// Authors: Jordan Dominguez && scott h farris
// November 30, 2017

let userId;
let pass;

function inputCredentials() {
  userId = prompt("Enter User ID");
  pass = prompt("Enter password");
};


function areCredentialsValid(userId, pass) {
  if (userId === pass) {
    alert("Password cannot be the same as username.");
    return false
  } else if (pass === 'password') {
    alert("Password cannot be 'password'");
    return false
  } else if ((pass.length < 6) || (userId.length < 6)) {
    alert("Password must be more than 6 characters");
    return false
  } else if ((userId.indexOf("!") >= 0) || (userId.indexOf("#") >= 0) || (userId.indexOf("$") >= 0)) {
    alert("User ID cannot contain special characters");
    return false
  } else if ((pass.indexOf("!") < 0) && (pass.indexOf("#") < 0) && (pass.indexOf("$") < 0)) {
    alert("Password must contain '!','#','$'");
    return false
  } else if (pass === 'password') {
    alert("Password cannot be 'password'");
    return false
  } else {
    return true
  }
};


function inputValidCredentials() {
  inputCredentials();
  while (!areCredentialsValid(userId, pass)) {
    alert("Credentials invalid, try again");
    inputCredentials();
  }
  alert("Credentials accepted!");
};
