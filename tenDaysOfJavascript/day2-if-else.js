// https://www.hackerrank.com/challenges/js10-if-else/problem
function getGrade(score) {
    let grade;
    // Write your code here
    if(score <= 5) return "F";
    if(score <= 10) return "E";
    if(score <= 15) return "D";
    if(score <= 20) return "C";
    if(score <= 25) return "B";
    if(score <= 30) return "A";
    
}

console.log(getGrade(25));
