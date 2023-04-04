import Player from '@vimeo/player';
var throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const onPlay = function(data) {
    localStorage.setItem("videoplayer-current-time", JSON.stringify(data));
};
player.on('timeupdate', throttle(onPlay, 1000));

const startVideo = localStorage.getItem('videoplayer-current-time');
const currentTime = startVideo ? JSON.parse(startVideo) : {};

player.setCurrentTime(currentTime.seconds || 0);