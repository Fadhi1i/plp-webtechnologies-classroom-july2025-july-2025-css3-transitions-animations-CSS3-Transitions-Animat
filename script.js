// --- Part 2: Functions with parameters, return values & scope ---

// Global variable (demonstrate scope)
let globalCounter = 0;

// Function with parameters + return
function calculateScale(base, factor) {
  let result = base * factor;
  return result; // return value used later
}

// Function demonstrating local scope
function incrementGlobal() {
  let localValue = 1; // local scope
  globalCounter += localValue;
  return globalCounter;
}

// --- Part 3: Combining JS + CSS Animations ---

// Animate Box on button click
const animBox = document.getElementById("animBox");
document.getElementById("animateBtn").addEventListener("click", () => {
  animBox.classList.toggle("animate");
  console.log("Box scaled to:", calculateScale(100, 1.2));
});

// Modal toggle logic
const modal = document.getElementById("modal");
const toggleBtn = document.getElementById("toggleModalBtn");
const closeBtn = document.getElementById("closeModal");

toggleBtn.addEventListener("click", () => {
  modal.classList.add("show");
  console.log("Modal opened. Global count:", incrementGlobal());
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("show");
  console.log("Modal closed.");
});
