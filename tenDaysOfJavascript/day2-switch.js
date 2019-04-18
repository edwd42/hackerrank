// https://www.hackerrank.com/challenges/js10-switch/problem
function getLetter(s) {
    let letter;
    // Write your code here
    switch (s.charAt(0)) {
        case String(s.match(/[aeiou]/i)):
            letter = "A";
            break;
        case String(s.match(/[bcdfg]/i)):
            letter = "B";
            break;
        case String(s.match(/[hjklm]/i)):
            letter = "C";
            break;
        case String(s.match(/[npqrstuvwxyz]/i)):
            letter = "D";
            break;
        default:
            console.log("not found");
    }
    return letter;
}

console.log(getLetter('adfgt'));
console.log(getLetter('bdfgt'));
console.log(getLetter('cdfgt'));
console.log(getLetter('zdfgt'));
console.log(getLetter('Ndfgt'));