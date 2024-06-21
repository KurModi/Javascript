console.log("A5.4_CW");
console.log("---- ---- ----");
console.log("1.1");


function sumUpToN(n){

    let sum =0;
    for(i=1;i<=n;i++){
        sum = sum + i
    }

    return sum 
}

console.log(sumUpToN(5));

console.log("---- ---- ----");
console.log("1.2");

function sumOfOddNumbersUpToN(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        if(i%2!==0){
            sum = sum+i
        }
    }

    return sum

}

console.log(sumOfOddNumbersUpToN(7));

console.log("---- ---- ----");
console.log("1.3");

function  sumDivisibleByThreeAndSevenUpToN(n){
    let sumOfNumberDivisibleByThree = 0
    let sumOfNumberDivisibleBySeven = 0

    for(let i=1; i<=n ; i++){
        if(i%3===0){
            sumOfNumberDivisibleByThree = sumOfNumberDivisibleByThree + i
        }

        if(i%7===0){
            sumOfNumberDivisibleBySeven = sumOfNumberDivisibleBySeven + i 
        }
    }

        console.log("sum of numberdivisible by 3:",sumOfNumberDivisibleByThree);
        console.log("sum of numberdivisible by 7:",sumOfNumberDivisibleBySeven);
}


sumDivisibleByThreeAndSevenUpToN(21)

console.log("---- ---- ----");
console.log("1.4");

function factorial(n){
    let result =1
    for(let i=1; i<=n;i++){
        result = result * i
    }

    return result
}

console.log(factorial(5));

