console.log("A5.3_CW");
console.log("---- ---- ----");
console.log("1.1");

function printTwoNumber(n,m){

    let output = ''

    for(i=1;i<=n;i++){
        output = output + i
        if(i%m===0 && i !=n){
        output = output + "#"
    }
}
console.log(output);
}
printTwoNumber(9,3)


console.log("---- ---- ----");
console.log("1.2");

function printDivisibleAndNoDivisible(n,m){
    let divisibleNumbers = ''
    let notDivisibleNumbers = ''

    for(let i=1; i<=n;i++){
        if(i%m === 0){
            divisibleNumbers = divisibleNumbers + " "+i
        }else{
            notDivisibleNumbers = notDivisibleNumbers + " " + i
        }
    }
     
    console.log("Divisible by 3: ",divisibleNumbers);
    console.log("Not divisible by 3: ",notDivisibleNumbers);

}

printDivisibleAndNoDivisible(10,3)


console.log("---- ---- ----");
console.log("1.3");


function printDivisibleNumberBetween(p,n,m){
        if(p<n<m){
            for(let i=n;i<=m;i++){
                if(i%p === 0){
                    console.log(i);
                }
            }
        }
}


printDivisibleNumberBetween(2,3,9)