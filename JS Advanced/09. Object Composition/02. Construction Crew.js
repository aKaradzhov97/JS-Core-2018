function constructionCrew(workerObj) {
    if (workerObj['handsShaking']) {
        workerObj['bloodAlcoholLevel'] += workerObj['weight'] * workerObj['experience'] * 0.1;
        workerObj['handsShaking'] = false;
    }
    return workerObj;
}