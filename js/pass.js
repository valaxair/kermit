const hii = document.getElementById('isorno');

function submit() {                                 // acess nsfw games ;)
    if (document.getElementById('secretgohere').value == "nsfw"){
        if (localStorage.getItem("nsf") == "devil") {
            localStorage.setItem("nsf", "off");
            isorno.style.display = "block";
            isorno.style.color = "#7cfc00";
            isorno.innerHTML = "Secret Working!";
            
            setTimeout(fortnite, 2000);
        } else {
            localStorage.setItem("nsf", "devil");
            isorno.style.display = "block";
            isorno.style.color = "#7cfc00";
            isorno.innerHTML = "Secret Working!";

            setTimeout(fortnite, 2000);
        } 
    } else {
        isorno.style.display = "block";
        isorno.style.color = "#ff0000";
        isorno.innerHTML = "Secret Invaild.";

        setTimeout(fortnite, 2000);
    }
}

function fortnite() {
    isorno.style.display = "none"
}