let complexarr=[0, 1, false, 2, undefined, '', 3, null,0,true,"Asif",9];
function removeComplexArr(arr){
    let emptyarr=[];
    for(let i=0; i<complexarr.length; i++){
        if( complexarr[i]!=0 && typeof complexarr[i]=="number"){
            emptyarr.push(complexarr[i]);
        }
    }
    return emptyarr;
}
console.log(removeComplexArr(complexarr));
//+