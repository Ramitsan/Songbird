import Control from "../../control/control";
import birdsDataRu from '../../data/data-ru';
import birdsDataEn from '../../data/data-en';
import { generateRandomElement } from '../../application/utils';
import questionImagePath from './../../assets/img/question-image.png';
import { AudioPlayerMain } from '../../components/audio-player/audio-player-main';
import { AudioPlayerInfo } from '../../components/audio-player/audio-player-info';
import soundProigrysh from './../../assets/audio/zvuk-proigrysha.mp3';
import soundVyigrysh from './../../assets/audio/zvuk-vyigrysha.mp3';
import '../../styles/style.css';
import './question.css';
import { lang } from '../../application/lang';
import elemTranslate from '../../data/elem-translate';

export class Question extends Control {
    
    constructor(parentNode, counter) {
        super(parentNode, 'div', 'question', '');
        let hash = lang.currentLang;
        const birdsData = hash === 'ru' ? birdsDataRu : birdsDataEn;

        // получаем рандомный вопрос из категории  
        this.randomQuestion = this.getRandomQuestion(birdsData[counter]);

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
        const answersFalse = [];
        

        const createAnswersItems = () => {
            for (let j = 0; j < birdsData[counter].length; j++) {
                const answerItem = new Control(answersList.node, 'li', 'answer-item', `${birdsData[counter][j].name}`);
                const answerIndicator = new Control(answerItem.node, 'span', 'answer-indicator', '');
              

                answerItem.node.onclick = () => {
                    firstTempText.node.classList.add('hide-element');
                    secondTempText.node.classList.add('hide-element');

                    infoBlockWrapper.node.classList.remove('hide-element');                            

                    infoBirdName.node.textContent = birdsData[counter][j].name;
                    infoBirdLatName.node.textContent = birdsData[counter][j].species;
                    infoImage.node.src = birdsData[counter][j].image;
                    infoText.node.textContent = birdsData[counter][j].description;
                    audioPlayerInfo.audio.src = birdsData[counter][j].audio;
                    let isWin = false;
                 

                    if (answerItem.node.textContent === this.randomQuestion.name && !isWin) {
                        isWin = true;
                     
                        this.birdName.node.textContent = this.randomQuestion.name;
                        this.questionImage.node.src = this.randomQuestion.image;
                        this.answerIndicator = answerIndicator;
                        this.answerIndicator.node.style.backgroundColor = 'green';
                        this.audioPlayerMain.stop();
                        this.playSound(soundVyigrysh);
                        const answersFalseCount = answersFalse.length;
                        this.onAnswer(answersFalseCount);
                        console.log('неправильных ответов ', answersFalseCount);
                    } else {
                        isWin = false;
                        answersFalse.push(answerItem.node);   
                        this.answerIndicator = answerIndicator;
                        this.answerIndicator.node.style.backgroundColor = 'red';
                        this.playSound(soundProigrysh);
                    }
                }
                
            }
        }
        createAnswersItems();
        console.log('answersFalse = ', answersFalse);
             

        //блок с информацией о птице     
        const infoBlock = new Control(answersAndInfoWrapper.node, 'div', 'info-block', '');
        const infoBlockWrapper = new Control(infoBlock.node, 'div', 'info-block-wrapper hide-element', '');
        const firstTempText = new Control(infoBlock.node, 'p', 'temp-text', elemTranslate['firstTempText'][hash]);
        const secondTempText = new Control(infoBlock.node, 'p', 'temp-text', elemTranslate['secondTempText'][hash]);

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
