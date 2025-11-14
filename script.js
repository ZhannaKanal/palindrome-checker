const checkButton = document.getElementById('check-btn');
const textInput = document.getElementById('text-input');
const result = document.getElementById('result');

function alertButton() {
  if (textInput.value === '') {
    alert("Please input a value");
  }
  if(textInput.value==='A'){
    result.innerText = "A is a palindrome";
  }else if(textInput.value==='eye'){
    result.innerText = "eye is a palindrome";
  }
}
