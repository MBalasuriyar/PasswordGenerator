// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
var numbers = ["0123456789"]
var symbols = ["!#$%&()*+-/:;<=>?@[]~_`^"]

var fullStringForSearch = ""

var generated = ""


function generatePassword() {
  // length = prompt("How long should the password be?  Only 8-12")
  // for (length < 8 || legth > 12 ) {
  //  alert(" Only 8 - 12 !")
  //  generatePassword()
  // }

  askUpper = confirm("Do you want uppercase letters in the password")

  askNumber = confirm("Do you want numbers in the password")
  askLower = confirm("Do you want lowercase letters in the password")

  askSymbol = confirm("Do you want special characters in the password")


  if (!askSymbol && !askNumber && !askUpper && !askLower) {
    alert("pick at least one!")
    generatePassword()
  }

  if (askSymbol) {
    fullStringForSearch = symbols;
    console.log(fullStringForSearch)
  }
  if (askNumber) {
    fullStringForSearch += numbers;
    console.log(fullStringForSearch)
  }
  if (askUpper) {
    fullStringForSearch += upperCase;
    console.log(fullStringForSearch)
  }
  if (askLower) {
    fullStringForSearch += lowerCase;
    console.log(fullStringForSearch)
  }

  if (i = 0, i < length.length, i++)  {

    generated + fullStringForSearch[(Math.floor(Math.random()))]
    console.log(generated)
    i++


  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);