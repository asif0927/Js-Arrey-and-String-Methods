/*1-ci yol */
let arr=[1, 73, 99, 20];
function countArrey(m=1){
    return arr.slice(0,m);
}
console.log(countArrey(3));
/*2-ci yol */
let arr2=[1, 73, 99, 20];
let emptyarr=[];
function countArrey2(n){
    if(n==undefined||n==1){
        emptyarr.push(arr[0])
        return emptyarr;
    }
    for (let i= 0; i < n; i++) {
        emptyarr.push(arr[i]);
    }
    return emptyarr;
}
console.log(countArrey2());
//+