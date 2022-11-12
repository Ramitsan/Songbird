import Control from '../../control/control';

export class GameScreen extends Control {
    onResults;

    constructor(parentNode) {
        super(parentNode);
        const title = new Control(this.node, 'h1', '', 'GameScreen');

        const resultsButton = new Control(this.node, 'button', '', 'Результаты');
        resultsButton.node.onclick = () => {
            this.onResults();
        }
    }
}