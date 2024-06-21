console.log("A5.2_HW_1");
console.log("---- ---- -----");
console.log("Excercise 1");
console.log("---- ---- -----");
console.log("1.1");

for(i=20;i>=10;i--){
    console.log(i);
}

console.log("\n");
console.log("1.2");

for(i=10;i>=1;i--){
    console.log("6 * "+ i + " = " + i*6);
}

console.log("\n");
console.log("1.3");

for(i=100;i>=10;i--){
    if(i%10==0){
        console.log(i);
    }
    
}

console.log("---- ---- -----");
console.log("Excercise 2");
console.log("---- ---- -----");

console.log("\n");
console.log("2.1");

function printNumbers(n){
    for(i=1;i<=n;i++)
        console.log(i);
}

printNumbers(8)

console.log("\n");
console.log("2.2");

function printEvenNumbers(n){
    for(i=1;i<=n;i++){
        if(i%2==0){
            console.log(i);
        }
    }
}

printEvenNumbers(15)


console.log("\n");
console.log("2.3");

function divisibleby5and10(n){
    for(i=1;i<=n;i++){
        if(i%5==0,i%10==0){
            console.log(i);
        }
    }
}


divisibleby5and10(50)