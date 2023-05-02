function playFunc(e){
    if(window.playVar == 1){
        e.target.pause();
        // e.target.volume = 0;
        e.target.parentNode.getElementsByClassName("play-button")[0].style.opacity = 1;
        window.playVar = 0;
    }else{
        e.target.play();
        // e.target.volume = 1;
        e.target.parentNode.getElementsByClassName("play-button")[0].style.opacity = 0;
        window.playVar = 1;
    }
}

function reloadSparks(e){
    e.target.innerHTML += "<img src='images/sparks.gif' />"
    // e.target.classList.remove("sparks");
    // setTimeout(function(){
    //     e.target.classList.add("sparks");
    // }, 1000);
}