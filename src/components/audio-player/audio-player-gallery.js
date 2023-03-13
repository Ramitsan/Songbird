import { AudioPlayer } from './audio-player';
import styles from './audio-player-gallery.m.css';


export class AudioPlayerGallery extends AudioPlayer {
    constructor(parentNode, src) {
        super(parentNode, src, styles)
    }
}