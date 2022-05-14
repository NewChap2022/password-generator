const lowerCase = "abcdefghijklmnopqrstuvwyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789";
const specialCharacter = " !\"\#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

// Assignment code here
function generatePassword() {
  window.alert("Welcome to use Password Generator! Please decide your requirements for your password.");

  var minLength = ""
  // ask for minimum length for password
  while (minLength === "" || isNaN(minLength)) {
    minLength = parseInt(window.prompt("What is the minimum length of characters you want to set for your password? \nPlease make sure you enter the numerals."));
  }
  console.log("The minimum length of password is " + minLength);

  // ask for maximum length for password
  var maxLength = ""
  while (maxLength === "" || isNaN(maxLength) || maxLength < minLength) {
    maxLength = parseInt(window.prompt("What is the maximum length of characters you want to set for your password? \nPlease make sure you enter the numerals and the maximum length is larger or equal to minimum length."));
  }
  console.log("The maximum length of password is " + maxLength);

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
  var length = Math.floor(Math.random() * (maxLength - minLength + 1) + minLength);
  console.log(length);
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
