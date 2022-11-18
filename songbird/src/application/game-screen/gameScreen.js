import Control from '../../control/control';
import { categoriesNames } from '../const';
import birdsDataRu from '../../data/data-ru';
import '../../styles/style.css';
import './game-screen.css';
import questionImagePath from './../../assets/img/question-image.png';
import { AudioPlayerMain } from '../../components/audio-player/audio-player-main';
import { AudioPlayerInfo } from '../../components/audio-player/audio-player-info';
import { generateRandomElement } from '../utils';
import { Footer } from '../../components/footer/footer';


export class GameScreen extends Control {
    onNextQuestion;

    constructor(parentNode) {
        super(parentNode, 'div', 'game-screen', '');

        const mainWrapper = new Control(this.node, 'div', 'main-wrapper', '');
        this.mainWrapper = mainWrapper;
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

        // получаем рандомный вопрос из категории
        for (let i = 0; i < birdsDataRu.length; i++) {
            let categoryIndex = 0;
            // console.log(birdsDataRu[i]);

            this.randomQuestion = this.getRandomQuestion(birdsDataRu[i]);
            // console.log(this.randomQuestion);

            // блок с вопросом 
            const questionBlock = new Control(mainWrapper.node, 'div', 'question-block', '');
            const questionBlockWrapper = new Control(questionBlock.node, 'div', 'question-block-wrapper', '');
            const questionImage = new Control(questionBlockWrapper.node, 'img', 'question-image', '');
            this.questionImage = questionImage;
            this.questionImage.node.src = questionImagePath;

            const containerRight = new Control(questionBlockWrapper.node, 'div', 'container-right', '');
            const birdName = new Control(containerRight.node, 'h2', 'bird-name', '*****');
            this.birdName = birdName;

            // аудио плеер
            const audioPlayerMain = new AudioPlayerMain(containerRight.node, this.randomQuestion.audio);
            this.audioPlayerMain = audioPlayerMain;

            const answersAndInfoWrapper = new Control(mainWrapper.node, 'div', 'answers-and-info-wrapper', '');

            // блок с ответами
            const answersBlock = new Control(answersAndInfoWrapper.node, 'div', 'answers-block', '');
            const answersList = new Control(answersBlock.node, 'ul', 'answers-list', '');

            const createAnswersItems = () => {
                for (let j = 0; j < birdsDataRu[i].length; j++) {
                    const answerItem = new Control(answersList.node, 'li', 'answer-item', `${birdsDataRu[i][j].name}`);
                    const answerIndicator = new Control(answerItem.node, 'span', 'answer-indicator', '');

                    answerItem.node.onclick = () => {
                        firstTempText.node.classList.add('hide-element');
                        secondTempText.node.classList.add('hide-element');

                        infoBlockWrapper.node.classList.remove('hide-element');

                        infoBirdName.node.textContent = birdsDataRu[i][j].name;
                        infoBirdLatName.node.textContent = birdsDataRu[i][j].species;
                        infoImage.node.src = birdsDataRu[i][j].image;
                        infoText.node.textContent = birdsDataRu[i][j].description;
                        audioPlayerInfo.node.src = birdsDataRu[i][j].audio;

                        if (answerItem.node.textContent === this.randomQuestion.name) {
                            this.birdName.node.textContent = this.randomQuestion.name;
                            this.questionImage.node.src = this.randomQuestion.image;
                            this.answerIndicator = answerIndicator;
                            this.answerIndicator.node.style.backgroundColor = 'green';
                            this.audioPlayerMain.stop();
                            this.buttonNextQuestion.node.disabled = false;
                        } else {
                            this.answerIndicator = answerIndicator;
                            this.answerIndicator.node.style.backgroundColor = 'red';
                        }
                    }
                }
            }
            createAnswersItems();

            //блок с информацией о птице     
            const infoBlock = new Control(answersAndInfoWrapper.node, 'div', 'info-block', '');
            const infoBlockWrapper = new Control(infoBlock.node, 'div', 'info-block-wrapper hide-element', '');
            const firstTempText = new Control(infoBlock.node, 'p', 'temp-text', 'Послушайте плеер');
            const secondTempText = new Control(infoBlock.node, 'p', 'temp-text', 'Выберите птицу из списка');

            const topInfoWrapper = new Control(infoBlockWrapper.node, 'div', 'top-info-wrapper', '');
            const infoImage = new Control(topInfoWrapper.node, 'img', 'info-image', '');
            infoImage.node.src = birdsDataRu[i].image;

            const infoTitleAndPlayer = new Control(topInfoWrapper.node, 'div', 'info-title-and-player', '');
            const infoBirdName = new Control(infoTitleAndPlayer.node, 'h3', 'info-bird-name', `${birdsDataRu[i].name}`);
            const infoBirdLatName = new Control(infoTitleAndPlayer.node, 'h3', 'info-bird-lat-name', `${birdsDataRu[i].species}`);
            const audioPlayerInfo = new AudioPlayerInfo(infoTitleAndPlayer.node, birdsDataRu[i].audio);
            // audioPlayerInfo.node.src = birdsDataRu[i].audio;
            // console.log(birdsDataRu[i].audio);

            const bottomInfoWrapper = new Control(infoBlockWrapper.node, 'div', 'bottom-info-wrapper', '');
            const infoText = new Control(bottomInfoWrapper.node, 'p', 'info-text', `${birdsDataRu[i].description}`);

            const buttonNextQuestion = new Control(mainWrapper.node, 'button', 'button-next-question', 'Следующий вопрос');
            this.buttonNextQuestion = buttonNextQuestion;
            buttonNextQuestion.node.disabled = true;
            buttonNextQuestion.node.onclick = () => {
                if (categoryIndex < categoriesNames.length) {
                    // this.onNextQuestion();
                    categoryIndex++;
                    console.log(categoryIndex);
                } else {
                    this.onFinish();
                }
            }
        }
        const footer = new Footer(mainWrapper.node);

    }

    getRandomQuestion(arr) {
        const randomQuestion = generateRandomElement(arr);
        return randomQuestion;
    }

    onNextQuestion() {
        this.destroy();
        const gameScreen = new GameScreen(parentNode);
    }


}

