function scrollCheck(){
    if(document.querySelectorAll('section')[0].getBoundingClientRect().top < '80'){
        document.getElementById('mainHeader').querySelectorAll('div')[0].style.transitionDelay = '300ms';
        document.getElementById('mainHeader').querySelectorAll('div')[1].style.transitionDelay = '0s';
        document.getElementById('mainHeader').querySelectorAll('div')[2].style.transitionDelay = '0s';
        document.getElementById('mainHeader').querySelectorAll('button')[0].style.transitionDelay = '0s';
        // document.getElementById('mainHeader').style.pointerEvents = 'none';
        document.getElementById('mainHeader').querySelectorAll('button')[0].style.pointerEvents = 'none';
        document.getElementsByClassName("linksDiv")[0].style.pointerEvents = 'none';
        document.getElementById('mainHeader').querySelectorAll('div')[0].style.opacity = '1';
        document.getElementById('mainHeader').querySelectorAll('div')[1].style.opacity = '0';
        document.getElementById('mainHeader').querySelectorAll('div')[2].style.opacity = '0';
        document.getElementById('mainHeader').querySelectorAll('button')[0].style.opacity = '0';
    }else{
        document.getElementById('mainHeader').querySelectorAll('div')[0].style.transitionDelay = '0s';
        document.getElementById('mainHeader').querySelectorAll('div')[1].style.transitionDelay = '300ms';
        document.getElementById('mainHeader').querySelectorAll('div')[2].style.transitionDelay = '300ms';
        document.getElementById('mainHeader').querySelectorAll('button')[0].style.transitionDelay = '0s';
        // document.getElementById('mainHeader').style.pointerEvents = 'all';
        document.getElementById('mainHeader').querySelectorAll('button')[0].style.pointerEvents = 'all';
        document.getElementsByClassName("linksDiv")[0].style.pointerEvents = 'all';
        document.getElementById('mainHeader').querySelectorAll('div')[0].style.opacity = '0';
        document.getElementById('mainHeader').querySelectorAll('div')[1].style.opacity = '1';
        document.getElementById('mainHeader').querySelectorAll('div')[2].style.opacity = '1';
        document.getElementById('mainHeader').querySelectorAll('button')[0].style.opacity = '1';
    }
}