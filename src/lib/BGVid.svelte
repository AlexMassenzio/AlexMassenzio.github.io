<video class="bgvid" autoplay={true} loop={true} muted={true}>
    <!-- <source src="http://thenewcode.com/assets/videos/polina.mp4" type="video/mp4"> -->
</video>

<style>
.bgvid { 
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    transform: translateX(-50%) translateY(-50%);
    background: url('//demosthenes.info/assets/images/polina.jpg') no-repeat;
    background-size: cover;
    transition: 1s opacity;
}
</style>