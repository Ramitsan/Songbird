import Control from '../../control/control';
import '../../styles/style.css';
import './gallery-screen.css';
import birdsDataRu from '../../data/data-ru';
import birdsDataEn from '../../data/data-en';
import { categoriesNamesRu } from '../const';
import { categoriesNamesEn } from '../const';
import { AudioPlayerGallery } from '../../components/audio-player/audio-player-gallery';
import { Footer } from '../../components/footer/footer';
import { lang } from '../../application/lang';
import elemTranslate from '../../data/elem-translate';


export class GalleryScreen extends Control {
    onStart;

    constructor(parentNode) {
        super(parentNode, 'div', 'gallery-screen', '');         

        let hash = lang.currentLang;
        
        const birdsData = hash === 'ru' ? birdsDataRu : birdsDataEn;
        const categoriesNames = hash === 'ru' ? categoriesNamesRu : categoriesNamesEn;

        const mainWrapper = new Control(this.node, 'div', 'main-wrapper', '');
        this.mainWrapper = mainWrapper;
        const header = new Control(mainWrapper.node, 'header', 'header', '');
        const logo = new Control(header.node, 'a', 'logo', 'SongBird');

        const startButton = new Control(header.node, 'button', 'header-button', elemTranslate['startButton'][hash]);
        startButton.node.onclick = () => {
            this.onStart();
        }

        const galleryTitle = new Control(mainWrapper.node, 'h2', 'gallery-title', elemTranslate['galleryTitle'][hash]);

        for (let i = 0; i < birdsData.length; i++) {
            const categoryBlock = new Control(mainWrapper.node, 'div', 'category-block', '');
            const categoryHeader = new Control(categoryBlock.node, 'h3', 'category-header', '');

            if(birdsData[i] === birdsData[0]) categoryHeader.node.textContent = categoriesNames[0];
            if(birdsData[i] === birdsData[1]) categoryHeader.node.textContent = categoriesNames[1];
            if(birdsData[i] === birdsData[2]) categoryHeader.node.textContent = categoriesNames[2];
            if(birdsData[i] === birdsData[3]) categoryHeader.node.textContent = categoriesNames[3];
            if(birdsData[i] === birdsData[4]) categoryHeader.node.textContent = categoriesNames[4];
            if(birdsData[i] === birdsData[5]) categoryHeader.node.textContent = categoriesNames[5];

            const galleryCardsWrapper = new Control(categoryBlock.node, 'div', 'gallery-cards-wrapper', '');

            for (let j = 0; j < birdsData[i].length; j++){
                const galleryCard = new Control(galleryCardsWrapper.node, 'div', 'gallery-card', '');
                const galleryBirdName = new Control(galleryCard.node, 'h4', 'gallery-bird-name', `${birdsData[i][j].name}`);
                const galleryBirdLatName = new Control(galleryCard.node, 'h4', 'gallery-bird-lat-name', `${birdsData[i][j].species}`);
                const galleryBirdImage = new Control(galleryCard.node, 'img', 'gallery-bird-image', '');
                galleryBirdImage.node.src = birdsData[i][j].image;

                const galleryPlayer = new AudioPlayerGallery(galleryCard.node, birdsData[i][j].audio);
                galleryPlayer.node.src = birdsData[i][j].audio;
                const galleryDescription = new Control(galleryCard.node, 'p', 'gallery-description-text', `${birdsData[i][j].description}`);
            }             
        }

        const footer = new Footer(mainWrapper.node);
    }
}