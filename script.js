const startButton = document.getElementById("startButton");
const countdownElement = document.getElementById("countdown");
const quoteElement = document.getElementById("quote");

// Array of motivational quotes
const quotes = [
  "Breathe in peace, exhale stress.",
  "You are exactly where you need to be.",
  "Stay in the moment and let it flow.",
  "Calm your mind; the rest will follow.",
  "Inhale courage, exhale fear.",
  "You have the power to create calmness within."
];

// Start the timer
startButton.addEventListener("click", () => {
  const minutesInput = document.getElementById("minutes");
  let time = parseInt(minutesInput.value) * 60; // Convert minutes to seconds

  if (isNaN(time) || time <= 0) {
    alert("Please enter a valid number of minutes.");
    return;
  }

  // Display a random quote
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteElement.textContent = randomQuote;

  // Countdown Timer
  const timerInterval = setInterval(() => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    countdownElement.textContent = `${minutes}m ${seconds}s`;

    if (time <= 0) {
      clearInterval(timerInterval);
      countdownElement.textContent = "Time's up! Great job!";
    }
    time--;
  }, 1000);
});