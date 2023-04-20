let dublicatearr=[1, 2, 1, 2, 3];
function removedublicate(arr){
    let emptyarr=[];
    for(let i=0;i<arr.length;i++){
        if(!emptyarr.includes(arr[i])){
            emptyarr.push(arr[i]);
        }
    }
    return emptyarr;
}
console.log(removedublicate(dublicatearr));
//+