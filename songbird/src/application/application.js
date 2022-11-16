import Control from '../control/control';
import { GameScreen } from './game-screen/gameScreen';
import { StartScreen } from './start-sreen/startScreen';
import { ResultsScreen } from './results-screen/resultsScreen';
import { GalleryScreen } from './gallery-screen/galleryScreen';

export class Application extends Control {
    constructor(parentNode) {
        super(parentNode);
        this.#mainCycle();       
    }

    #mainCycle() {
        const startScreen = new StartScreen(this.node);
        startScreen.onGallery = () => {
            startScreen.destroy();
            const galleryScreen = new GalleryScreen(this.node);
            galleryScreen.onStart = () => {
                galleryScreen.destroy();
                this.#mainCycle();
            }
        }
        startScreen.onNewGame = () => {
            startScreen.destroy();
            const gameScreen = new GameScreen(this.node);
            gameScreen.onFinish = () => {
                gameScreen.destroy();
                const resultsScreen = new ResultsScreen(this.node);
                resultsScreen.onNewGame = () => {
                    resultsScreen.destroy();
                    this.#mainCycle();
                }
            }
        }         
    }
}