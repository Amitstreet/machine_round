// Custom Promise class definition
class CustomPromise {
  constructor(executor) {
    this.status = 'pending';
    this.value = undefined;
    this.callbacks = [];

    const resolve = (value) => {
      if (this.status !== 'pending') return;
      this.status = 'fulfilled';
      this.value = value;
      this.callbacks.forEach(callback => callback());
    };

    const reject = (reason) => {
      if (this.status !== 'pending') return;
      this.status = 'rejected';
      this.value = reason;
      this.callbacks.forEach(callback => callback());
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new CustomPromise((resolve, reject) => {
      const callback = () => {
        setTimeout(() => {
          try {
            if (this.status === 'fulfilled') {
              const result = onFulfilled ? onFulfilled(this.value) : this.value;
              resolve(result);
            } else if (this.status === 'rejected') {
              const result = onRejected ? onRejected(this.value) : this.value;
              reject(result);
            }
          } catch (error) {
            reject(error);
          }
        });
      };

      if (this.status === 'pending') {
        this.callbacks.push(callback);
      } else {
        callback();
      }
    });
  }
}

// Creating an object using the custom Promise class
const customPromise = new CustomPromise((resolve, reject) => {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve(randomNumber);
    } else {
      reject('Random number is less than 0.5');
    }
  }, 1000);
});

// Using the custom Promise object with then method
customPromise.then(
  value => {
    console.log('Resolved with value:', value);
  },
  reason => {
    console.log('Rejected with reason:', reason);
  }
);
