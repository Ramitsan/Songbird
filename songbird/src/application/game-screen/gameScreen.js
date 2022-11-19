import Control from '../../control/control';
import { categoriesNames } from '../const';
import '../../styles/style.css';
import './game-screen.css';
import { Footer } from '../../components/footer/footer';
import { Question } from '../../components/question/question';

export class GameScreen extends Control {
  
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

        const questionWrapper = new Control(mainWrapper.node, 'div', 'question-wrapper', '');
        let categoryIndex = 0;
        const gameStart = (categoryIndex) => {
            if (categoryIndex < categoriesNames.length) {      
             
                const newQuestion = new Question(questionWrapper.node, categoryIndex);
                newQuestion.onAnswer = () => {
                    buttonNextQuestion.node.disabled = false;
                }
                const buttonNextQuestion = new Control(questionWrapper.node, 'button', 'button-next-question', categoryIndex === 5 ?  'Результаты' : 'Следующий вопрос');

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

