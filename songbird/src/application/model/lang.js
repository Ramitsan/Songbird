import Signal from '../../control/signal';
import appStorage from '../../control/localStorage';

export class Lang {
    currentLang = 'ru';

    constructor() {
        const storageLang = appStorage.getDataBase();
        if(storageLang === 'en' || storageLang == 'ru') {
            this.currentLang = storageLang;
        }       
        this.onChange = new Signal();
    }

    setLang(lang ) {
        this.currentLang = lang;
        appStorage.setDataBase(lang);
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