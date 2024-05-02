
//"12:10AM"

const formatTime = (time) => {
    //convert the input to lowercase
    const timeLowerCased = time.toLowerCase();
    //split the hours and mins
    let [hours, mins] = timeLowerCased.split(":");
    // Special case
    // 12 has to be handled for both AM and PM.
    if (timeLowerCased.endsWith("am")) {
        hours = hours == 12 ? "0" : hours;
    }

    else if (timeLowerCased.endsWith("pm")) {
        hours = hours == 12 ? hours : String(+hours + 12);
    }

    return `${hours.padStart(2, 0)}:${mins.slice(0, 2).padStart(2, 0)}`;
}


console.log(formatTime("12:10AM"));
console.log(formatTime("12:33PM"));
