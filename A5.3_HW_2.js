console.log("A5.3_HW_2");
console.log("---- ---- -----");
console.log("Excercise 1");
console.log("---- ---- -----");
console.log("1.1");


function printTwoNumber(n,m){

    let output = ''
    for(i=1;i<=n;i++){
        output =output +i
        if(i%m===0 && i !=n){
            output = output +"%"
        }
    }
    console.log(output);
}

printTwoNumber(20,5)

console.log("---- ---- -----");
console.log("1.2");

function printNumber (n,m){
    let divisibleNumbers = ''
    let notDivisibleNumbers = ''

    for(let i=1;i<=n;i++){
        if(i%m===0){
            divisibleNumbers = divisibleNumbers + " " + i

        }else{
            notDivisibleNumbers = notDivisibleNumbers + " " + i
        }
    }

    console.log("Divisible by 5: ",divisibleNumbers);
    console.log("Not divisible by 5: ",notDivisibleNumbers);
}


printNumber (30,5)

console.log("---- ---- -----");
console.log("1.3");

function printL (p,n,m){
    if(p<n<m){
        for(let i=p;i<=m;i++){
            if(i%2===0 ){
                console.log(i);
            }
        }
    }
}

printL(8,5,15)



