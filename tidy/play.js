function playFunc(e){
    if(window.playVar == 1){
        e.target.pause();
        e.target.parentNode.getElementsByClassName("play-button")[0].style.opacity = 1;
        window.playVar = 0;
    }else{
        e.target.play();
        e.target.parentNode.getElementsByClassName("play-button")[0].style.opacity = 0;
        window.playVar = 1;
    }
}

function sparkFunc(e){
    e.target.classList.add("sparks");
    setTimeout(function(){
        e.target.classList.remove("sparks");
    }, 500);
}