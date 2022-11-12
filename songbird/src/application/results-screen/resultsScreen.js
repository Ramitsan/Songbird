import Control from '../../control/control';

export class ResultsScreen extends Control {
    onNewGame;

    constructor(parentNode) {
        super(parentNode);

        const title = new Control(this.node, 'h1', '', 'ResultsScreen');

        const newGameButton = new Control(this.node, 'button', '', 'Начать новую игру');
        newGameButton.node.onclick = () => {
            this.onNewGame();
        }
    }
}