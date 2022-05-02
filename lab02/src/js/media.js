
let tagImg = document.createElement('img');
tagImg.setAttribute("id", "photo")
let tagVideo = document.createElement('iframe');
tagVideo.setAttribute("id", "video");

function getImage (urlImg) {
    tagImg.src = urlImg;
    let imgScriptTag = document.getElementById('media');
    imgScriptTag.innerHTML = tagImg.outerHTML;
}

function getVideo(urlVideo) {
    tagVideo.src = urlVideo;
    let videoScriptTag = document.getElementById('media');
    videoScriptTag.innerHTML = tagVideo.outerHTML;
}
