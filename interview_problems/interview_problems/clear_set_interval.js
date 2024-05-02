const MY_TIMER = {
    intervalIds: [], //global interval id's arrays
    //create a MY_TIMER's interval
    setInterval: function (fn, delay) {
        let id = setInterval(fn, delay);
        this.intervalIds.push(id);
        return id;
    },
    //MY_TIMER's clearAllTimeout
    clearAllInterval: function () {
        while (this.intervalIds.length) {
            clearTimeout(this.intervalIds.pop());
        }
    }
};
MY_TIMER.setInterval(() => {
    console.log("Hello");
}, 2000);
MY_TIMER.setInterval(() => {
    console.log("Hello2");
}, 500);
MY_TIMER.clearAllInterval();
MY_TIMER.setInterval(() => {
    console.log("Hello3");
}, 1000);
Output:
"Hello3" // last one, after every ~1 sec