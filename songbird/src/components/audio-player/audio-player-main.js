import { AudioPlayer } from './audio-player';
import styles from './audio-player-main.m.сss';


export class AudioPlayerMain extends AudioPlayer {
    constructor(parentNode, src) {
        super(parentNode, src, styles)
    }
}
