// https://www.hackerrank.com/challenges/js10-arrays/problem

/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    var revSortArr; 
    revSortArr = nums.sort(function (a, b) {  
        // return a - b;
        return b - a;  
    });

    for(var i = 0; i < revSortArr.length-1; i++){
        var temp = revSortArr[i];
        if(temp > revSortArr[i + 1]){ return revSortArr[i + 1];}
    }
}

var nums = [2, 3, 6, 6, 5];
console.log("sec == " + getSecondLargest(nums));

var nums = [0, 100, 60, 60, 50];
console.log("sec == " + getSecondLargest(nums));

var nums = [0, 99, 60, 60, 50];
console.log("sec == " + getSecondLargest(nums));