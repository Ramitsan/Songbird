class Storage {
    storageKey;

    constructor() {
        this.storageKey = 'xfgdfhg';
    }

    setDataBase(dataPool) {
        window.localStorage.setItem(this.storageKey, JSON.stringify(dataPool));
    }

    getDataBase() {
        return JSON.parse(window.localStorage.getItem(this.storageKey));
    }

    removeDataBase() {
        window.localStorage.removeItem(this.storageKey);
    }
}

const appStorage = new Storage();
export default appStorage;