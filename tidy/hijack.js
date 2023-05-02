function resethijack(){
    if(document.getElementsByClassName("flex-container")[0].getBoundingClientRect().top == 0){
        document.getElementsByTagName("details")[0].getElementsByTagName("summary")[0].click();
        document.getElementById("gif-videos").style.transform = "translateY(0)";
        document.getElementById("gif-videos").getElementsByTagName("video")[0].style.opacity = 1;
        document.getElementById("gif-videos").getElementsByTagName("video")[1].style.opacity = 0;
        document.getElementById("gif-videos").getElementsByTagName("video")[2].style.opacity = 0;
        document.getElementById("gif-videos").getElementsByTagName("video")[3].style.opacity = 0;
    }
    if(document.getElementsByClassName("flex-container")[1].getBoundingClientRect().top == 0){
        document.getElementsByTagName("details")[1].getElementsByTagName("summary")[0].click();
        document.getElementById("gif-videos").style.transform = "translateY(-25%)";
        document.getElementById("gif-videos").getElementsByTagName("video")[0].style.opacity = 0;
        document.getElementById("gif-videos").getElementsByTagName("video")[1].style.opacity = 1;
        document.getElementById("gif-videos").getElementsByTagName("video")[2].style.opacity = 0;
        document.getElementById("gif-videos").getElementsByTagName("video")[3].style.opacity = 0;
    }
    if(document.getElementsByClassName("flex-container")[2].getBoundingClientRect().top == 0){
        document.getElementsByTagName("details")[2].getElementsByTagName("summary")[0].click();
        document.getElementById("gif-videos").style.transform = "translateY(-50%)";
        document.getElementById("gif-videos").getElementsByTagName("video")[0].style.opacity = 0;
        document.getElementById("gif-videos").getElementsByTagName("video")[1].style.opacity = 0;
        document.getElementById("gif-videos").getElementsByTagName("video")[2].style.opacity = 1;
        document.getElementById("gif-videos").getElementsByTagName("video")[3].style.opacity = 0;
    }
    if(document.getElementsByClassName("flex-container")[3].getBoundingClientRect().top == 0){
        document.getElementsByTagName("details")[3].getElementsByTagName("summary")[0].click();
        document.getElementById("gif-videos").style.transform = "translateY(-75%)";
        document.getElementById("gif-videos").getElementsByTagName("video")[0].style.opacity = 0;
        document.getElementById("gif-videos").getElementsByTagName("video")[1].style.opacity = 0;
        document.getElementById("gif-videos").getElementsByTagName("video")[2].style.opacity = 0;
        document.getElementById("gif-videos").getElementsByTagName("video")[3].style.opacity = 1;
    }

}

function resetDetails(e){
    var x = document.getElementsByTagName("details");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].removeAttribute("open");
    }
}