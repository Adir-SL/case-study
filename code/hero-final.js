function moveFunc(e) {
    percentX = document.getElementById("wrapperLogo").offsetWidth / 100;
    percentY = document.getElementById("wrapperLogo").offsetHeight / 100;

    checkOrigX = e.pageX / percentX - 50;
    checkOrigY = e.pageY / percentY - 50;

    checkX = e.pageX / percentX - 20;
    checkY = e.pageY / percentY - 50;
    checkX = checkX / -7;
    checkY = checkY / 7;
    document.getElementById("kFont").style.setProperty('--shadowX', checkX*-1+"px");
    document.getElementById("kFont").style.setProperty('--shadowY', checkY+"px");
    if(checkY < 0){
        checkY = checkY * -1;
    }
    if(checkX < 0){
        checkX = checkX * -1;
    }
    if(checkX > checkY){
        checkFade = checkX;
    }else{
        checkFade = checkY;
    }
    document.getElementById("kFont").style.setProperty('--shadowFade', checkFade+"px");

    checkX = e.pageX / percentX - 40;
    checkY = e.pageY / percentY - 50;
    checkX = checkX / -7;
    checkY = checkY / 7;
    document.getElementById("iFont").style.setProperty('--shadowX', checkX*-1+"px");
    document.getElementById("iFont").style.setProperty('--shadowY', checkY+"px");
    if(checkY < 0){
        checkY = checkY * -1;
    }
    if(checkX < 0){
        checkX = checkX * -1;
    }
    if(checkX > checkY){
        checkFade = checkX;
    }else{
        checkFade = checkY;
    }
    document.getElementById("iFont").style.setProperty('--shadowFade', checkFade+"px");

    checkX = e.pageX / percentX - 60;
    checkY = e.pageY / percentY - 50;
    checkX = checkX / -7;
    checkY = checkY / 7;
    document.getElementById("dFont").style.setProperty('--shadowX', checkX*-1+"px");
    document.getElementById("dFont").style.setProperty('--shadowY', checkY+"px");
    if(checkY < 0){
        checkY = checkY * -1;
    }
    if(checkX < 0){
        checkX = checkX * -1;
    }
    if(checkX > checkY){
        checkFade = checkX;
    }else{
        checkFade = checkY;
    }
    document.getElementById("dFont").style.setProperty('--shadowFade', checkFade+"px");

    checkX = e.pageX / percentX - 80;
    checkY = e.pageY / percentY - 50;
    checkX = checkX / -7;
    checkY = checkY / 7;
    document.getElementById("oFont").style.setProperty('--shadowX', checkX*-1+"px");
    document.getElementById("oFont").style.setProperty('--shadowY', checkY+"px");
    if(checkY < 0){
        checkY = checkY * -1;
    }
    if(checkX < 0){
        checkX = checkX * -1;
    }
    if(checkX > checkY){
        checkFade = checkX;
    }else{
        checkFade = checkY;
    }
    document.getElementById("oFont").style.setProperty('--shadowFade', checkFade+"px");

    // setTimeout(function(){
    //     moveFunc(e);
    // }, 50);
}
