function indexcalculate(str,char){
    sum=0;
    for(let i=0;i<str.length;i++){
        if(str[i]==char){
            sum+=i;
        }
    }
    if(sum==0){
        return -1;
    }
    else{
        return sum;
    }
}
console.log(indexcalculate("hello","l"));