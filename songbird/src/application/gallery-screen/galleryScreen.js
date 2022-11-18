import Control from '../../control/control';
import { categoriesNames } from '../const';
import '../../styles/style.css';
import './gallery-screen.css';
import birdsDataRu from '../../data/data-ru';
import { AudioPlayerGallery } from '../../components/audio-player/audio-player-gallery';


export class GalleryScreen extends Control {
    onStart;

    constructor(parentNode) {
        super(parentNode, 'div', 'gallery-screen', '');
       

        const mainWrapper = new Control(this.node, 'div', 'main-wrapper', '');
        this.mainWrapper = mainWrapper;
        const header = new Control(mainWrapper.node, 'header', 'header', '');
        const logo = new Control(header.node, 'a', 'logo', 'SongBird');

        const button = new Control(header.node, 'button', 'start-button', 'Старт');
        button.node.onclick = () => {
            this.onStart();
        }

        const galleryHeader = new Control(mainWrapper.node, 'h2', 'gallery-header', 'Галерея');

        for (let i = 0; i < birdsDataRu.length; i++) {
            const categoryBlock = new Control(mainWrapper.node, 'div', 'category-block', '');
            const categoryHeader = new Control(categoryBlock.node, 'h3', 'category-header', '');

            if(birdsDataRu[i] === birdsDataRu[0]) categoryHeader.node.textContent = 'Разминка';
            if(birdsDataRu[i] === birdsDataRu[1]) categoryHeader.node.textContent = 'Воробьиные';
            if(birdsDataRu[i] === birdsDataRu[2]) categoryHeader.node.textContent = 'Лесные птицы';
            if(birdsDataRu[i] === birdsDataRu[3]) categoryHeader.node.textContent = 'Певчие птицы';
            if(birdsDataRu[i] === birdsDataRu[4]) categoryHeader.node.textContent = 'Хищные птицы';
            if(birdsDataRu[i] === birdsDataRu[5]) categoryHeader.node.textContent = 'Морские птицы';

            const galleryCardsWrapper = new Control(categoryBlock.node, 'div', 'gallery-cards-wrapper', '');

            for (let j = 0; j < birdsDataRu[i].length; j++){
                const galleryCard = new Control(galleryCardsWrapper.node, 'div', 'gallery-card', '');
                const galleryBirdName = new Control(galleryCard.node, 'h4', 'gallery-bird-name', `${birdsDataRu[i][j].name}`);
                const galleryBirdLatName = new Control(galleryCard.node, 'h4', 'gallery-bird-lat-name', `${birdsDataRu[i][j].species}`);
                const galleryBirdImage = new Control(galleryCard.node, 'img', 'gallery-bird-image', '');
                galleryBirdImage.node.src = birdsDataRu[i][j].image;

                const galleryPlayer = new AudioPlayerGallery(galleryCard.node, birdsDataRu[i][j].audio);
                galleryPlayer.node.src = birdsDataRu[i][j].audio;
                const galleryDescription = new Control(galleryCard.node, 'p', 'gallery-description-text', `${birdsDataRu[i][j].description}`);
            }             
        }

        const footer = new Control(mainWrapper.node, 'footer', 'footer', '');
        const authorLinkGithub = new Control(footer.node, 'a', 'author-link-github', '');
        authorLinkGithub.node.setAttribute('href', 'https://github.com/Ramitsan');
        authorLinkGithub.node.setAttribute('target', '_blank');
        const appCreateYear = new Control(footer.node, 'p', 'app-create-year', '2022');
        const courseLogo = new Control(footer.node, 'a', 'course-logo', '');
        courseLogo.node.setAttribute('href', 'https://rs.school/js/');
        courseLogo.node.setAttribute('target', '_blank');
    }
}