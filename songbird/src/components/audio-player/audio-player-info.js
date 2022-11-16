import { AudioPlayer } from './audio-player';
import styles from './audio-player-info.css';

export class AudioPlayerInfo extends AudioPlayer {
    constructor(parentNode, src) {
        super(parentNode, src, styles)
    }
}