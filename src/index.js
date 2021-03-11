module.exports = function towelSort (matrix) {
  if(!matrix || matrix.length <= 0)
  {
    return [];
  }

  let arr = [];

  for(let i = 0; i < matrix.length; i++)
  { 
    if(!(i % 2 == 0))
    {
      matrix[i].reverse();
    }
    for(let j = 0; j < matrix[i].length; j++)
    {
      arr.push(matrix[i][j]); 
    }
  } 

  return arr;
}