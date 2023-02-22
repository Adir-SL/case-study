sal({
    threshold: 0.2,
    once: false,
});
sal();

function changeSection(){
    setTimeout(function(){ restartVideos(); }, 300);
}

function stopAllVideos(){
    var x = document.querySelectorAll("video");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].pause();
    }
}

function restartVideos(){
    var x = document.querySelectorAll(".sal-animate");
    var i;
    for (i = 0; i < x.length; i++) {
        if(x[i].querySelector("video") !== null && x[i].querySelector("video").classList.contains("animated") !== true){
            x[i].querySelector("video").currentTime = 0;
            x[i].querySelector("video").play();
            // x[i].querySelector("video").classList.add("animated");
        }
    }
}

function playPauseVideo() {
    let videos = document.querySelectorAll("video");
    videos.forEach((video) => {
        video.muted = true;
        let playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then((_) => {
                let observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.intersectionRatio !== 1 && !video.paused) {
                                video.pause();
                            } else if (video.paused) {
                                video.play();
                            }
                        });
                    },
                    { threshold: 0.2 }
                );
                observer.observe(video);
            });
        }
    });
}
playPauseVideo();