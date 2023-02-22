function videosOnScroll(){
    scrollPos = document.getElementById("wrapper").scrollTop;
    scrollOffset = 400;
    var x = document.querySelectorAll("video");
    var i;
    for (i = 0; i < x.length; i++) {
        if(scrollPos > x[i].parentElement.offsetTop - scrollOffset && scrollPos < x[i].parentElement.offsetTop + x[i].parentElement.scrollTop + scrollOffset){
            if(x[i].currentTime !== x[i].duration){
                x[i].play();
            }
            console.log("in view: " + i);
        }else{
            x[i].currentTime = 0;
            x[i].pause();
        }
    }
}