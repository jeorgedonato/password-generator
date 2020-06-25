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
  //Constructing object instead of array for better readability
  let passwordCriteria = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    special: `@%+'/!#$^?:;.(){}[]~`
  };
  //Validating if string is convertible to int and if password is between 8-128 characters
  if (!isNaN(pLen) && parseInt(pLen) >= 8 && parseInt(pLen) <= 128) {
    let isLowerCase = confirm("Does it include lowercase characters?");
    let isUpperCase = confirm("Does it include uppercase characters?");
    let isNumeric = confirm("Does it include numeric characters?");
    let isSpecial = confirm("Does it include special characters?");

    //Checking the user's criteria to be added in string
    let passwordChar = isLowerCase ? passwordCriteria.lowercase : '';
    passwordChar += isUpperCase ? passwordCriteria.uppercase : '';
    passwordChar += isNumeric ? passwordCriteria.numbers : '';
    passwordChar += isSpecial ? passwordCriteria.special : '';

    //Validating user's criteria if they chose at least one criteria 
    if (passwordChar !== '') {
      for (let i = 1; i <= parseInt(pLen); i++) {
        let char = Math.floor(Math.random()
          * passwordChar.length + 1);

        passInput += passwordChar.charAt(char);
      }
      // console.log(passInput)
      let pPasswordInfo = document.querySelector("#p-password-info");
      pPasswordInfo.innerHTML = "";
      document.getElementById("span-button").style.display = 'block';
      pPasswordInfo.style.display = 'block';
      // console.log(pPasswordInfo)
      let ulTag = document.createElement('ul');
      pPasswordInfo.appendChild(ulTag);
      let pLenChar = document.createElement('li');
      pLenChar.textContent = `Password Length : ${parseInt(pLen)} Characters`;
      ulTag.appendChild(pLenChar);
      let pLowerChar = document.createElement('li');
      pLowerChar.textContent = `Lowercase : ${boolTranslate(isLowerCase)}`;
      ulTag.appendChild(pLowerChar);
      let pUpperChar = document.createElement('li');
      pUpperChar.textContent = `Uppercase : ${boolTranslate(isUpperCase)}`;
      ulTag.appendChild(pUpperChar);
      let pNumericChar = document.createElement('li');
      pNumericChar.textContent = `Numeric : ${boolTranslate(isNumeric)}`;
      ulTag.appendChild(pNumericChar);
      let pSpecialChar = document.createElement('li');
      pSpecialChar.textContent = `Special Characters : ${boolTranslate(isSpecial)}`;
      ulTag.appendChild(pSpecialChar);
      return passInput;
    } else {
      alert('Please select at least ONE Criteria');
      document.getElementById("span-button").style.display = 'none';
      document.getElementById("p-password-info").style.display = 'none';
      return "Your secure password";
    }

  } else {
    alert("Password Characters should be between 8 - 128 characters.");
    document.getElementById("span-button").style.display = 'none';
    document.getElementById("p-password-info").style.display = 'none';
    return "Your Secure Password";
  }
}

//Copy to clipboard function
let copyToClip = () => {
  let copyText = document.getElementById("password");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  // alert("Copied the text: " + copyText.value);
  document.getElementById("alert-clip").style.display = 'block';

  //Setting time out to hide alert
  setTimeout(function () { document.getElementById("alert-clip").style.display = "none"; }, 600);
}


//Translate bool to string Yes for true and No for false
let boolTranslate = bool => bool ? 'Yes' : 'No';

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
