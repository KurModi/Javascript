console.log("A5.4_HW_2");
console.log("---- ---- -----");
console.log("Excercise 1");
console.log("---- ---- -----");
console.log("1.1");

function averageOfNumbersuptoN(n) {

    let sum = 0;
    for (i = 1; i <= n; i++) {

        sum = sum + i

    }

    let aeverage
    aeverage = sum / n
    return aeverage


}

console.log("The average of numbers from 1 to 10: " + averageOfNumbersuptoN(10));


console.log("---- ---- -----");
console.log("1.2");

function sumOfNumbersGreaterThanSixUpToN(n) {

    let sum = 0;
    for (i = 1; i <= n; i++) {
        if (i > 6) {
            sum = sum + i
        }
    }

    return sum
}

console.log("The sum of numbers "+sumOfNumbersGreaterThanSixUpToN(12));


console.log("---- ---- -----");
console.log("1.3");

function sumDivisibleByEightUpToN (n){

    let sum = 0
    let divisible = 0
    for(i=1;i<=n;i++){
        if(i>10 && i%8===0){
            sum = sum + i 
            divisible = divisible +i
        }

}
return divisible
}
console.log(sumDivisibleByEightUpToN(40));



console.log("---- ---- -----");
console.log("1.4");

function sumEvenAndOddUpToN(n){
   let sumOfOddNumber = 0
   let sumOfEvemNumber = 0 
   let sum = 0

    for(i=1;i<=n;i++){
        sum = sum + i
        if(i%2!==0){
            sumOfOddNumber = sumOfOddNumber + i
        }if(i%2===0){
            sumOfEvemNumber = sumOfEvemNumber + i
        }
    }

    console.log("Sum of Even Numbers: ",sumOfEvemNumber);
    console.log("Sum of Odd Numbers: ",sumOfOddNumber);
}
sumEvenAndOddUpToN(30)
