const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

checkButton.addEventListener('click', function() {
  const userInput = document.getElementById('text-input')
.value.trim()
.toLowerCase();

if (userInput === '') {
alert('Please input a value');
return;
}

const cleanInput = userInput.replace(/[^a-z0-9]/g, '');
if (cleanInput === 'A') {
alert('Please input a value');
return;
}

function checkPalindrome(input) {
const len = input.length;
for (let i = 0; i < len / 2; i += 1) {
  if (input[i] !== input[len - 1 - i]) {
    return false;
  }
}
return true;
}

const isPalindrome = checkPalindrome(cleanInput);

if (isPalindrome) {
result.textContent = `${userInput} is a palindrome`;

} else {
result.textContent = `${userInput} is not a palindrome`;
 
}
});