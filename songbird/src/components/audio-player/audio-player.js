import Control from '../../control/control';
import '../../styles/style.css';
import { addZero } from '../../application/utils';

export class AudioPlayer extends Control {

    constructor(parentNode, src, styles) {
        super(parentNode, 'div', styles['audio-player-wrapper'], '');
        this.src = src;

        const audio = new Audio(this.src);
        this.audio = audio;
        audio.src = this.src;
        this.node.append(audio);

        this.audio.ontimeupdate = () => {
            this.showDurationAudio();
        };    

        const audioButtonPlay = new Control(this.node, 'button', styles['audio-button'] + ' ' + styles['audio-button-play'], '');
        audioButtonPlay.node.onclick = () => {
            audioButtonPlay.node.classList.toggle(styles['audio-button-play']);
            audioButtonPlay.node.classList.toggle(styles['audio-button-pause']);
            this.audioPlay();
        }

        const audioTimebarWrapper = new Control(this.node, 'div', styles['audio-timebar-wrapper'], '');
        const audioProgress = new Control(audioTimebarWrapper.node, 'div', styles['audio-progress'], '');
        const audioProgressTiming = new Control(audioProgress.node, 'div', styles['audio-progress-timing'], '');
        this.audioProgressTiming = audioProgressTiming;

        const audioTimebar = new Control(audioTimebarWrapper.node, 'div', styles['audio-timebar'], '');
        const audioTimePassed = new Control(audioTimebar.node, 'span', styles['audio-time-passed'], '00:00');
        this.audioTimePassed = audioTimePassed;
        const audioTimeTotal = new Control(audioTimebar.node, 'span', styles['audio-time-total'], '00:00');
        this.audioTimeTotal = audioTimeTotal;
    }

    audioPlay() {
        if (this.audio.paused) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
    }

    showDurationAudio() {
        const duration = this.audio.duration;
        const currentTime = this.audio.currentTime;
        const progress = (currentTime / duration) * 100;

        this.audioProgressTiming.node.style.width = `${progress}%`;

        // текущее время аудио-трека
        const minutesPassed = Math.floor(currentTime / 60);
        const secondsPassed = Math.floor(currentTime % 60);

        // общее время аудио-трека
        const minutesTotal = Math.floor(duration / 60);
        const secondsTotal = Math.floor(duration % 60);
      
        this.audioTimePassed.node.textContent = `${addZero(minutesPassed)}:${addZero(secondsPassed)}`;
        this.audioTimeTotal.node.textContent = `${addZero(minutesTotal)}:${addZero(secondsTotal)}`;        
    }
}
