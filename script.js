//your JS code here. If required.
// Get references to DOM elements
const input = document.getElementById("ip");
const button = document.getElementById("btn");
const output = document.getElementById("output");

// Utility function to create a delayed Promise
function delayPromise(value, delay, transformFn, label) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = transformFn ? transformFn(value) : value;
      output.innerText = `${label}: ${result}`;
      resolve(result);
    }, delay);
  });
}

// Event listener on button click
button.addEventListener("click", () => {
  const inputValue = Number(input.value);
  if (isNaN(inputValue)) {
    output.innerText = "Please enter a valid number";
    return;
  }

  // Clear previous output
  output.innerText = "";

  // Chain of transformations
  delayPromise(inputValue, 2000, null, "Result")
    .then((res1) => delayPromise(res1, 1000, (n) => n * 2, "Result"))
    .then((res2) => delayPromise(res2, 1000, (n) => n - 3, "Result"))
    .then((res3) => delayPromise(res3, 1000, (n) => n / 2, "Result"))
    .then((res4) => delayPromise(res4, 1000, (n) => n + 10, "Final Result"));
});
