var a = 4;
if (++a === 5) {
alert("given condition for variable a is true");
} 
// Output: given condition for variable a is true

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
} 
// Output: condition for variable b is false i.e. no output

var c = 12;
if (c++ === 13){
    alert("condition 1 is true");
} 
// Output: condition 1 for variable c is false i.e. no output

if (c === 13){
alert("condition 2 is true");
} 
// Output: condition 2 is true

if (++c < 14){
alert("condition 3 is true");
}
// Output: given condition 3 for variable c is false i.e. no output

if(c === 14){
alert("condition 4 is true");
} 
// Output: condition 4 is true

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
} 
// Output: the cost equals

if (true){
alert("True");
} 
// Output: true

if (false){
alert("False");
} // Output : There's no output

if("car" < "cat"){
 alert("car is smaller than cat")
} // Output : car is smaller than cat i.e. it works