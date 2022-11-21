import Control from '../../control/control';
import '../../styles/style.css';
import './results-screen.css';
import { Footer } from '../../components/footer/footer';
import { lang } from '../model/lang';
import elemTranslate from '../../data/elem-translate';

export class ResultsScreen extends Control {
    onNewGame;

    constructor(parentNode, score) {
        super(parentNode, 'div', 'results-screen', '');

        let hash = lang.currentLang;
        console.log(score);

        const mainWrapper = new Control(this.node, 'div', 'main-wrapper', '');
        this.mainWrapper = mainWrapper;
        const header = new Control(mainWrapper.node, 'header', 'header', '');
        const logo = new Control(header.node, 'a', 'logo', 'SongBird');

        const startButton = new Control(header.node, 'button', 'header-button', elemTranslate['startButton'][hash]);
        startButton.node.onclick = () => {
            this.onNewGame();
        }

        const resultsBlock = new Control(mainWrapper.node, 'div', 'results-block', '');
        const resultsTitle = new Control(resultsBlock.node, 'h2', 'results-title', elemTranslate['resultsTitle'][hash]);
        const resultsMessage = new Control(resultsBlock.node, 'p', 'results-message', elemTranslate['resultsMessage'][hash]);

        const newGameButton = new Control(resultsBlock.node, 'button', 'button-start', elemTranslate['newGameButton'][hash]);
        newGameButton.node.onclick = () => {
            this.onNewGame();
        };        
       
        const footer = new Footer(mainWrapper.node);        
    }
}