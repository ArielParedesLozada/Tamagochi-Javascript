export class Observer {
    constructor(callback) {
        this.callback = callback;
    }

    update() {
        this.callback();
    }
}