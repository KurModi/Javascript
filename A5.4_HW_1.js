console.log("A5.4_HW_1");
console.log("---- ---- -----");
console.log("Excercise 1");
console.log("---- ---- -----");
console.log("1.1");


function sumUpToN (n){
   let sum = 0
    for(i=1;i<=n;i++){
        sum = sum + i
    }

    return sum

}

console.log(sumUpToN(10));


console.log("---- ---- -----");
console.log("1.2");


function sumOfEvenNumbersUpToN(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        if(i%2==0){
            sum = sum+i
        }
    }

    return sum

}

console.log(sumOfEvenNumbersUpToN(9));

console.log("---- ---- ----");
console.log("1.3");

function sumDivisibleByFiveAndSevenUpToN (n){
    let sumOfNumberDivisibleByFive = 0
    let sumOfNumberDivisibleBySeven = 0

    for(i=1;i<=n;i++){
        if(i%5===0){
            sumOfNumberDivisibleByFive = sumOfNumberDivisibleByFive + i
        }
        if(i%7===0){
            sumOfNumberDivisibleBySeven =sumOfNumberDivisibleBySeven +i
        }
    }
    console.log("sum of numberdivisible by 5:",sumOfNumberDivisibleByFive);
    console.log("sum of numberdivisible by 7:",sumOfNumberDivisibleBySeven);
}

sumDivisibleByFiveAndSevenUpToN(35)






console.log("---- ---- ----");
console.log("1.4");

function factorial(n){
    let result =1
    for(let i=1; i<=n;i++){
        result = result * i
    }

    return result
}

console.log(factorial(7));
