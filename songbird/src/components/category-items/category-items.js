import Control from '../../control/control';
import { categoriesNamesRu, categoriesNamesEn, hash } from '../../application/const';
import './category-items.css';

export class CategoryItems extends Control {
    constructor(parentNode) {
        super(parentNode, 'ul', 'game-nav-list', '');

        const categoriesNames = hash === 'ru' ? categoriesNamesRu : categoriesNamesEn;
        const categoryItems = [];
        this.categoryItems = categoryItems;

        const createCategoryItems = () => {
            for (let i = 0; i < categoriesNames.length; i++) {
                const categoryItem = new Control(this.node, 'li', 'category-item', `${categoriesNames[i]}`);
                this.categoryItems.push(categoryItem);
            }
        }
        createCategoryItems();       
    }

    setActive(index) {
        for (let j = 0; j < this.categoryItems.length; j++) {
            this.categoryItems[j].node.classList.remove('category-item-active');
            if(index === j) this.categoryItems[j].node.classList.add('category-item-active');
        }
    }

}