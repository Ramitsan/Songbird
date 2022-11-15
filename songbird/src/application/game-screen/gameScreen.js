import Control from '../../control/control';
import { categoriesNames } from '../const';
import birdsDataRu from '../../data/data-ru';
import '../style.css';
import './game-screen.css';
import questionImagePath from './../../assets/img/question-image.png';
import audioPath from '../../assets/audio/sound.mp3';


export class GameScreen extends Control {
    onNextQuestion;   

    constructor(parentNode) {
        super(parentNode, 'div', 'game-screen', '');
        const mainWrapper = new Control(this.node, 'div', 'main-wrapper', '');
        const header = new Control(mainWrapper.node, 'header', 'header', '');
        const logo = new Control(header.node, 'a', 'logo', 'SongBird');

        //список категорий
        const gameNav = new Control(mainWrapper.node, 'nav', 'game-nav', '');
        const categoryList = new Control(gameNav.node, 'ul', 'game-nav-list', '');
        const createCategoryItems = () => {
            for (let i = 0; i < categoriesNames.length; i++) {           
                const categoryItem = new Control(categoryList.node, 'li', 'category-item', `${categoriesNames[i]}`);                
            }
        }
        createCategoryItems();

        // блок с вопросом
        const questionBlock = new Control(mainWrapper.node, 'div', 'question-block', '');
        const questionBlockWrapper = new Control(questionBlock.node, 'div', 'question-block-wrapper', '');
        const questionImage = new Control(questionBlockWrapper.node, 'img', 'question-image', '');
        questionImage.node.src = questionImagePath;

        const containerRight = new Control(questionBlockWrapper.node, 'div', 'container-right', '');
        const birdName = new Control(containerRight.node, 'h2', 'bird-name', '*****');
        const mainPlayer = new Control(containerRight.node, 'audio', 'main-player', '');
        mainPlayer.src = audioPath;

        const answersAndInfoWrapper = new Control(mainWrapper.node, 'div', 'answers-and-info-wrapper', '');

        // блок с ответами
        const answersBlock = new Control(answersAndInfoWrapper.node, 'div', 'answers-block', '');
        const answersList = new Control(answersBlock.node, 'ul', 'answers-list', '');

        // const answersCount = 6;
        const createAnswersItems = () => {
            for (let i = 0; i < birdsDataRu.length; i++) {             
                const answerItem = new Control(answersList.node, 'li', 'answer-item', `${birdsDataRu[0][i].name}`);
                const answerIndicator = new Control(answerItem.node, 'span', 'answer-indicator', '');
            }
        }
        createAnswersItems();

        //блок с информацией о птице
        const testData = birdsDataRu[0][0];
        const infoBlock = new Control(answersAndInfoWrapper.node, 'div', 'info-block', '');
        const infoBlockWrapper = new Control(infoBlock.node, 'div', 'info-block-wrapper', '');
        const topInfoWrapper = new Control(infoBlockWrapper.node, 'div', 'top-info-wrapper', '');
        const firstTempText = new Control(topInfoWrapper.node, 'p', 'temp-text hide-element', 'Послушайте плеер');
        const secondTempText = new Control(topInfoWrapper.node, 'p', 'temp-text hide-element', 'Выберите птицу из списка');
        const infoImage = new Control(topInfoWrapper.node, 'img', 'info-image', '');
        console.log(testData.image);
        infoImage.src = testData.image;

        const infoTitleAndPlayer = new Control(topInfoWrapper.node, 'div', 'info-title-and-player', '');
        const infoBirdName = new Control(infoTitleAndPlayer.node, 'h3', 'info-bird-name', `${testData.name}`);
        const infoBirdLatName = new Control(infoTitleAndPlayer.node, 'h3', 'info-bird-lat-name', `${testData.species}`);
        const infoAudio = new Control(infoTitleAndPlayer.node, 'audio', 'info-audio', '');
        console.log(testData.audio);
        infoAudio.src = testData.audio;

        const bottomInfoWrapper = new Control(infoBlockWrapper.node, 'div', 'bottom-info-wrapper', ''); 
        const infoText = new Control(bottomInfoWrapper.node, 'p', 'info-text', `${testData.description}`)


        const buttonNextQuestion = new Control(mainWrapper.node, 'button', 'button-next-question', 'Следующий вопрос');
        buttonNextQuestion.node.onclick = () => {
            this.onNextQuestion();
        }
    }
}