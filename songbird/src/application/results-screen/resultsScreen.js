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
     
        const mainWrapper = new Control(this.node, 'div', 'main-wrapper', '');
        this.mainWrapper = mainWrapper;
        const header = new Control(mainWrapper.node, 'header', 'header', '');
        const logo = new Control(header.node, 'a', 'logo', 'SongBird');

        const startButton = new Control(header.node, 'button', 'header-button', elemTranslate['startButton'][hash]);
        startButton.node.onclick = () => {
            this.onNewGame();
        }

        const resultsBlock = new Control(mainWrapper.node, 'div', 'results-block', '');
        if(score === 30 ) {
            const resultsTitle = new Control(resultsBlock.node, 'h2', 'results-title', elemTranslate['resultsTitle'][hash]);
        }
        
        const resultsMessage = new Control(resultsBlock.node, 'p', 'results-message', '');
        if(hash === 'ru') resultsMessage.node.textContent = `Вы прошли викторину и набрали ${score} баллов из 30`;
        if(hash === 'en') resultsMessage.node.textContent = `You passed the quiz and scored ${score} points out of 30`;

        const newGameButtonResults = new Control(resultsBlock.node, 'button', 'button-start--results', elemTranslate['newGameButtonResults'][hash]);
        newGameButtonResults.node.onclick = () => {
            this.onNewGame();
        };        
       
        const footer = new Footer(mainWrapper.node);        
    }
}