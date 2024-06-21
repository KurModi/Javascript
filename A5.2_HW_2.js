console.log("A5.2_HW_1");
console.log("---- ---- -----");
console.log("Excercise 1");
console.log("---- ---- -----");
console.log("1.1");

for(i=30;i>=11;i--){
    console.log(i);
}
console.log("\n");
console.log("1.2");

for(i=15;i>=1;i--){
    console.log("9 * "+ i + " = " + i*9);
}

console.log("\n");
console.log("1.3");


for(i=50;i>=5;i--){
    if(i%5==0){
        console.log(i);
    }
}


console.log("\n");
console.log("---- ---- -----");
console.log("Excercise 2");
console.log("---- ---- -----");
console.log("2.1");


function printDivisibleBy8(n){
    for(i=1;i<=n;i++){
        if(i%8==0){
            console.log(i);
        }
    }
}

printDivisibleBy8(30)

console.log("\n");
console.log("2.2");

function printOddNumber5(n){
    for(i=5;i<=n;i++){
        if(i%2 !==0){
            console.log(i);
        }
    }
}

printOddNumber5(15)

console.log("\n");
console.log("2.3");

function divisibleby5and7(n){
    for(i=1;i<=n;i++){
        if(i%5==0 && i%7==0){
            console.log(i);
        }
    }
}

divisibleby5and7(50)