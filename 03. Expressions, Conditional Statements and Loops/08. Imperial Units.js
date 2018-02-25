function imperialUnits(input) {
    input = Number(input);

    let foots = Math.floor(input / 12);
    let inches = input % 12;
    console.log(`${foots}'-${inches}"`);
}