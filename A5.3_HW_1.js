console.log("A5.3_HW_1");
console.log("---- ---- -----");
console.log("Excercise 1");
console.log("---- ---- -----");
console.log("1.1");


function printTwoNumber(n,m){
    let output = ''
    for(i=1;i<=n;i++){
        output = output + i
        if(i%m===0){
            output = output + "-"
        }
    }
        console.log(output);
}

printTwoNumber(9,4)

console.log("---- ---- -----");
console.log("1.2");

function printDivisibleNumberBetween(n,m){
    let divisibleNumbers = ''
    let notDivisibleNumbers = ''

    for(i=1;i<=n;i++){
        if(i%m===0){
            divisibleNumbers  = divisibleNumbers + i
        }else{
            notDivisibleNumbers = notDivisibleNumbers + i
        }
    }

    console.log("Divisible by 6: ",divisibleNumbers);
    console.log("Not divisible by 6: ",notDivisibleNumbers);
}

printDivisibleNumberBetween(20,6)

console.log("---- ---- -----");
console.log("1.3");

function printk (p,n,m){
    if(p<n<m){
        for(let i=n;i<=m;i++){
            if(i%p===0){
                console.log(i);
            }
        }
    }
}


printk(3,5,15)