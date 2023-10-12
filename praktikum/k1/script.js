const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;
    if (value === "AC") {
      currentInput = "";
    } else if (value === "DE") {
      currentInput = currentInput.slice(0, -1);
    } else if (value === "=") {
      try {
        currentInput = eval(currentInput).toString();
      } catch (error) {
        currentInput = "Error";
      }
    } else if (value === "^") {
      // Handle perhitungan pangkat
      currentInput += "**";
    } else {
      currentInput += value;
    }
    display.value = currentInput;
  });
});
