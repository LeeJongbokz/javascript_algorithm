/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    
    let rowlen = matrix.length;
    let collen = matrix[0].length;

    let temp = new Array(collen).fill(0);

    for(let i=0; i<temp.length; i++){
       temp[i] = new Array(rowlen).fill(0); 
    }

    for(let i=0; i<matrix.length; i++){
       for(let j=0; j<matrix[i].length; j++){
          temp[j][i] = matrix[i][j];
       }
    } 

    return temp;
    
};
