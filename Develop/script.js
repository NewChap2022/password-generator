const lowerCase = "abcdefghijklmnopqrstuvwyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const specialCharacter = " !\"\#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
const lengthPrompt = function () {
  var length = prompt("What is the the length of characters you want to set for your password?");
  return length;
}

// Assignment code here
function generatePassword() {
  window.alert("Welcome to use Password Generator! Please decide your requirements for your password.");

  // ask for the length for password
  var length = parseInt(lengthPrompt());

  while (length === "" || isNaN(length) || length < 8 || length > 128) {
    switch (true) {
      case (length === "" || isNaN(length)):
        alert("Please enter the numerals");
        length = parseInt(lengthPrompt());
        break;
      case (length < 8):
        alert("The password should at least has 8 characters!")
        length = parseInt(lengthPrompt());
        break;

      case (length > 128):
        alert("The password should be no more than 128 characters!")
        length = parseInt(lengthPrompt());
        break;

      default:
        break;
    }
  }

  var characters = "";

  while (characters === "" || characters === null) {
    var characterSelect = window.confirm("Do you want to use lowercase for your password?")
    if (characterSelect) {
      characters = lowerCase;
    }

    characterSelect = window.confirm("Do you want to use uppercase for your password?")
    if (characterSelect) {
      characters += upperCase;
    }

    characterSelect = window.confirm("Do you want to use numeric for your password?")
    if (characterSelect) {
      characters += numeric;
    }

    characterSelect = window.confirm("Do you want to use special characters for your password?")
    if (characterSelect) {
      characters += specialCharacter;
    }

    if (characters === "" || characters === null) {
      window.alert("You need to choose at lease one type of characters to generate password!")
    }
  }

  // reference from stackoverFlow https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  var result = "";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
