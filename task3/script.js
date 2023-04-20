let str="saLamNecesen";
let small=str.toLowerCase();//salamnecesen
let big=str.toUpperCase();//SALAMNECESEN
let bigarr=[];
function letterChange(string){
    for(let i=0;i<string.length;i++){
        if(small.includes(string[i])){
            bigarr.push(string[i].toUpperCase());
        }
        if(big.includes(string[i])){
            bigarr.push(string[i].toLowerCase());
        }
    }
    return bigarr.join("");
}
console.log(letterChange(str));