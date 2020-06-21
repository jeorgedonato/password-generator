// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
let writePassword = val => {
  let passwordText = document.querySelector("#password");
  let password = generatePassword(passwordText);
  // console.log("Click")
  passwordText.value = password;

}

//Declaring the generate password function
let generatePassword = butId => {
  //Prompting the password length and validation
  let pLen = prompt("Password Length should be minimum of 8 and maximum of 128 characters.");
  if (!isNaN(pLen) && parseInt(pLen) >= 8 && parseInt(pLen) <= 128) {
    let isLowerCase = confirm("Does it include lowercase characters?");
    let isUpperCase = confirm("Does it include uppercase characters?");
    let isNumeric = confirm("Does it include numeric characters?");
    let isSpecial = confirm("Does it include special characters?");


  } else {
    alert("Password Characters should be between 8 - 128 characters.");
    butId.value("Your Secure Password")
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
