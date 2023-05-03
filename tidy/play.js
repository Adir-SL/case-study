function playFunc(e){
    if(window.playVar == 1){
        e.target.pause();
        e.target.parentNode.getElementsByClassName("play-button")[0].style.opacity = 1;
        window.playVar = 0;
        document.getElementsByClassName("cover-video")[0].webkitExitFullscreen;
    }else{
        e.target.play();
        e.target.parentNode.getElementsByClassName("play-button")[0].style.opacity = 0;
        window.playVar = 1;
        e.target.requestFullscreen();
    }
}

function reloadSparks(e){
    e.target.getElementsByTagName("img")[0].src = "images/sparks.gif";
    e.target.getElementsByTagName("img")[0].style.left = e.pageX - e.currentTarget.offsetLeft - (document.getElementById("wrapper").offsetWidth / 7) + "px";
    setTimeout(function(){
        e.target.getElementsByTagName("img")[0].src = "";
    }, 500);
}