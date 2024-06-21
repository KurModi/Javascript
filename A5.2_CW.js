console.log("1.1","\n");

for(i=10;i>=1;i--){
    console.log(i);
}

console.log("1.2","\n");

for(i=10;i>=1;i--){
    console.log("7 * " + i + " = " + i*7);
}


console.log("1.3");

for(i=4;i>=1;i--){
    console.log(i*3);
}


console.log("Excercise 2");
console.log("------------");



function printNumbers(n){

    for(i=1;i<=n;i++){
            console.log(i);
    }

}

printNumbers(5)


console.log("2.2","\n");

function printOddNumber(n){
    for(let i=1;i<=n;i++){

        if(i % 2 !== 0){
             console.log(i);
        }
    }
}

printOddNumber(10,"\n")

console.log("2.3","\n");


function divisibleby5(n){

    for(i=1;i<=n;i++){
        if(i%5 === 0){
            console.log(i);
        }
    }
}

divisibleby5(25)

