function moviePrices(input) {
    let movieTitle = input[0].toLowerCase();
    let day = input[1].toLowerCase();

    if (movieTitle === "the godfather") {
        switch (day) {
            case "monday":
                console.log("12");
                break;
            case "tuesday":
                console.log("10");
                break;
            case "wednesday":
                console.log("15");
                break;
            case "thursday":
                console.log("12.50");
                break;
            case "friday":
                console.log("15");
                break;
            case "saturday":
                console.log("25");
                break;
            case "sunday":
                console.log("30");
                break;
            default: console.log("error");
        }
    } else if (movieTitle === "schindler's list") {
        switch (day) {
            case "monday":
                console.log("8.50");
                break;
            case "tuesday":
                console.log("8.50");
                break;
            case "wednesday":
                console.log("8.50");
                break;
            case "thursday":
                console.log("8.50");
                break;
            case "friday":
                console.log("8.50");
                break;
            case "saturday":
                console.log("15");
                break;
            case "sunday":
                console.log("15");
                break;
            default: console.log("error");
        }
    } else if (movieTitle === "casablanca") {
        switch (day) {
            case "monday":
                console.log("8");
                break;
            case "tuesday":
                console.log("8");
                break;
            case "wednesday":
                console.log("8");
                break;
            case "thursday":
                console.log("8");
                break;
            case "friday":
                console.log("8");
                break;
            case "saturday":
                console.log("10");
                break;
            case "sunday":
                console.log("10");
                break;
            default: console.log("error");
        }
    } else if (movieTitle === "the wizard of oz") {
        switch (day) {
            case "monday":
                console.log("10");
                break;
            case "tuesday":
                console.log("10");
                break;
            case "wednesday":
                console.log("10");
                break;
            case "thursday":
                console.log("10");
                break;
            case "friday":
                console.log("10");
                break;
            case "saturday":
                console.log("15");
                break;
            case "sunday":
                console.log("15");
                break;
            default: console.log("error");
        }
    }
}