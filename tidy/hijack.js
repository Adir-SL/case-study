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
        if(x[i].getBoundingClientRect().top == 0){
            x[i].style.opacity = "1";
        }else{
            x[i].style.opacity = "0";
        }
    }
}