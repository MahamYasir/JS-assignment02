//total marks as input
var engTotalMarks = prompt("Total marks of English");
var mathsTotalMarks = prompt("Total marks of Mathematics");
var scienceTotalMarks = prompt("Total marks of Science");

//obtained marks as input
var engMarks = prompt("Marks obtained in English");
var mathsMarks = prompt("Marks obtained in Mathematics");
var scienceMarks = prompt("Marks obtained in Science");

//Calculating total marks
var totalMarks = Number(engTotalMarks) + Number(mathsTotalMarks) + Number(scienceTotalMarks);

//Calculating total obtained marks
var totalObtainedMarks = Number(engMarks) + Number(mathsMarks) + Number(scienceMarks);

//Calculating percentage
var percentage = totalObtainedMarks / totalMarks * 100;

//Printing results on browser

document.write("<h3>Marks Sheet</h3>");
document.write("<br>Total Marks : "+ totalMarks);
document.write("<br>Marks Obtained : "+ totalObtainedMarks);
document.write("<br>Percentage : "+ percentage);

//Computing grades and remarking
if (percentage >= 80){
    document.write("<br>Grade : A-one <br> Remarks : Excellent");
}
else if (percentage >= 70){
    document.write("<br>Grade : A <br> Remarks : Good");
} 
else if (percentage >= 60){
    document.write("<br>Grade : B <br> Remarks : You need to improve");
} 
else if (percentage < 60){
    document.write("<br>Grade : Fail <br> Remarks : Sorry");
} 