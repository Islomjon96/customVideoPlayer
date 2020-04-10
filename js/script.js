document.addEventListener('DOMContentLoaded', function () { // Аналог $(document).ready(function(){
    // Получение необходимых элементов
    const video = document.getElementById('video');
    const play = document.getElementById('play');
    const stop = document.getElementById('stop');
    const progress = document.getElementById('progress');
    const timestamp = document.getElementById('timestamp');

    // Функция изменения статуса видео на проигрывать/приостановить
    function toggleVideoStatus() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }

    // Функция изменения иконок play и pause в зависимости от статуса видео
    function updatePlayIcon() {
        if (video.paused) {
            play.innerHTML = `<i class='fa fa-play fa-2x' ></i>`;
        } else {
            play.innerHTML = `<i class='fa fa-pause fa-2x'></i>`;
        }
    }

    // Функция остановки видео
    function stopVideo() {
        video.currentTime = 0;
        video.pause();
    }

    // Функция изменения показателей input и времени при воспроизведении/остановки
    function updateProgress() {
        progress.value = ((video.currentTime / video.duration) * 100).toString();

        let mins = Math.floor(video.currentTime / 60);
        if (mins < 10) {
            mins = `0${mins}`;
        }

        let secs = Math.floor(video.currentTime % 60);
        if (secs < 10) {
            secs = `0${secs}`;
        }
        timestamp.innerHTML = `${mins}:${secs}`;
    }

    // Функция принудительной задачи время видео
    function setVideoProgress() {
        video.currentTime = (+progress.value * video.duration) / 100;
    }


    // События 
    video.addEventListener('click', toggleVideoStatus);
    video.addEventListener('play', updatePlayIcon);
    video.addEventListener('pause', updatePlayIcon);
    video.addEventListener('timeupdate', updateProgress);

    play.addEventListener('click', toggleVideoStatus);
    stop.addEventListener('click', stopVideo);

    progress.addEventListener('change', setVideoProgress);


});