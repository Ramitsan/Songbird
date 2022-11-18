import Control from '../../control/control';
import './footer.css';

export class Footer extends Control {

    constructor(parentNode) {
        super(parentNode, 'footer', 'footer', '');

        const authorLinkGithub = new Control(this.node, 'a', 'author-link-github', '');
        authorLinkGithub.node.setAttribute('href', 'https://github.com/Ramitsan');
        authorLinkGithub.node.setAttribute('target', '_blank');

        const appCreateYear = new Control(this.node, 'p', 'app-create-year', '2022');

        const courseLogo = new Control(this.node, 'a', 'course-logo', '');
        courseLogo.node.setAttribute('href', 'https://rs.school/js/');
        courseLogo.node.setAttribute('target', '_blank');
    }
}