function playFunc(e){
    if(window.playVar == 1){
        e.target.pause();
        window.playVar = 0;
    }else{
        e.target.play();
        window.playVar = 1;
    }
}