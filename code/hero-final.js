function moveFunc(e) {
    console.log("ass")
    percentX = document.getElementById("wrapper").offsetWidth / 100;
    percentY = document.getElementById("wrapper").offsetHeight / 100;
    document.getElementById("eyeObj").style.top = e.pageY / percentY + "%";
    document.getElementById("eyeObj").style.left = e.pageX / percentX + "%";
    checkX = e.pageX / percentX - 50;
    checkY = e.pageY / percentY - 50;
    document.getElementById("logoDiv").style.transform = "translate(" + checkX + "%, " + checkY + "%" + ")";
}