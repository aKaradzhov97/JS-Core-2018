function equalNeighbours(matrix) {
    let counterOfNeigbours = 0;
    for (var row = 0; row < matrix.length - 1; row++) {
        let currentArr = matrix[row];
        let nextArr = matrix[row + 1];
        for (var el = 0; el < currentArr.length; el++) {
            if (currentArr[el] === nextArr[el]) {
                counterOfNeigbours++;
            }
            if (currentArr[el] === currentArr[el + 1]) {
                counterOfNeigbours++;
            }
            //if (nextArr[el] === nextArr[el + 1]) {
            //    counterOfNeigbours++;
            //}
            if (row == matrix.length - 2 && nextArr[el] == nextArr[el + 1]) {
                counterOfNeigbours++;
            }
        }
    }
    console.log(counterOfNeigbours);
}