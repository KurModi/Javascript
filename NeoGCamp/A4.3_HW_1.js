console.log("A4.3_HW_1");

console.log("--- --- ---");
console.log("Excercise 1");
console.log("--- --- ---");

const day1Burnt = 400;
const day1Intake = 1500;
const day2Burnt = 450;
const day2Intake = 1800;
const day3Burnt = 300;
const day3Intake = 1600;
const day4Burnt = 500;
const day4Intake = 2000;
const baseCalorieBurn = 1500;

function calculateSurplusDeficit(day, day1Burnt, day1Intake, baseCalorieBurn){
  
  const day1SurPlus = day1Burnt - (day1Intake+baseCalorieBurn)

   console.log(day,"Surplus/Deficit : ",day1SurPlus)
 
  

}
    calculateSurplusDeficit("Day 1 :",day1Burnt,day1Intake,baseCalorieBurn)
    calculateSurplusDeficit("Day 2 :",day2Burnt,day2Intake,baseCalorieBurn)
    calculateSurplusDeficit("Day 3 :",day3Burnt,day3Intake,baseCalorieBurn)
    calculateSurplusDeficit("Day 4 :",day4Burnt,day4Intake,baseCalorieBurn)


console.log("--- --- ---");
console.log("Excercise 2");
console.log("--- --- ---");

function totalBurnt(day1Burnt, day2Burnt, day3Burnt, day4Burnt){
  return totalBurnt= day1Burnt+day2Burnt+day3Burnt+day4Burnt
  }

  let totalCaloriesBurnt = totalBurnt(day1Burnt, day2Burnt, day3Burnt, day4Burnt)
    console.log("Total Calories Burnt: ",totalCaloriesBurnt)

console.log("--- --- ---");
console.log("Excercise 3");
console.log("--- --- ---");

function totalIntake(day1Intake, day2Intake, day3Intake, day4Intake){
    return day1Intake+day2Intake+day3Intake+day4Intake
    
}
 let totalCaloriesIntake = totalIntake(day1Intake, day2Intake, day3Intake, day4Intake);
 console.log("Total Calories Intake: ",totalCaloriesIntake)


 console.log("--- --- ---");
console.log("Excercise 4");
console.log("--- --- ---");

function totalSurplus(totalBurn,totalIntake,baseCalorieBurn){
   return totalBurn-(totalIntake+(4*baseCalorieBurn))
}
const totalSurplusAmount = totalSurplus(totalCaloriesBurnt, totalCaloriesIntake, baseCalorieBurn)
console.log("Total Surplus/Deficit:",totalSurplusAmount)


console.log("--- --- ---");
console.log("Excercise 5");
console.log("--- --- ---");

function generateWeeklySummary (totalBurnt,totalIntake,totalSurplus){
    let standingGoalAwards  = ""

    if(totalBurnt >=1000){
     standingGoalAwards="Standing Goal Award: Congratulations! You have kept moving throughout. Keep it up!"

    }else{
        standingGoalAwards="“No Award yet"
    }
    const weeklySummary = "Weekly Summary:\nTotal Calories Burnt:" +totalBurnt + "\n"+
    "Total Calories Intake:" + totalIntake + "\n" +
    "Total Surplus/Deficit:" + totalSurplus + "\n" +
     standingGoalAwards

    return weeklySummary
}

let weeklyReposrt = generateWeeklySummary(totalCaloriesBurnt,totalCaloriesIntake,totalSurplusAmount)
console.log(weeklyReposrt)

