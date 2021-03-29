module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error () 

  let newArray=[...arr];
  
  for (let i=0; i<arr.length; i++) {
    if (arr[i] === '--double-prev') newArray.splice(i,1,newArray[i-1]);
    else if (arr[i] === '--double-next') newArray.splice(i,1,arr[i+1]);
    else if (arr[i] === '--discard-next') newArray.splice(i+1,1,undefined);
    else if (arr[i] === '--discard-prev' && i>0) newArray.splice(i-1,1,undefined)
  }

  return newArray.filter(el => el!==undefined && el!=='--discard-prev' && el!=='--discard-next');
};
