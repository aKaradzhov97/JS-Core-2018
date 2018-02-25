function dayOfWeek(day) {
    day = day.toLowerCase();
    if (day === "monday") {
        console.log("1");
    } else if (day === "tuesday") {
        console.log("2");
    } else if (day === "wednesday") {
        console.log("3");
    } else if (day === "thursday") {
        console.log("4");
    } else if (day === "friday") {
        console.log("5");
    } else if (day === "saturday") {
        console.log("6");
    } else if (day === "sunday") {
        console.log("7");
    } else {
        console.log("error");
    }
}