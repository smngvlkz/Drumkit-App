// Retrieve the kick button element
const kickButton = document.getElementById("kick");

// Retrieve the kick sound element
const kickSound = document.getElementById("kick-sound");

// Attach a click event listener to the kick button
kickButton.addEventListener("click", function() {
  // Reset the sound time to replay it
  kickSound.currentTime = 0;
  
  // Play the kick sound
  kickSound.play();
});