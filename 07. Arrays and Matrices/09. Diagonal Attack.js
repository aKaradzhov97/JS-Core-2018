function diagonalAttack(arr) {
    let matrix = [];
    //Pushing elements to matrix from string input.
    for (var i = 0; i < arr.length; i++) {
        matrix.push(arr[i].split(' ').map(Number));
    }

    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix[row].length; col++) {
            if (row === col) {
                primaryDiagonalSum += matrix[row][col];
            }
            if (col === matrix[row].length - row - 1) {
                secondaryDiagonalSum += matrix[row][col];
            }
        }
    }

    if (primaryDiagonalSum === secondaryDiagonalSum) {
        for (var row = 0; row < matrix.length; row++) {
            for (var col = 0; col < matrix[row].length; col++) {
                if (row !== col && col !== matrix.length - row  - 1) {
                    matrix[row][col] = primaryDiagonalSum;
                }
            }
        }
    }

    //Joining row elements with interval and joining rows with new Line;
    let result = matrix.map(row => row.join(' ')).join('\n');
    //End of joining;
    console.log(result);
}