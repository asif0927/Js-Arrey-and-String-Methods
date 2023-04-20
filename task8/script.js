let arr=['a','salam','b','world'];
function arrIndexPush(arr,curindex,item){
    if(curindex<arr.length){
        arr.splice(curindex,0,item)
    }
    else{
        arr.push(item)
    }
    return arr;
}
console.log(arrIndexPush(arr,9,"dev"));