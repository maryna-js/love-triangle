/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  for(let i = 0; i < preferences.length; i++){
      if(preferences[preferences[preferences[i]-1]-1]-1 == i)
  /**
   *  [6, 14, 12, "21", 3, 20, 7, 15, 16, 16, 14, "4", 11, 13, 18, 2, 1, 8, 3, 1, "12"]
   *  i=3
   *  arr[3]=21        arr[i] ==21
   *  arr[21-1]=12     arr[arr[i]-1]==12
   *  arr[12-1]=4      arr[arr[arr[i]-1]-1] ==4
   *  arr[12-1]-1=i    arr[arr[arr[i]-1]-1]-1 ==i
   *
   *  */    
      count++;
}

return Math.floor(count/3);
};
