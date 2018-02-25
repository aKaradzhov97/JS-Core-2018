function magicMatrices(matrix) {
    let firstRowSum = 0;
    let currentRowSum = 0;
    let currentColSum = 0;

    let isMagic;

    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix.length; col++) {
            //Now checking rows sums.
            if (row === 0) {
                firstRowSum += Number(matrix[row][col]);
            }
            currentRowSum += Number(matrix[row][col]);

            //And now checking col sums.
            currentColSum += Number(matrix[col][row]);
        }
        if (firstRowSum === currentRowSum && firstRowSum === currentColSum) {
            isMagic = true;
        }
        else {
            isMagic = false;
        }
        currentRowSum = 0;
        currentColSum = 0;
        if (!isMagic) {
            break;
        }
    }
    if (isMagic) {
        console.log("true");
    } else {
        console.log("false");
    }
}