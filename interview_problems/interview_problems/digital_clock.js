const clock = () => {
    const time = new Date(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds();
    return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds);
}

setInterval(function () {
    console.log(clock());
}, 1000);