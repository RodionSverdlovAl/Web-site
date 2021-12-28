const player = document.querySelector('.player'),
    playBtn = document.querySelector('.play'),
    prevBtn = document.querySelector('.prevsong'),
    nextBtn = document.querySelector('.nextsong'),
    pauseBtn = document.querySelector('pause'),
    audio = document.querySelector('audio'),
    progressContainer = document.querySelector('.progress__container'),
    progress = document.querySelector('.progress'),
    title = document.querySelector('.song'),
    cover = document.querySelector('.cover__img'),
    imgSrc = document.querySelector('.img__src'),
    HeadTitle = document.querySelector('.HeadTitle')

const PauseBUTTON = document.getElementById("pause");
const PlayBUTTON = document.getElementById("play");

const songs = ['Pharaoh-Ртуть','Pharaoh-Мой Ангел','Pharaoh - Reloadead']

let songIndex = 0;

function loadSong(song){
    title.innerHTML = song
    cover.src = `../../assets/image/cover${songIndex+1}.jpg`
    audio.src = `../../assets/music/${song}.mp3`
    
}

loadSong(songs[songIndex])

function playSong(){
    HeadTitle.innerHTML = songs[songIndex]
    player.classList.add('play')
    cover.classList.add('active')
    audio.play();
}

function pauseSong(){
    HeadTitle.innerHTML = "Pharaoh"
    player.classList.remove('play')
    cover.classList.remove('active')
    
    audio.pause();
    
}

playBtn.addEventListener('click', ()=>{
    const isPlaying = player.classList.contains('play');
    if(isPlaying){
        pauseSong()
    }else{
        playSong()
    }
})
    //PlayBUTTON.style.display = "none"
    //PauseBUTTON.style.display = "block"

    function nextSong(){
        songIndex++

        if(songIndex > songs.length-1){
            songIndex =0;
        }

        loadSong(songs[songIndex])
        playSong()
    }

    function prevSong(){
        songIndex--
        if(songIndex<0){
            songIndex = songs.length -1
        }
        loadSong(songs[songIndex])
        playSong()
    }

    function updateProgress(e){
        const {duration, currentTime} = e.srcElement
        const progressPercent = (currentTime/duration)*100;
        progress.style.width =`${progressPercent}%`
    }
    audio.addEventListener('timeupdate',updateProgress)


    function setProgress(e){
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration

        audio.currentTime = (clickX/width)*duration
        
    }
    progressContainer.addEventListener('click',setProgress)

    audio.addEventListener('ended',nextSong)