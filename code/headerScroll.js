function scrollCheck(){
    if(document.getElementById('mainHeader').getBoundingClientRect().top == '0'){
        document.getElementById('mainHeader').querySelectorAll('div')[0].style.opacity = '1';
        document.getElementById('mainHeader').querySelectorAll('div')[1].style.opacity = '0';
        document.getElementById('mainHeader').querySelectorAll('div')[2].style.opacity = '0';
        document.getElementById('mainHeader').querySelectorAll('button')[0].style.opacity = '0';
        if(document.getElementsByClassName('firstSection')[0].getBoundingClientRect().bottom < 0){
            document.getElementById('mainHeader').querySelectorAll('.logoDiv')[0].style.backgroundImage = 'url(images/new-k.gif)';
        }else{
            document.getElementById('mainHeader').querySelectorAll('.logoDiv')[0].style.backgroundImage = 'url(images/new-k-invert.gif)';
        }
    }else{
        document.getElementById('mainHeader').querySelectorAll('div')[0].style.opacity = '0';
        document.getElementById('mainHeader').querySelectorAll('div')[1].style.opacity = '1';
        document.getElementById('mainHeader').querySelectorAll('div')[2].style.opacity = '1';
        document.getElementById('mainHeader').querySelectorAll('button')[0].style.opacity = '1';
    }
}