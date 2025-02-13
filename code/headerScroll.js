function scrollCheck() {

    scrollPercent = document.querySelectorAll('section')[0].offsetHeight / 100;
    scrollTravel = (document.querySelectorAll('section')[0].offsetHeight - document.querySelectorAll('section')[0].getBoundingClientRect().top) / scrollPercent - 100;

    if (scrollTravel > 35) {
        scrollPos = 35;
    } else {
        if (scrollTravel < 0) {
            scrollPos = 0;
        } else {
            scrollPos = scrollTravel;
        }
    }


    if (document.querySelectorAll('section')[0].getBoundingClientRect().top < 0) {
        document.getElementById('mainHeader').classList.add('scrolled');
    } else {
        document.getElementById('mainHeader').classList.remove('scrolled');
    }
}

function kidoFunc() {
    document.getElementById('titleKido').style.setProperty('--scrollVar', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));

    if (document.getElementById("titleKido").getBoundingClientRect().top > document.getElementsByClassName("firstSection")[0].getBoundingClientRect().bottom) {
        document.getElementById('titleKido').getElementsByTagName('path')[0].style.fill = "#000000";
        document.getElementById('titleKido').style.mixBlendMode = "normal";
    } else {
        document.getElementById('titleKido').getElementsByTagName('path')[0].style.fill = "#101010";
        document.getElementById('titleKido').style.mixBlendMode = "difference";
    }
}