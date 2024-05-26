console.log("A5.1_CW");

console.log("--- --- ---");
console.log("1.1")
console.log("--- --- ---");


for(let i=1; i<=10 ; i++){
    console.log(i)
}

console.log("--- --- ---");
console.log("1.2")
console.log("--- --- ---");


let pattern = ""
for(let i=1; i<=4; i++){

    pattern = pattern+"1"
    console.log(pattern)
}

//row1:pattern = "1"
//row2: pattern = "1"+"1"->11
//row3: pattern = "11"+"1"->111
//row4: pattern = "111"+"1"->1111

console.log("--- --- ---");
console.log("1.3")
console.log("--- --- ---");

let pattern1 = ""

for(let i=1;i<=5;i++){
    pattern1 = pattern1 + "a"
    console.log(pattern1)
}
console.log("--- --- ---");
console.log("1.4")
console.log("--- --- ---");
let numberPattern = ""

for(let i=1; i<=5;i++){
    numberPattern =( numberPattern + i)
    console.log(numberPattern)
}

// i=1: row1: numberPattern = "" +1 -> "1"
// i=2: row2: numberPattern = "1" +1 -> "12"
// i=3: row3: numberPattern = "2" +1 -> "123"
// i=4: row4: numberPattern = "3" +1 -> "1234"
// i=5: row5: numberPattern = "4" +1 -> "12345"

console.log("--- --- ---");
console.log("1.5")
console.log("--- --- ---");

for(let i=1; i<=10; i++){
    let result = 2* i
    console.log("2 * " + i + " = " + result)
}

console.log("--- --- ---");
console.log("1.6")
console.log("--- --- ---");

for(let i=1; i<=10; i++){
    let result = i*i
    console.log(i +" * " + i + " = " + result)
}