function sampler(fn, count) {
    let counter = 0;
    return function (...args) {
        // set the counters
        let context = this;
        counter++;
        // invoke only when number of calls is equal to the counts
        if (counter == count)
        {
        fn.apply(context, args);
        counter = 0;
        }

    };
}context