function playFunc(e){
    if(window.playVar == 1){
        e.target.parentNode.getElementsByTagName("video")[0].pause();
        window.playVar = 0;
    }else{
        e.target.parentNode.getElementsByTagName("video")[0].play();
        window.playVar = 1;
    }
}