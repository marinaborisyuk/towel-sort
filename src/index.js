
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix || matrix.length <= 0)
  {
    return [];
  }

  // let arr = [].concat(...matrix);
  let arr = [];

  for(let i = 0; i < matrix.length; i++)
  { 
    for(let j = 0; j < matrix[i].length; j++)
    {
      arr.push(matrix[i][j]); 
    }
  }

  arr.sort(function (a, b) {
    return a - b;
});

  return arr;
}