/*
 * Complete the simpleArraySum function below.
 */

var ar = [1, 2, 3, 4, 10, 11];

function simpleArraySum(ar) {
    /*
     * Write your code here.
     */
    let sum = 0;
    for(var i = 0; i < ar.length; i++){
        sum += ar[i];
    }
    console.log(sum);
}


simpleArraySum(ar);