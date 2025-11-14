const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");

function alertButton() {
  if (textInput.value === "") {
    alert("Please input a value");
  }
}
