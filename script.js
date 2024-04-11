document.body.addEventListener("keyup", (event) => {
    playSound(event.code.toLowerCase());
});

document.querySelector(".composer button").addEventListener("click", () => {
    let composition = document.querySelector("#input").value;

    if(composition !== "") {
        let compostionArray = composition.split("");
        playComposition(compostionArray);
    }
})

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key=${sound}]`);    

    if(keyElement) {
        keyElement.classList.add("active");

        setTimeout(() => {
            keyElement.classList.remove("active");
        }, 300);
    }

    if(audioElement) {
        audioElement.currentTime = 0;
        audioElement.play();
    }     
}

function playComposition(compostionArray) {
    let wait = 0;

    for(let composition of compostionArray) {
      setTimeout(() => {
        playSound(`key${composition}`)
      }, wait);  
        
        wait += 250;
    }
}