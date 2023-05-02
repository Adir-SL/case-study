function hijack(){
    console.log(document.getElementById("wrapper").scrollTop);
    
    // if(document.getElementById("wrapper").scrollTop > document.getElementsByClassName("flex-container")[1].getBoundingClientRect().bottom){
    //     resethijack();
    //     document.getElementsByClassName("flex-container")[1].style.height = '100vh';
    // }else{
    //     if(document.getElementById("wrapper").scrollTop > document.getElementsByClassName("flex-container")[0].getBoundingClientRect().bottom){
    //         resethijack();
    //         document.getElementsByClassName("flex-container")[0].style.height = '100vh';
    //     }
    // }

    
}

function resethijack(){
    var x = document.getElementsByClassName("flex-container");
    var i;
    for (i = 0; i < x.length; i++) {
        // heightDeg = x[i].clientHeight /  180;
        // x[i].style.transform = "translateZ("+ Math.floor(x[i].getBoundingClientRect().top / 10) + "px)" + "rotateX("+ Math.floor((x[i].getBoundingClientRect().top / 100) * heightDeg * -1) + "deg)";
        x[i].style.transform = "scale("+ ((1000 - x[i].getBoundingClientRect().top)/1000) +")";
        // if(x[i].getBoundingClientRect().top == 0){
        //     x[i].style.opacity = "1";
        // }else{
        //     x[i].style.opacity = "0";
        // }
    }
}