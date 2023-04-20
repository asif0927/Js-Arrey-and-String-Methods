let students = [
    { name: "Asif", surname: "Haqverdizade", age: 19, point: 90 },
    { name: "Kamran", surname: "Huseynzade", age: 20, point: 100 },
    { name: "Yusif", surname: "Ehmedov", age: 18, point: 95 },
    { name: "Anar", surname: "Seferov", age: 21, point: 93 }
];
let ageSort=students.slice().sort(function(x, y) {
    return y.age - x.age;
});

let pointSort=students.slice().sort(function(a, b) {
    return a.point - b.point;
});
console.log(ageSort);
console.log(pointSort);

let namearr=[];
function PointLowandHighStudents(arr){
   namearr.push(pointSort[0].name);
   namearr.push(pointSort[pointSort.length-1].name);
   return namearr;
}
console.log(PointLowandHighStudents(namearr));