const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

checkButton.addEventListener('click', () => {
  const userInput = document.getElementById('text-input').value;

  if (userInput.trim().length === 0) {
    alert('Please input a value');
  } else {
    const cleanedInput = userInput.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedInput = cleanedInput.split('').reverse().join('');
    if (cleanedInput === reversedInput) {
      resultDiv.innerText = `${userInput} +  is a palindrome`;
    
    } else {
      resultDiv.innerText = `${userInput}+  is not a palindrome`;
    }
  }
});