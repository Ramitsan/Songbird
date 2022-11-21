import Signal from '../control/signal';

export class Lang {
    currentLang = 'ru';

    constructor(config) {
        this.onChange = new Signal();

    }
    setLang(lang ) {
        this.currentLang = lang;
        this.onChange.emit(lang);
    }
    nextLang() {
        if(this.currentLang === 'ru') {
            this.setLang('en')
        } else {
            this.setLang('ru')  
        }
    }
}

export const lang = new Lang();