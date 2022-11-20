import Control from '../../control/control';
import { categoriesNamesRu, categoriesNamesEn, hash } from '../const';
import '../../styles/style.css';
import './game-screen.css';
import {CategoryItems} from '../../components/category-items/category-items';
import { Footer } from '../../components/footer/footer';
import { Question } from '../../components/question/question';
import langArr from '../../data/lang';

export class GameScreen extends Control {
  
    constructor(parentNode) {
        super(parentNode, 'div', 'game-screen', '');
        let categoryIndex = 0;
        const categoriesNames = hash === 'ru' ? categoriesNamesRu : categoriesNamesEn;

        const mainWrapper = new Control(this.node, 'div', 'main-wrapper', '');
        const header = new Control(mainWrapper.node, 'header', 'header', '');
        const logo = new Control(header.node, 'a', 'logo', 'SongBird');

        //список категорий
        const gameNav = new Control(mainWrapper.node, 'nav', 'game-nav', '');

        const categoryItems = new CategoryItems(gameNav.node);
    
        const questionWrapper = new Control(mainWrapper.node, 'div', 'question-wrapper', '');
        
        const gameStart = (categoryIndex) => {
            categoryItems.setActive(categoryIndex);
            if (categoryIndex < categoriesNames.length) {      
             
                const newQuestion = new Question(questionWrapper.node, categoryIndex);
                newQuestion.onAnswer = () => {
                    buttonNextQuestion.node.disabled = false;
                }
                const buttonNextQuestion = new Control(questionWrapper.node, 'button', 'button-next-question', categoryIndex === 5 ?  langArr['buttonNextQuestion1'][hash] : langArr['buttonNextQuestion2'][hash]);

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

}

