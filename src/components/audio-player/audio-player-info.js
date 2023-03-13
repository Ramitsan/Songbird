import { AudioPlayer } from './audio-player';
import styles from './audio-player-info.m.css';


export class AudioPlayerInfo extends AudioPlayer {
    constructor(parentNode, src) {
        super(parentNode, src, styles)
    }
}