function combineArrstr(arr1,arr2,str){
    let resarr=arr1.concat(arr2);
    return resarr.join(str);
}
console.log(combineArrstr([1,2],[3,4],"*"));
//+