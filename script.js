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
  let passInput = '';
  let pLen = prompt("Password Length should be minimum of 8 and maximum of 128 characters.");
  let passwordCriteria = {
    'uppercase': 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    'lowercase': 'abcdefghijklmnopqrstuvwxyz',
    'numbers': '0123456789',
    'special': `@%+'/!#$^?:;.(){}[]~`
  };

  if (!isNaN(pLen) && parseInt(pLen) >= 8 && parseInt(pLen) <= 128) {
    let isLowerCase = confirm("Does it include lowercase characters?");
    let isUpperCase = confirm("Does it include uppercase characters?");
    let isNumeric = confirm("Does it include numeric characters?");
    let isSpecial = confirm("Does it include special characters?");

    let passwordChar = isLowerCase ? passwordCriteria['lowercase'] : '';
    passwordChar += isUpperCase ? passwordCriteria['uppercase'] : '';
    passwordChar += isNumeric ? passwordCriteria['numbers'] : '';
    passwordChar += isSpecial ? passwordCriteria['special'] : '';
    // console.log(passwordChar)
    // if()
    if (passwordChar !== '') {
      for (let i = 1; i <= parseInt(pLen); i++) {
        let char = Math.floor(Math.random()
          * passwordChar.length + 1);

        passInput += passwordChar.charAt(char);
      }
      // console.log(passInput)
      return passInput;
      // `${passInput} Password Length : ${parseInt(pLen)} Characters
      //                         Lowercase : ${boolTranslate(isLowerCase)} 
      //                         Uppercase : ${boolTranslate(isUpperCase)} 
      //                         Numeric : ${boolTranslate(isNumeric)} 
      //                         Special Characters : ${isSpecial}`;
    } else {
      alert('Please select at least one criteria');
      return "Your secure password";
    }

  } else {
    alert("Password Characters should be between 8 - 128 characters.");
    return "Your Secure Password";
  }
}

let boolTranslate = bool => bool ? 'Yes' : 'No';

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
