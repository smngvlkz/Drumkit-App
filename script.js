


// Retrieve the kick button element
const kickButton = document.getElementById("kick");
const clapsButton = document.getElementById("claps");
const snareButton = document.getElementById("snare");
const tomButton = document.getElementById("tom");
const hiHatButton = document.getElementById("hihat");
const chungButton = document.getElementById("chung");
const thumpButton = document.getElementById("thump");
const openhihatButton = document.getElementById("openhihat");
const punchButton = document.getElementById("punch");
const mapexButton = document.getElementById("mapex");


// Retrieve the kick sound element
const kickSound = document.getElementById("kick-sound");
const clapsSound = document.getElementById("claps-sound");
const snareSound = document.getElementById("snare-sound");
const tomSound = document.getElementById("tom-sound");
const hiHatSound = document.getElementById("hihat-sound");
const chungSound = document.getElementById("chung-sound");
const thumpSound = document.getElementById("thump-sound");
const openhihatSound = document.getElementById("openhihat-sound");
const punchSound = document.getElementById("punch-sound");
const mapexSound = document.getElementById("mapex-sound");

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

snareButton.addEventListener("click", function() {
    snareSound.currentTime = 0;
    snareSound.play();
});

tomButton.addEventListener("click", function() {
    tomSound.currentTime = 0;
    tomSound.play();
});

hiHatButton.addEventListener("click", function() {
    hiHatSound.currentTime = 0;
    hiHatSound.play();
});

chungButton.addEventListener("click", function() {
    chungSound.currentTime = 0;
    chungSound.play();
});

thumpButton.addEventListener("click", function() {
    thumpSound.currentTime = 0;
    thumpSound.play();
});

openhiHatButton.addEventListener("click", function() {
    openhiHatSound.currentTime = 0;
    openhiHatSound.play();
});

punchButton.addEventListener("click", function() {
    punchSound.currentTime = 0;
    punchSound.play();
});

mapexButton.addEventListener("click", function() {
    mapexSound.currentTime = 0;
    mapexSound.play();
});
  

  // Attach a keydown event listener to the document
document.addEventListener("keydown", function(event) {
    // Check if the pressed key is "a"
    if (event.key === "a") {
      kickSound.currentTime = 0;
      kickSound.play();
    } else if (event.key === "s") {
        clapsSound.currentTime = 0;
        clapsSound.play();
} else if (event.key === "d") {
    snareSound.currentTime = 0;
    snareSound.play();
  } else if (event.key === "f") {
    tomSound.currentTime = 0;
    tomSound.play();
  } else if (event.key === "g") {
    hiHatSound.currentTime = 0;
    hiHatSound.play();
  } else if (event.key === "k") {
    chungSound.currentTime = 0;
    chungSound.play();
  } else if (event.key === "m") {
    thumpSound.currentTime = 0;
    thumpSound.play();
  } else if (event.key === "v") {
    openhiHatSound.currentTime = 0;
    openhiHatSound.play();
  } else if (event.key === "o") {
    punchSound.currentTime = 0;
    punchSound.play();
  } else if (event.key === "g") {
    mapexSound.currentTime = 0;
    mapexSound.play();
  }
  });
