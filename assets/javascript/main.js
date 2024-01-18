const countdownHtml = document.getElementById("countdownHtml")
let now = new Date().getTime();
let tomorrow = new Date(2024, 0, 19, 9, 30, 0, 0).getTime(); 

const x = setInterval(function(){
    const countdown = tomorrow - now

    let ore = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minuti = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    let secondi = Math.floor((countdown % (1000 * 60)) / 1000);

    countdownHtml.innerHTML = `Mancano: ${ore} ore, ${minuti} minuti e ${secondi} secondi all'inzio della lezione`

    if (countdown < 0) {
        clearInterval(x);
        countdownHtml.innerHTML = "Lezione iniziata!"
    }
    
    now = new Date().getTime();
}, 1000)