





// Retrieve the kick button element
const kickButton = document.getElementById("kick");
const clapsButton = document.getElementById("claps");

// Retrieve the kick sound element
const kickSound = document.getElementById("kick-sound");
const clapsSound = document.getElementById("claps-sound");

// Attach a click event listener to the kick button
kickButton.addEventListener("click", function() {
  // Reset the sound time to replay it
  kickSound.currentTime = 0;
  
  // Play the kick sound
  kickSound.play();
});

clapsButton.addEventListener("click", function() {
    // Reset the sound time to replay it
    clapsSound.currentTime = 0;
    
    // Play the kick sound
    clapsSound.play();
  });