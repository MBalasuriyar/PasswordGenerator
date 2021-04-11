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

  while (i = 0, i < length.length, i++)  {

    generated + fullStringForSearch[(Math.floor(Math.random()))]
    console.log(generated)
    i++


  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





// var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
// var lowerCase =[ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var numbers = ["0", "1","2","3","4","5","6","7","8","9"]
// var symbols = ["!","@","#","%","^","&","*","(",")"]



// var randomFunc = {
// 	lower: getRandomLower,
// 	upper: getRandomUpper,
// 	number: getRandomNumber,
// 	symbol: getRandomSymbol
// }


// function getRandomLower() {
// 	lowerCase[(Math.floor(Math.random()))];
// }

// function getRandomUpper() {
// 	upperCase[(Math.floor(Math.random() ))];
// }

// function getRandomNumber() {
// 	numbers[(Math.floor(Math.random()))];
// }

// function getRandomSymbol() {
// 	const symbols = '!@#$%^&*(){}[]=<>/,.'
// 	symbols[Math.floor(Math.random() * symbols.length)];
// }

// console.log( getRandomLower)
// console.log( getRandomUpper)
// console.log( getRandomNumber)
// console.log( getRandomSymbol)

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// //var randomChars = "!#$%&()*+-/:;<=>?@[]~_`^";
// var randomNums = "0123456789";
// var randomCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var randomLower = "abcdefghijklmnopqrstuvwxyz";
//  if(useChars) {
//         randomStringToSearch = randomChars;
//       }
//       if(useNums) {
//         randomStringToSearch += randomNums;
//       }
//       if(useCaps) {
//         randomStringToSearch += randomCaps;
//       }
//       if(useLower) {
//         randomStringToSearch += randomLower;
      // }