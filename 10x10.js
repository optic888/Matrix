// Create a 10x10 matrix filled with zeros
function createMatrix(rows, cols) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    matrix[i] = [];
    for (let j = 0; j < cols; j++) {
      matrix[i][j] = 0;
    }
  }
  return matrix;
}

// Print the matrix
function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join('\t'));
  }
}

// Example usage
let matrix = createMatrix(10, 10);
printMatrix(matrix);
