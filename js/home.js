var says = 
[
    "Is That a Railin Reference?",
    "Please Stop Being Racist In The DISC0RD",
    "tinyurl.com/RailinDev",
    "im gonna redo this site so what you see right now is the last verison of railin version 1" 
]

function pageLoad() {
    makemebus()
}

function makemebus(){
    document.getElementById('randomy').innerHTML = says[Math.floor(Math.random() * says.length)]
}