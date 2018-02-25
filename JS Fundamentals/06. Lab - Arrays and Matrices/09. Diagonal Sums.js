function diagonalSums(matrix) {
    let firstSum = 0;
    let secondSum = 0;
    for (var i = 0; i < matrix.length; i++) {
        let currentNumForFirstSum = matrix[i][i];
        let currentNumForSecondSum = matrix[i][matrix.length - i - 1];
        firstSum += currentNumForFirstSum;
        secondSum += currentNumForSecondSum;
    }
    console.log(firstSum + " " + secondSum);
}