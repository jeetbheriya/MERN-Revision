const content=document.getElementById('passwordDisplay');
const btn=document.getElementById('generateBtn');

function generatePassword(passwordLength, uppercaseChars, lowercaseChars, numberChars, specialChars) {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const special = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    let allowedChars = '';
    let password = '';

    allowedChars += uppercaseChars ? uppercase : '';
    allowedChars += lowercaseChars ? lowercase : '';
    allowedChars += numberChars ? numbers : '';
    allowedChars += specialChars ? special : '';

    if(allowedChars.length <= 0) {
        return 'Please select at least one character type.';
    }
    if(allowedChars.length === 0) {
        return 'At least one character type must be selected to generate a password.';
    }

    for(let i=0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }
    console.log(`Generated Password : ${password}`);
    return password;
}

const passwordLength = 12;
const uppercaseChars = true;
const lowercaseChars = true;
const numberChars = true;
const specialChars = true;

const password = generatePassword(passwordLength, 
                                  uppercaseChars, 
                                  lowercaseChars, 
                                  numberChars, 
                                  specialChars);



btn.addEventListener("click", () => {
    content.innerHTML=password;
})

