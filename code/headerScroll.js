function scrollCheck(){

    scrollPercent = document.getElementsByClassName('firstSection')[0].offsetHeight / 100;
    scrollTravel = (document.getElementsByClassName('firstSection')[0].offsetHeight - document.getElementsByClassName('firstSection')[0].getBoundingClientRect().top) / scrollPercent - 100;
    
    if(scrollTravel > 50){
        scrollPos = 50;
    }else{
        if(scrollTravel < 0){
            scrollPos = 0;
        }else{
            scrollPos = scrollTravel;
        }
    }
    
    document.getElementById('titleKido').style.transform = "scale(" + (1 - (scrollPos / 75)) + ") translateY(" + (scrollPos) + "vh)";

    if(document.getElementById('mainHeader').getBoundingClientRect().top == '0'){
        document.getElementById('mainHeader').querySelectorAll('div')[0].style.transitionDelay = '300ms';
        document.getElementById('mainHeader').querySelectorAll('div')[1].style.transitionDelay = '0s';
        document.getElementById('mainHeader').querySelectorAll('div')[2].style.transitionDelay = '0s';
        document.getElementById('mainHeader').querySelectorAll('button')[0].style.transitionDelay = '0s';

        document.getElementById('mainHeader').querySelectorAll('div')[0].style.opacity = '1';
        document.getElementById('mainHeader').querySelectorAll('div')[1].style.opacity = '0';
        document.getElementById('mainHeader').querySelectorAll('div')[2].style.opacity = '0';
        document.getElementById('mainHeader').querySelectorAll('button')[0].style.opacity = '0';
        if(document.getElementsByClassName('firstSection')[0].getBoundingClientRect().bottom < 0){
            // document.getElementById('mainHeader').querySelectorAll('.logoDiv')[0].style.backgroundImage = 'url(images/new-k.gif)';
            document.getElementById('mainHeader').querySelectorAll('.logoDiv')[0].style.filter = "invert(0%)";
        }else{
            // document.getElementById('mainHeader').querySelectorAll('.logoDiv')[0].style.backgroundImage = 'url(images/new-k-invert.gif)';
            document.getElementById('mainHeader').querySelectorAll('.logoDiv')[0].style.filter = "invert(100%)";
        }
    }else{
        document.getElementById('mainHeader').querySelectorAll('div')[0].style.transitionDelay = '0s';
        document.getElementById('mainHeader').querySelectorAll('div')[1].style.transitionDelay = '300ms';
        document.getElementById('mainHeader').querySelectorAll('div')[2].style.transitionDelay = '300ms';
        document.getElementById('mainHeader').querySelectorAll('button')[0].style.transitionDelay = '300ms';

        document.getElementById('mainHeader').querySelectorAll('div')[0].style.opacity = '0';
        document.getElementById('mainHeader').querySelectorAll('div')[1].style.opacity = '1';
        document.getElementById('mainHeader').querySelectorAll('div')[2].style.opacity = '1';
        document.getElementById('mainHeader').querySelectorAll('button')[0].style.opacity = '1';
    }
}