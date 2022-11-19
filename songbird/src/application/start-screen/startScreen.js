import Control from '../../control/control';
import { Footer } from '../../components/footer/footer';
import '../../styles/style.css';
import './start-screen.css';

import imagePath from './../../assets/img/songbird.png';


export class StartScreen extends Control {
    onNewGame;
    onGallery;

    constructor(parentNode) {
        super(parentNode, 'div', 'start-screen', '');
        const mainWrapper = new Control(this.node, 'div', 'main-wrapper', '');
        const header = new Control(mainWrapper.node, 'header', 'header', '');
        const logo = new Control(header.node, 'a', 'logo', 'SongBird');
       
        // const nav = new Control(header.node, 'nav', 'main-nav', '');
        // const navList = new Control(nav.node, 'ul', 'nav-list', '');
        // const navItemGame = new Control(navList.node, 'li', 'nav-item-game', '');      
        // const navGameLink = new Control(navItemGame.node, 'a', 'nav-game-link', 'Новая игра');
        // navGameLink.node.onclick = () => { 
        //     this.onNewGame();           
        // };
        // const navItemGallery = new Control(navList.node, 'li', 'nav-item-gallery', '');
        // const navGalleryLink = new Control(navItemGallery.node, 'a', 'nav-gallery-link', 'Галерея');
        // navGalleryLink.node.onclick = () => {  
        //     this.onGallery();                      
        // };
        const headerButtonsWrapper = new Control(header.node, 'div', 'header-buttons-wrapper', '');
        const buttonNewGame = new Control(headerButtonsWrapper.node, 'button', 'header-button', 'Новая игра');
        buttonNewGame.node.onclick = () => {
            this.onNewGame(); 
        }
        const buttonGallery = new Control(headerButtonsWrapper.node, 'button', 'header-button', 'Галерея');
        buttonGallery.node.onclick = () => {
            this.onGallery();
        }

        const main = new Control(mainWrapper.node, 'main', 'main', '');
        const startContainer = new Control(main.node, 'div', 'start-container', '');
        const startScreenImage = new Control(startContainer.node, 'img', 'start-screen-image', '');
        startScreenImage.node.src = imagePath;
        const gameDescription = new Control(startContainer.node, 'p', 'game-description', '');
        gameDescription.node.textContent = 'Приложение-викторина для распознавания птиц по их голосам';

        const newGameButton = new Control(startContainer.node, 'button', 'button-start', 'Начать игру');
        newGameButton.node.onclick = () => {
            this.onNewGame();
        };

        const footer = new Footer(mainWrapper.node);
    }    
}