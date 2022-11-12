import Control from '../control/control';
import { GameScreen } from './game-screen/gameScreen';
import { StartScreen } from './start-sreen/startScreen';
import { ResultsScreen } from './results-screen/resultsScreen';

export class Application extends Control {
    constructor(parentNode) {
        super(parentNode);
        this.#mainCycle();       
    }

    #mainCycle() {
        const startScreen = new StartScreen(this.node);
        startScreen.onNewGame = () => {
            startScreen.destroy();
            const gameScreen = new GameScreen(this.node);
            gameScreen.onResults = () => {
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