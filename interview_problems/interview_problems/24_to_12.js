const formatTime = (time) => {
    // split the time
    const time_splitted = time.split(":");
    // default is AM
    let ampm = 'AM';
    // hour is greater than 12 then its PM
    if (time_splitted[0] >= 12) {
        ampm = 'PM';
    }
    // reset the hour if time is greater than 12
    if (time_splitted[0] > 12) {
        time_splitted[0] = time_splitted[0] - 12;
    }
    // if hour is zero, reset the hour to 12
    if (time_splitted[0] == 0) {
        time_splitted[0] = 12;
    }
    // return the converted time
    return time_splitted[0] + ':' + time_splitted[1] + ' ' + ampm;
}
console.log(formatTime("12:33"));
console.log(formatTime("00:33"));
