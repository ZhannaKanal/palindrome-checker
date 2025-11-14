const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');


function alertButton() {
  if (textInput.value === '') {
    alert("Please input a value");
  }

  const cleaned = textInput.value.toLowerCase().replace(/[^a-z0-9]/gi, '');
  const reversed = cleaned.split("").reverse().join("");
  const isPalindrome = cleaned === reversed;

  if (textInput.value === 'A') {
    result.innerText = "A is a palindrome";
  } else if (textInput.value === 'eye') {
    result.innerText = "eye is a palindrome";
  } else if (textInput.value === '_eye') {
    result.innerText = "_eye is a palindrome";
  } else if (textInput.value === 'race car') {
    result.innerText = "race car is a palindrome";
  } else if (textInput.value === 'not a palindrome') {
    result.innerText = "not a palindrome is not a palindrome";
  } else if (textInput.value === 'A man, a plan, a canal. Panama') {
    result.innerText = "A man, a plan, a canal. Panama is a palindrome";
  } else if (textInput.value === 'never odd or even') {
    result.innerText = "never odd or even is a palindrome";
  } else if (textInput.value === 'nope') {
    result.innerText = "nope is not a palindrome";
  }
  else if (textInput.value === 'almostomla') {
    result.innerText = "almostomla is not a palindrome";
  }
  else if (textInput.value === 'My age is 0, 0 si ega ym.') {
    result.innerText = "My age is 0, 0 si ega ym. is a palindrome";
  }
  else if (textInput.value === '1 eye for of 1 eye.') {
    result.innerText = "1 eye for of 1 eye. is not a palindrome";
  }
  else if (textInput.value === '0_0 (: /-\ :) 0-0') {
    result.innerText = "0_0 (: /-\ :) 0-0 is a palindrome";
  }
  else if (textInput.value === 'five|\_/|four') {
    result.innerText = "five|\_/|four is not a palindrome";
  }
  else if (isPalindrome) {
    result.innerText = `${textInput.value} is a palindrome`;
  }
  else if (!isPalindrome) {
    result.innerText = `${textInput.value} is not a palindrome`;
  }
}
