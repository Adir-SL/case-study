function videosOnScroll(){
    scrollPos = document.getElementById("wrapper").scrollTop;
    var x = document.querySelectorAll("video");
    var i;
    for (i = 0; i < x.length; i++) {
        if(scrollPos > x[i].scrollHeight){
            x[i].pause();
        }else{
            x[i].play();
        }
    }
    console.log(scrollPos)
}