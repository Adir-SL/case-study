document.getElementById("wrapper").addEventListener("scroll", scrollingFunc);

function scrollingFunc(){
    clearTimeout(window.scrollEndTimer)
    window.scrollEndTimer = setTimeout(scrollEndFunc, 200);
}

function scrollEndFunc() {
  console.log("scroll end");
  
}

