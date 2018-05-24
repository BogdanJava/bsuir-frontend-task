let bannerString = document.getElementById('banner__run-string');
let stringPosInfo = bannerString.getBoundingClientRect();
let banner = document.getElementById('banner');
let bannerPosInfo = banner.getBoundingClientRect();

let pos = stringPosInfo.left;
setInterval(() => {
    console.log(bannerString.style.left.substr(0, bannerString.style.left.length - 2) + "|" + bannerPosInfo.width);
    if(bannerString.style.left.substr(0, bannerString.style.left.length - 2) > bannerPosInfo.width - stringPosInfo.width) {
        pos = -stringPosInfo.width;
    }
    bannerString.style.left = ++pos + "px";
}, 30);