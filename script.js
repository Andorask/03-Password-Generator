// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword() {
    var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var special = ["@", "#", "$", "%", "&", "*", "-", "+", "=", "^", "`", "~", "(", ")", "?", "!", ";", ":"];
   
    var randompassword = "";
    var passwordLength = prompt("How many characters do you want your pasword to be?");
    var characterPool = [];
    console.log(passwordLength);
    if (Number.isInteger(parseInt(passwordLength)) && passwordLength > 7 && passwordLength < 129) {
        var confirmLower = confirm("Do you want your password to contain lower case letters?");
            if (confirmLower === true) {
                randompassword += lowercase[Math.floor(Math.random() * lowercase.length)]
                characterPool = characterPool.concat(lowercase);
            }
        var confirmUpper = confirm("Do you want your password to contain upper case letters?");
            if (confirmUpper === true) {
                randompassword += uppercase[Math.floor(Math.random() * uppercase.length)]
                characterPool = characterPool.concat(uppercase);
            }
        var confirmNumbers = confirm("Do you want your pasword to contain numbers?");
            if (confirmNumbers === true) {
                randompassword += numbers[Math.floor(Math.random() * numbers.length)]
                characterPool = characterPool.concat(numbers);
            }
        var confirmSpecial = confirm("Do you want your password to contain special characters?");
            if (confirmSpecial === true) {
                randompassword += special[Math.floor(Math.random() * special.length)]
                characterPool = characterPool.concat(special);
            }
        console.log(randompassword.length)
            for (var i = randompassword.length; i < passwordLength; i++) {
                console.log(randompassword);
                randompassword += characterPool[Math.floor(Math.random() * characterPool.length)]
            };  
    } else {alert("Answer must be a number between 8 and 128.")}
    /****
     * WRITE YOUR CODE HERE
     */
    return randompassword;
  }
  
  //////////////////////////////////////////////////////////////
  // DO NOT TOUCH THE CODE BELOW
  //////////////////////////////////////////////////////////////
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
  