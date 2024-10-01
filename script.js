// Weight variables
let weightSlider = document.getElementById("myWeight");
let weightOutput = document.getElementById("inputWeight");

// Height variables
let heightSlider = document.getElementById("myHeight");
let heightOutput = document.getElementById("inputHeight");

// Display initial slider values
weightOutput.innerHTML = weightSlider.value;
heightOutput.innerHTML = heightSlider.value;

// Update sliders in real-time while dragging
weightSlider.oninput = function () {
  weightOutput.innerHTML = this.value;
}

heightSlider.oninput = function () {
  heightOutput.innerHTML = this.value;
}

// Change weight-slider value on weight-number input
function showValWeight(newVal) {
  weightSlider.value = newVal; // Corrected assignment operator
  weightOutput.innerHTML = newVal; // Update the output display
}

// Change height-slider value on height-number input
function showValHeight(newVal) {
  heightSlider.value = newVal; // Corrected assignment operator
  heightOutput.innerHTML = newVal; // Update the output display
}
// Add event listeners for sliders
weightSlider.addEventListener("input", updateValueWeight);
heightSlider.addEventListener("input", updateValueHeight);

function updateValueWeight(e) {
  weightOutput.value = e.target.value; // Use e.target instead of e.srcElement for better compatibility
}

function updateValueHeight(e) {
  heightOutput.value = e.target.value; // Use e.target instead of e.srcElement for better compatibility
}

// Calculate BMI
function calculateBmi() {
  let weight = document.bmiForm.realweight.value;
  let height = document.bmiForm.realheight.value / 100;
  let realbmi = weight / Math.pow(height, 2);
  
  let realbmiOutput = document.getElementById("yourbmi");
  let messageOutput = document.getElementById("evaluationMessage");

  let roundedBmi = realbmi.toFixed(1); // Fixed assignment operator

  messageOutput.innerHTML = ""; // Clear message before calculating new BMI
  realbmiOutput.innerHTML = roundedBmi; // Print BMI

  // Appropriate message for your BMI rating
  if (roundedBmi > 26) {
    messageOutput.innerHTML = "Start workout bro!!";
  } else if (roundedBmi >= 18.5 && roundedBmi <= 24.9) {
    messageOutput.innerHTML = "You have a normal weight!";
  } else if (roundedBmi < 18.5) {
    messageOutput.innerHTML = "You are underweight.";
  } else {
    messageOutput.innerHTML = "You are overweight.";
  }
}
