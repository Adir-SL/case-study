function scrollCheck(){

    scrollPercent = document.querySelectorAll('section')[0].offsetHeight / 100;
    scrollTravel = (document.querySelectorAll('section')[0].offsetHeight - document.querySelectorAll('section')[0].getBoundingClientRect().top) / scrollPercent - 100;
    
    if(scrollTravel > 35){
        scrollPos = 35;
    }else{
        if(scrollTravel < 0){
            scrollPos = 0;
        }else{
            scrollPos = scrollTravel;
        }
    }
    

    if(document.getElementById('wrapper').getBoundingClientRect().top !== 0){
        document.getElementById('mainHeader').querySelectorAll('div')[0].style.transitionDelay = '300ms';
        document.getElementById('mainHeader').querySelectorAll('div')[1].style.transitionDelay = '0s';
        document.getElementById('mainHeader').querySelectorAll('nav')[0].style.transitionDelay = '0s';
        document.getElementById('mainHeader'). querySelectorAll('a')[0].style.transitionDelay = '0s';
        // document.getElementById('mainHeader').style.pointerEvents = 'none';
        // document.getElementById('mainHeader'). querySelectorAll('a')[0].style.pointerEvents = 'none';
        // document.getElementsByClassName("linksDiv")[0].style.pointerEvents = 'none';
        document.getElementById('mainHeader').querySelectorAll('div')[0].style.opacity = '1';
        document.getElementById('mainHeader').querySelectorAll('div')[1].style.opacity = '0';
        document.getElementById('mainHeader').querySelectorAll('nav')[0].style.opacity = '0';
        document.getElementById('mainHeader'). querySelectorAll('a')[0].style.opacity = '0';
        // if(document.querySelectorAll('section')[0].getBoundingClientRect().bottom < 30 && document.getElementsByClassName('whiteSection')[0].classList.contains("not") !== true){
        //     if(document.getElementsByClassName('whiteSection')[0].getBoundingClientRect().top < 30){
        //         if(document.querySelectorAll('section')[0].classList.contains("firstSection") == true){
        //             document.getElementById('mainHeader').querySelectorAll('.logoDiv')[0].style.filter = "invert(100%)";
        //         }else{
        //             document.getElementById('mainHeader').querySelectorAll('.logoDiv')[0].style.filter = "invert(0%)";
        //     }
        //     }else{
        //         if(document.querySelectorAll('section')[0].classList.contains("firstSection") == true){
        //             document.getElementById('mainHeader').querySelectorAll('.logoDiv')[0].style.filter = "invert(0%)";
        //         }else{
        //             document.getElementById('mainHeader').querySelectorAll('.logoDiv')[0].style.filter = "invert(100%)";
        //         }
        //     }
        // }else{
        //     document.getElementById('mainHeader').querySelectorAll('.logoDiv')[0].style.filter = "invert(100%)";
        // }
    }else{
        document.getElementById('mainHeader').querySelectorAll('div')[0].style.transitionDelay = '0s';
        document.getElementById('mainHeader').querySelectorAll('div')[1].style.transitionDelay = '300ms';
        document.getElementById('mainHeader').querySelectorAll('nav')[0].style.transitionDelay = '300ms';
        document.getElementById('mainHeader'). querySelectorAll('a')[0].style.transitionDelay = '0s';
        // document.getElementById('mainHeader').style.pointerEvents = 'all';
        document.getElementById('mainHeader'). querySelectorAll('a')[0].style.pointerEvents = 'all';
        document.getElementsByClassName("linksDiv")[0].style.pointerEvents = 'all';
        document.getElementById('mainHeader').querySelectorAll('div')[0].style.opacity = '0';
        document.getElementById('mainHeader').querySelectorAll('div')[1].style.opacity = '1';
        document.getElementById('mainHeader').querySelectorAll('nav')[0].style.opacity = '1';
        document.getElementById('mainHeader'). querySelectorAll('a')[0].style.opacity = '1';
    }
}

function kidoFunc(){
    document.getElementById('titleKido').style.setProperty('--scrollVar', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));

    if(document.getElementById("titleKido").getBoundingClientRect().top > document.getElementsByClassName("firstSection")[0].getBoundingClientRect().bottom){
        document.getElementById('titleKido').getElementsByTagName('path')[0].style.fill = "#000000";
        document.getElementById('titleKido').style.mixBlendMode = "normal";
    }else{
        document.getElementById('titleKido').getElementsByTagName('path')[0].style.fill = "#101010";
        document.getElementById('titleKido').style.mixBlendMode = "difference";
    }

    // if(document.body.offsetWidth > 899){
    //     document.getElementById('titleKido').style.transform = "scale(" + (1 - (scrollPos / 60)) + ") translateY(" + (scrollPos * 3.75) + "vh)";
    // }else{
    //     document.getElementById('titleKido').style.transform = "scale(" + (1 - (scrollPos / 150)) + ") translateY(" + (scrollPos * 2.3) + "vh)";
    // }
    // if(scrollPos == 35){
    //     document.getElementById('titleKido').getElementsByTagName('path')[0].style.fill = "#000000";
    //     document.getElementById('titleKido').style.mixBlendMode = "normal";
    // }else{
    //     document.getElementById('titleKido').getElementsByTagName('path')[0].style.fill = "#101010";
    //     document.getElementById('titleKido').style.mixBlendMode = "difference";
    // }
}