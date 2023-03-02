function moveFunc(e) {
    percentX = document.getElementById("wrapper").offsetWidth / 100;
    percentY = document.getElementById("wrapper").offsetHeight / 100;
    // document.getElementById("logo").style.top = e.pageY / percentY + "%";
    // document.getElementById("logo").style.left = e.pageX / percentX + "%";
    checkX = e.pageX / percentX - 50;
    checkY = e.pageY / percentY - 50;
    // document.getElementById("logo").style.transform = "translate(" + checkX + "%, " + checkY + "%" + ")";
    checkX = checkX / 3;
    checkY = checkY / 3;
    document.getElementById("logo").style.setProperty('--shadowX', Math.floor(checkX)+"px");
    document.getElementById("logo").style.setProperty('--shadowY', Math.floor(checkY)+"px");
}