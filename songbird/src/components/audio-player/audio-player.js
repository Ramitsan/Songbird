import Control from '../../control/control';
import '../../styles/style.css';
import './audio-player.css';

export class AudioPlayer extends Control {
    constructor(parentNode) {
        super(parentNode, 'div', '', '');
        const audioPalyerWrapper = new Control(this.node, 'div', 'audio-player-wrapper', '');
        const audioButtonPlay = new Control(audioPalyerWrapper.node, 'button', 'audio-button audio-button-play', '');
        audioButtonPlay.node.onclick = () => {
            audioButtonPlay.node.classList.remove('audio-button-play');
            audioButtonPlay.node.classList.add('audio-button-pause');
        }

        const audioTimebarWrapper = new Control(audioPalyerWrapper.node, 'div', 'audio-timebar-wrapper', '');
        const audioProgress = new Control(audioTimebarWrapper.node, 'div', 'audio-progress', '');
        const audioTimebar = new Control(audioTimebarWrapper.node, 'div', 'audio-timebar', '');
        const audioTimePassed = new Control(audioTimebar.node, 'span', 'audio-time-passed', '00:00');
        const audioTimeTotal = new Control(audioTimebar.node, 'span', 'audio-time-total', '00:00');
    }
}