import Control from '../../control/control';
import { lang } from '../../application/lang';
import elemTranslate from '../../data/elem-translate';
import { categoriesNamesRu, categoriesNamesEn } from '../const';
import {CategoryItems} from '../../components/category-items/category-items';
import { Score } from '../../components/score/score';
import { Question } from '../../components/question/question';
import { Footer } from '../../components/footer/footer';
import '../../styles/style.css';
import './game-screen.css';

export class GameScreen extends Control {
  
    constructor(parentNode) {
        super(parentNode, 'div', 'game-screen', '');

        let score;
        this.score = score;
        let totalScore = 0;
        this.totalScore = totalScore;

        let hash = lang.currentLang;     
        const categoriesNames = hash === 'ru' ? categoriesNamesRu : categoriesNamesEn;

        const mainWrapper = new Control(this.node, 'div', 'main-wrapper', '');
        const header = new Control(mainWrapper.node, 'header', 'header', '');
        const logo = new Control(header.node, 'a', 'logo', 'SongBird');
        const headerScore = new Score(header.node, this.totalScore);

       
        //список категорий
        const gameNav = new Control(mainWrapper.node, 'nav', 'game-nav', '');
        const categoryItems = new CategoryItems(gameNav.node);
    
        const questionWrapper = new Control(mainWrapper.node, 'div', 'question-wrapper', '');

        let categoryIndex = 0;
        const gameStart = (categoryIndex) => {
            categoryItems.setActive(categoryIndex);
            if (categoryIndex < categoriesNames.length) {      
             
                const newQuestion = new Question(questionWrapper.node, categoryIndex);
                newQuestion.onAnswer = (answersFalseCount) => {
                    buttonNextQuestion.node.disabled = false;
                    this.getScore(answersFalseCount); 
                    headerScore.updateScore(this.totalScore);                   
                }
                const buttonNextQuestion = new Control(questionWrapper.node, 'button', 'button-next-question', categoryIndex === 5 ?  elemTranslate['buttonNextQuestion1'][hash] : elemTranslate['buttonNextQuestion2'][hash]);

                buttonNextQuestion.node.disabled = true;
                this.buttonNextQuestion = buttonNextQuestion;

                buttonNextQuestion.node.onclick = () => {
                    newQuestion.destroy();
                    buttonNextQuestion.destroy();
                    gameStart(categoryIndex + 1);
                 }                
            } else {
                this.onFinish();
            }
        }
        gameStart(categoryIndex);

        const footer = new Footer(mainWrapper.node);
    }  
    
    getScore(answersFalseCount) {        
        if(answersFalseCount === 0)  this.score = 5;
        if(answersFalseCount === 1)  this.score = 4;
        if(answersFalseCount === 2)  this.score = 3;
        if(answersFalseCount === 3)  this.score = 2;
        if(answersFalseCount === 4)  this.score = 1;
        if(answersFalseCount === 5)  this.score = 0;
        this.totalScore += this.score;
        console.log('score = ', this.score);
        console.log('totalScore = ', this.totalScore);
        return this.totalScore;
    }

}

