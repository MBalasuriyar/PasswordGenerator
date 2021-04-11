// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = 0
var askLower = false
var askNumber = false
var askSymbol = false
var askUpper = false

//opption strings
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"]
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"]
var numbers = ["0123456789"]
var symbols = ["!#$%&()*+-/:;<=>?@[]~_`^"]


//To be Concatonated string
var fullStringForSearch = ""
//Password from string
var generated = ""



//generation function
function generatePassword() {
    //reset strings

    fullStringForSearch = ""


    askLower = false
    askNumber = false
    askSymbol = false
    askUpper = false

    // Check and store Password length
    var length = Number(prompt("How long should the password be?  Only 8-12"));
    if (length < 8 || length > 128) {
        alert(" Only 8 - 128 !");
        generatePassword();
    }

    //Confirm different options
    askUpper = confirm("Do you want uppercase letters in the password")
    askNumber = confirm("Do you want numbers in the password")
    askLower = confirm("Do you want lowercase letters in the password")
    askSymbol = confirm("Do you want special characters in the password")

    //check and add confirmations

    if (!askSymbol && !askNumber && !askUpper && !askLower) {
        alert("pick at least one!")
        generatePassword()
    } else {
        if (askSymbol) {
            fullStringForSearch += symbols;
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
    }

    for (var i = 0; i < length; i++) {
        console.log("what")
        generated += fullStringForSearch[(Math.floor(Math.random() * fullStringForSearch.length))]
        console.log(generated)
        console.log(fullStringForSearch[(Math.floor(Math.random() * fullStringForSearch.length))])

    }
    return generated

}


//supplied code

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
    var password = ""
    password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;


}