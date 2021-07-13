$(document).ready(function () {
    $('.solutions').slick({
        centerMode: true,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: false,
        draggable: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

$(document).ready(function () {
    $('.solutions-nav').slick({
        centerMode: true,
        slidesToShow: 9,
        autoplay: false,
        swipeToSlide: true,
        arrows: false,
        dots: false,
        speed:600,
        focusOnSelect: true,
        draggable: true,
        initialSlide: initialSlide,
        asNavFor: '.solutions-content',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

$(document).ready(function () {
    $('.solutions-content').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        swipeToSlide: true,
        arrows: false,
        speed:600,
        dots: false,
        draggable: false,
        initialSlide: initialSlide,
        asNavFor: '.solutions-nav',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

var ytplayerList;

    function onPlayerReady(e) {
        var video_data = e.target.getVideoData(),
            label = video_data.video_id+':'+video_data.title;
        e.target.ulabel = label;
        console.log(label + " is ready!");

    }
    function onPlayerError(e) {
        console.log('[onPlayerError]');
    }
    function onPlayerStateChange(e) {
        var label = e.target.ulabel;
        if (e["data"] == YT.PlayerState.PLAYING) {
            console.log({
                event: "youtube",
                action: "play:"+e.target.getPlaybackQuality(),
                label: label
            });
            //if one video is play then pause other
            pauseOthersYoutubes(e.target);
        }
        if (e["data"] == YT.PlayerState.PAUSED) {
            console.log({
                event: "youtube",
                action: "pause:"+e.target.getPlaybackQuality(),
                label: label
            });
        }
        if (e["data"] == YT.PlayerState.ENDED) {
            console.log({
                event: "youtube",
                action: "end",
                label: label
            });
        }
        //track number of buffering and quality of video
        if (e["data"] == YT.PlayerState.BUFFERING) {
            e.target.uBufferingCount?++e.target.uBufferingCount:e.target.uBufferingCount=1; 
            console.log({
                event: "youtube",
                action: "buffering["+e.target.uBufferingCount+"]:"+e.target.getPlaybackQuality(),
                label: label
            });
            //if one video is play then pause other, this is needed because at start video is in buffered state and start playing without go to playing state
            if( YT.PlayerState.UNSTARTED ==  e.target.uLastPlayerState ){
                pauseOthersYoutubes(e.target);
            }
        }
        //last action keep stage in uLastPlayerState
        if( e.data != e.target.uLastPlayerState ) {
            console.log(label + ":state change from " + e.target.uLastPlayerState + " to " + e.data);
            e.target.uLastPlayerState = e.data;
        }
    }
    function initYoutubePlayers(){
        ytplayerList = null; //reset
        ytplayerList = []; //create new array to hold youtube player
        for (var e = document.getElementsByTagName("iframe"), x = e.length; x-- ;) {
            if (/youtube.com\/embed/.test(e[x].src)) {
                ytplayerList.push(initYoutubePlayer(e[x]));
                console.log("create a Youtube player successfully");
            }
        }

    }
    function pauseOthersYoutubes( currentPlayer ) {
        if (!currentPlayer) return;
        for (var i = ytplayerList.length; i-- ;){
            if( ytplayerList[i] && (ytplayerList[i] != currentPlayer) ){
                ytplayerList[i].pauseVideo();
            }
        }  
    }
    //init a youtube iframe
    function initYoutubePlayer(ytiframe){
        console.log("have youtube iframe");
        var ytp = new YT.Player(ytiframe, {
            events: {
                onStateChange: onPlayerStateChange,
                onError: onPlayerError,
                onReady: onPlayerReady
            }
        });
        ytiframe.ytp = ytp;
        return ytp;
    }
    function onYouTubeIframeAPIReady() {
        console.log("YouTubeIframeAPI is ready");
        initYoutubePlayers();
    }
    var tag = document.createElement('script');
    //use https when loading script and youtube iframe src since if user is logging in youtube the youtube src will switch to https.
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);   

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

var initialSlide = getUrlParameter('initialSlide');

$(document).ready(function () {
    $(".navbar-toggler").on("click", function () {
        $(".open").toggleClass("hidden");
        $(".open").toggleClass("visible");
        $(".close").toggleClass("visible");
        $(".close").toggleClass("hidden");
    });
});