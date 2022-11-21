import Control from '../../control/control';
import { Footer } from '../../components/footer/footer';
import '../../styles/style.css';
import './start-screen.css';
import imagePath from './../../assets/img/songbird.png';
import { lang } from '../model/lang';
import elemTranslate from '../../data/elem-translate';


export class StartScreen extends Control {
    onNewGame;
    onGallery;

    constructor(parentNode) {
        super(parentNode, 'div', 'start-screen', '');
        //  метод, переключающий язык на элементах этой страницы
        // нужен только здесь, т.к. на этой странице кнопка переключения языков
        lang.onChange.add(this.updateLang);

        const mainWrapper = new Control(this.node, 'div', 'main-wrapper', '');
        const header = new Control(mainWrapper.node, 'header', 'header', '');
        const logo = new Control(header.node, 'a', 'logo', 'SongBird');

        const headerButtonsWrapper = new Control(header.node, 'div', 'header-buttons-wrapper', '');
        const buttonNewGame = new Control(headerButtonsWrapper.node, 'button', 'header-button', '');
        this.buttonNewGame = buttonNewGame;
        buttonNewGame.node.onclick = () => {
            this.onNewGame();
        }
        const buttonGallery = new Control(headerButtonsWrapper.node, 'button', 'header-button', '');
        this.buttonGallery = buttonGallery;
        buttonGallery.node.onclick = () => {
            this.onGallery();
        }

        const buttonLanguage = new Control(headerButtonsWrapper.node, 'button', 'header-button header-button--lang', 'En');
        this.buttonLanguage = buttonLanguage;
       
        buttonLanguage.node.onclick = () => {     
            lang.nextLang();
        }

        const main = new Control(mainWrapper.node, 'main', 'main', '');
        const startContainer = new Control(main.node, 'div', 'start-container', '');
        const startScreenImage = new Control(startContainer.node, 'img', 'start-screen-image', '');
        startScreenImage.node.src = imagePath;
        const gameDescription = new Control(startContainer.node, 'h1', 'game-description', '');
        this.gameDescription = gameDescription;
       
        const newGameButton = new Control(startContainer.node, 'button', 'button-start', '');
        this.newGameButton = newGameButton;

        newGameButton.node.onclick = () => {
            this.onNewGame();
        };

        const footer = new Footer(mainWrapper.node);
        this.updateLang(lang.currentLang);
    }

    updateLang = (lang) => {
        this.buttonNewGame.node.textContent = elemTranslate['buttonNewGame'][lang];
        this.buttonGallery.node.textContent = elemTranslate['buttonGallery'][lang];
        this.gameDescription.node.textContent = elemTranslate['gameDescription'][lang];
        this.newGameButton.node.textContent = elemTranslate['newGameButton'][lang];
        this.buttonLanguage.node.textContent = elemTranslate['buttonLanguage'][lang];
    }

    destroy() {
        lang.onChange.remove(this.updateLang);
        super.destroy();
    }

}