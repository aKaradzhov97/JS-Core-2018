function templateFormat(inputArr) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>');
    console.log('<quiz>')
    for (var i = 0; i < inputArr.length; i += 2) {
        let question = inputArr[i];
        let answer = inputArr[i + 1];
        console.log('   <question>');
        console.log("       " + question);
        console.log('   </question>');
        console.log('   <answer>');
        console.log("       " + answer);
        console.log('   </answer>');
    }
    console.log('</quiz>');
}