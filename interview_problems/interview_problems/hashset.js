const Store = function () {
    //store the data
    this.list = {};
    //set the key-value in list
    this.set = function (key, value) {
        this.list[key] = value;
    }
    //get the value of the given key
    this.get = function (key) {
        return this.list[key];
    }
    //check if key exists
    this.has = function (key) {
        return !!this.list[key];
    }
}

