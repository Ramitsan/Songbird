import Control from '../../control/control';
import { Footer } from '../../components/footer/footer';
import '../../styles/style.css';
import './start-screen.css';
import { hash } from '../../application/const';
import langArr from '../../data/lang';
import imagePath from './../../assets/img/songbird.png';


export class StartScreen extends Control {
    onNewGame;
    onGallery;

    constructor(parentNode) {
        super(parentNode, 'div', 'start-screen', '');
        const mainWrapper = new Control(this.node, 'div', 'main-wrapper', '');
        const header = new Control(mainWrapper.node, 'header', 'header', '');
        const logo = new Control(header.node, 'a', 'logo', 'SongBird');

        const headerButtonsWrapper = new Control(header.node, 'div', 'header-buttons-wrapper', '');
        const buttonNewGame = new Control(headerButtonsWrapper.node, 'button', 'header-button', langArr['buttonNewGame'][hash]);
        this.buttonNewGame = buttonNewGame;
        buttonNewGame.node.onclick = () => {
            this.onNewGame();
        }
        const buttonGallery = new Control(headerButtonsWrapper.node, 'button', 'header-button', langArr['buttonGallery'][hash]);
        this.buttonGallery = buttonGallery;
        buttonGallery.node.onclick = () => {
            this.onGallery();
        }

        const buttonLanguage = new Control(headerButtonsWrapper.node, 'button', 'header-button', 'En');
        buttonLanguage.node.setAttribute('value', 'en');
        location.href = window.location.pathname + '#ru';

        buttonLanguage.node.onclick = async () => {     
            let lang = buttonLanguage.node.value;
            location.href = window.location.pathname + '#' + lang; 

            if( lang = 'en') {             
                buttonLanguage.node.textContent = 'Ru';
                buttonLanguage.node.setAttribute('value', 'ru');                                       
            } else {               
                buttonLanguage.node.textContent = 'En';
                buttonLanguage.node.setAttribute('value', 'en');             
            }       

            await location.reload();
        }

        const main = new Control(mainWrapper.node, 'main', 'main', '');
        const startContainer = new Control(main.node, 'div', 'start-container', '');
        const startScreenImage = new Control(startContainer.node, 'img', 'start-screen-image', '');
        startScreenImage.node.src = imagePath;
        const gameDescription = new Control(startContainer.node, 'h1', 'game-description', langArr['gameDescription'][hash]);
       
        const newGameButton = new Control(startContainer.node, 'button', 'button-start', langArr['newGameButton'][hash]);
        newGameButton.node.onclick = () => {
            this.onNewGame();
        };

        const footer = new Footer(mainWrapper.node);
    }
}