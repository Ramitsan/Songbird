import Control from "../../control/control";
import birdsDataRu from '../../data/data-ru';
import { generateRandomElement } from '../../application/utils';
import questionImagePath from './../../assets/img/question-image.png';
import { AudioPlayerMain } from '../../components/audio-player/audio-player-main';
import { AudioPlayerInfo } from '../../components/audio-player/audio-player-info';
import soundProigrysh from './../../assets/audio/zvuk-proigrysha.mp3';
import soundVyigrysh from './../../assets/audio/zvuk-vyigrysha.mp3';
import '../../styles/style.css';
import './question.css';

export class Question extends Control {
    
    constructor(parentNode, counter) {
        super(parentNode, 'div', 'question', '');

        // получаем рандомный вопрос из категории  
        this.randomQuestion = this.getRandomQuestion(birdsDataRu[counter]);

        // блок с вопросом 
        const questionBlock = new Control(this.node, 'div', 'question-block', '');
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

        const answersAndInfoWrapper = new Control(this.node, 'div', 'answers-and-info-wrapper', '');

        // блок с ответами
        const answersBlock = new Control(answersAndInfoWrapper.node, 'div', 'answers-block', '');
        const answersList = new Control(answersBlock.node, 'ul', 'answers-list', '');

        const createAnswersItems = () => {
            for (let j = 0; j < birdsDataRu[counter].length; j++) {
                const answerItem = new Control(answersList.node, 'li', 'answer-item', `${birdsDataRu[counter][j].name}`);
                const answerIndicator = new Control(answerItem.node, 'span', 'answer-indicator', '');

                answerItem.node.onclick = () => {
                    firstTempText.node.classList.add('hide-element');
                    secondTempText.node.classList.add('hide-element');

                    infoBlockWrapper.node.classList.remove('hide-element');

                    infoBirdName.node.textContent = birdsDataRu[counter][j].name;
                    infoBirdLatName.node.textContent = birdsDataRu[counter][j].species;
                    infoImage.node.src = birdsDataRu[counter][j].image;
                    infoText.node.textContent = birdsDataRu[counter][j].description;
                    audioPlayerInfo.audio.src = birdsDataRu[counter][j].audio;

                    if (answerItem.node.textContent === this.randomQuestion.name) {
                        this.birdName.node.textContent = this.randomQuestion.name;
                        this.questionImage.node.src = this.randomQuestion.image;
                        this.answerIndicator = answerIndicator;
                        this.answerIndicator.node.style.backgroundColor = 'green';
                        this.audioPlayerMain.stop();
                        this.playSound(soundVyigrysh);
                        this.onAnswer();
                    } else {
                        this.answerIndicator = answerIndicator;
                        this.answerIndicator.node.style.backgroundColor = 'red';
                        this.playSound(soundProigrysh);
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
        infoImage.node.src = birdsDataRu[counter].image;

        const infoTitleAndPlayer = new Control(topInfoWrapper.node, 'div', 'info-title-and-player', '');
        const infoBirdName = new Control(infoTitleAndPlayer.node, 'h3', 'info-bird-name', '');
        const infoBirdLatName = new Control(infoTitleAndPlayer.node, 'h3', 'info-bird-lat-name', '');
        const audioPlayerInfo = new AudioPlayerInfo(infoTitleAndPlayer.node, '');

        const bottomInfoWrapper = new Control(infoBlockWrapper.node, 'div', 'bottom-info-wrapper', '');
        const infoText = new Control(bottomInfoWrapper.node, 'p', 'info-text', '');
    }

    getRandomQuestion(arr) {
        const randomQuestion = generateRandomElement(arr);
        return randomQuestion;
    }

    playSound(sound) {
        const signal = new Audio(sound);
        signal.play();
    }
}
