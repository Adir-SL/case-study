function videosOnScroll(){
    scrollPos = document.getElementById("wrapper").scrollTop;
    scrollOffset = 400;
    var x = document.querySelectorAll("video");
    var i;
    for (i = 0; i < x.length; i++) {
        if(x[i].parentElement.tagName == "section" || x[i].parentElement.tagName == "SECTION"){
            tempParent = x[i].parentElement;
        }else{
            tempParent = x[i].parentElement.parentElement;
        }

        if(scrollPos > tempParent.offsetTop - (scrollOffset * 2) && scrollPos < tempParent.offsetTop + tempParent.offsetHeight + scrollOffset){
            if(x[i].currentTime !== x[i].duration){
                x[i].play();
                console.log("in view: " + i + ", source: " + x[i].src);
            }
        }else{
            x[i].currentTime = 0;
            x[i].pause();
        }
    }

    

    if(scrollPos > document.getElementById("mobiles").offsetTop - (scrollOffset * 2) && scrollPos < document.getElementById("mobiles").offsetTop + document.getElementById("mobiles").offsetHeight + scrollOffset){
    }else{
        document.getElementById("mobiles").classList.add("anim-out");
        setTimeout(function(){
            document.getElementById("mobiles").classList.remove("anim-out");
        }, 50);
    }

    if(scrollPos > document.getElementById("white-wrapper").offsetTop - scrollOffset && scrollPos < document.getElementById("white-wrapper").offsetTop + document.getElementById("white-wrapper").offsetHeight - (scrollOffset / 4)){
        document.body.classList.add("lightBody");
    }else{
        document.body.classList.remove("lightBody");
    }
}