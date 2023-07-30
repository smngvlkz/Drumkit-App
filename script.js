const buttons = [
    { id: "kick", soundId: "kick-sound" },
    { id: "claps", soundId: "claps-sound" },
    { id: "boom", soundId: "boom-sound" },
    { id: "tom", soundId: "tom-sound" },
    { id: "hihat", soundId: "hihat-sound" },
    { id: "chung", soundId: "chung-sound" },
    { id: "thump", soundId: "thump-sound" },
    { id: "openhihat", soundId: "openhihat-sound" },
    { id: "punch", soundId: "punch-sound" },
    { id: "mapex", soundId: "mapex-sound" }
  ];
  
  for (const button of buttons) {
    const buttonElement = document.getElementById(button.id);
    const soundElement = document.getElementById(button.soundId);
  
    buttonElement.addEventListener("click", function() {
      soundElement.currentTime = 0;
      soundElement.play();
    });
  }
  
