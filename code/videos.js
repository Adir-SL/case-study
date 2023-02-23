function videosOnScroll(){
    scrollPos = document.getElementById("wrapper").scrollTop;
    scrollOffset = 400;
    var x = document.querySelectorAll(".video-content");
    var i;
    for (i = 0; i < x.length; i++) {
        if(scrollPos > x[i].offsetTop - scrollOffset && scrollPos < x[i].offsetTop + x[i].offsetHeight + scrollOffset){
            if(x[i].children[0].tagName == "VIDEO" || x[i].children[0].tagName == "video"){
                if(x[i].children[0].currentTime !== x[i].children[0].duration){
                    x[i].children[0].play();
                }else{
                    x[i].classList.remove("anim-out");
                }
            }
            console.log("in view: " + i);
        }else{
            if(x[i].children[0].tagName == "VIDEO" || x[i].children[0].tagName == "video"){
                x[i].children[0].currentTime = 0;
                x[i].children[0].pause();
            }else{
                x[i].classList.add("anim-out");
            }
        }
    }

    if(scrollPos > document.getElementById("white-wrapper").offsetTop - scrollOffset && scrollPos < document.getElementById("white-wrapper").offsetTop + document.getElementById("white-wrapper").offsetHeight + scrollOffset){
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#181818";
        document.getElementById("k-sticky").style.backgroundImage = "url(images/new-k-invert.gif)";
    }else{
        document.body.style.backgroundColor = "#181818";
        document.body.style.color = "#ffffff";
        document.getElementById("k-sticky").style.backgroundImage = "url(images/new-k.gif)";
    }
}