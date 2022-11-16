import Control from '../../control/control';
import '../../styles/style.css';

export class AudioPlayer extends Control {
    constructor(parentNode, src, styles) {
        super(parentNode, 'div', styles['audio-player-wrapper'], '');
        this.src = src;

        const audio = new Audio(this.src);
        this.audio = audio;
        audio.src = this.src;
        this.node.append(audio);

        const audioButtonPlay = new Control(this.node, 'button', styles['audio-button'] + ' ' + styles['audio-button-play'], '');
        audioButtonPlay.node.onclick = () => {
            audioButtonPlay.node.classList.toggle(styles['audio-button-play']);
            audioButtonPlay.node.classList.toggle(styles['audio-button-pause']);
            this.audioPlay();
        }

        const audioTimebarWrapper = new Control(this.node, 'div', styles['audio-timebar-wrapper'], '');
        const audioProgress = new Control(audioTimebarWrapper.node, 'div', styles['audio-progress'], '');
        const audioTimebar = new Control(audioTimebarWrapper.node, 'div', styles['audio-timebar'], '');
        const audioTimePassed = new Control(audioTimebar.node, 'span', styles['audio-time-passed'], '00:00');
        const audioTimeTotal = new Control(audioTimebar.node, 'span', styles['audio-time-total'], '00:00');
    }

    audioPlay() {
        if (this.audio.paused) {
            this.audio.play();
        } else {
            this.audio.pause();
        }
    }
}
