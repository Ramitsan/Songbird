import Control from "../../control/control";
import { lang } from '../../application/model/lang';
import elemTranslate from '../../data/elem-translate';
import '../../styles/style.css';
import './score.css';

export class Score extends Control {
    constructor(parentNode, score) {
        super(parentNode, 'div', 'score-wrapper', '');

        let hash = lang.currentLang;

        const scoreTitle = new Control(this.node, 'p', 'score-title', elemTranslate['scoreTitle'][hash]);     
        const scoreCount = new Control(this.node, 'span', 'score-count', '');
        this.scoreCount = scoreCount;
        scoreCount.node.textContent = score;
    }

    updateScore(score) {
        this.scoreCount.node.textContent = score;
    }
}