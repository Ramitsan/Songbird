import Control from '../../control/control';

export class GalleryScreen extends Control {
    onStart;
    constructor(parentNode) {
        super(parentNode);
        const button = new Control(this.node, 'button', '', 'Старт');
        button.node.onclick = () => {
            this.onStart();
        }
    }
}