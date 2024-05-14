
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-background', {
        height: '100%',
        width: '100%',
        videoId: 'Y7cpCDlRfV0', 
        playerVars: {
            'autoplay': 1, 
            'controls': 0, 
            'loop': 1, 
            'mute': 1, 
            'playlist': 'Y7cpCDlRfV0', 
            'showinfo': 0, 
            'autohide': 1 
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo(); 
}
