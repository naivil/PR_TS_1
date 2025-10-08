var std_name = "Naivil";
var sub1 = 95;
var sub2 = 86;
var sub3 = 73;
var total = sub1 + sub2 + sub3;
var avg = total / 3;
console.log("Name is :", std_name);
console.log("sub1 mark :", sub1);
console.log("sub2 mark :", sub2);
console.log("sub3 mark :", sub3);
console.log("total is :", total);
console.log("avg is :", avg);
if (avg > 100) {
    console.log("A");
}
else if (avg > 70) {
    console.log("B");
}
else if (avg > 50) {
    console.log("C");
}
else {
    console.log("Fail");
}
