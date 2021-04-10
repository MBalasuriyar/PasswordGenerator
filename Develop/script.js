// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");


var resultEl = document.querySelector('result');
var lengthEl = document.querySelector('length');
var uppercaseEl = document.querySelector('uppercase');
var lowercaseEl = document.querySelector('lowercase');
var numbersEl = document.querySelector('numbers');
var symbolsEl = document.querySelector('symbols');
var generateEl = document.querySelector('generate');

var randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}


function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}


generate.addEventListener('click', () => {
	const length = +lengthEl.value;
	const hasLower = lowercaseEl;
	const hasUpper = uppercaseEl;
	const hasNumber = numbersEl;
	const hasSymbol = symbolsEl;
	

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
