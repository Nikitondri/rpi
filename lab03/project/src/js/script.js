
window.onload = (event) => {
    // //PLANE
    let spriteFrames = [
        // { transform: 'translateY(0)' },
        { transform: 'translateY(-100%)' }
    ];
    let planeSprite = document.getElementById('plane-sprite');

    let planeSpriteAnim = planeSprite.animate(
        spriteFrames, {
        easing: 'steps(2, end)',
        direction: "reverse",
        duration: 500,
        playbackRate: 1,
        iterations: Infinity
    });



    // CLOUD
    let cloudFrames = [
        { transform: 'translateX(100vw)' },
        { transform: 'translateX(-100vw)' }
    ];

    let cloud1Sprite = document.getElementById('cloud1-sprite');
    let cloud2Sprite = document.getElementById('cloud2-sprite');
    let cloud3Sprite = document.getElementById('cloud3-sprite');
    let cloud4Sprite = document.getElementById('cloud4-sprite');

    let cloudTimingBackground = {
        duration: 5000,
        iterations: Infinity,
        playbackRate: 1,
    };

    let cloud1SpriteMovement = cloud1Sprite.animate(cloudFrames, cloudTimingBackground);
    let cloud2SpriteMovement = cloud2Sprite.animate(cloudFrames, cloudTimingBackground);
    let cloud3SpriteMovement = cloud3Sprite.animate(cloudFrames, cloudTimingBackground);
    let cloud4SpriteMovement = cloud4Sprite.animate(cloudFrames, cloudTimingBackground);

    let goFaster = () => {
        cloudTimingBackground.playbackRate *= 1.1;
        updateAnimateSpeed(cloudTimingBackground.playbackRate);
    }

    let goSlower = () => {
        cloudTimingBackground.playbackRate *= 0.9;
        updateAnimateSpeed(cloudTimingBackground.playbackRate);
    }

    let updateAnimateSpeed = (val) => {
        console.log('PlaybackRate ' + val)
        cloud1SpriteMovement.updatePlaybackRate(val);
        cloud2SpriteMovement.updatePlaybackRate(val);
        cloud3SpriteMovement.updatePlaybackRate(val);
        cloud4SpriteMovement.updatePlaybackRate(val);
        planeSpriteAnim.updatePlaybackRate(val)
        let meter = document.getElementById('meter');
        meter.value = val;
    }

    let speedDecay = () => {
        if (cloudTimingBackground.playbackRate > 0) {
            cloudTimingBackground.playbackRate *= 0.90;
            updateAnimateSpeed(cloudTimingBackground.playbackRate);
        }
    }

    setInterval(speedDecay, 3000);


    window.addEventListener('mousemove', (e) => {
        let plane = document.getElementById('plane-div');
        let left = e.pageX + "px";
        let top = e.pageY + "px";
        plane.style.left = left;
        plane.style.top = top;
    });


    document.addEventListener('keyup', event => {
        if (event.code === 'ArrowRight') {
            goFaster();
        }
    })

    document.addEventListener('keyup', event => {
        if (event.code === 'ArrowLeft') {
            goSlower();
        }
    })

};