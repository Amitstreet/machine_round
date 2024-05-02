class Stream {
    constructor() {
        this.subscriptions = [];
    }
    subscribe(method) {
        if (typeof method !== 'function') {
            throw new Error('Invalid method!.');
        }
        this.subscriptions.push(method);
    }
    push(val) {
        this.subscriptions.forEach((method) => {
            method.call(this, val);
        });
    }
}

const z = new Stream();
z.subscribe((value) => console.log(value));
z.subscribe((value) => console.log(value * 2));
z.subscribe((value) => console.log(value * 3));
z.push(2);
Output:
2
4
6