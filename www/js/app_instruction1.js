/*
//Instruction 1 Point 5.
function checkCost(){
    var toyPrice, budget;
    
    toyPrice = 15.5;
    budget = 16;
    
    if (toyPrice <= budget){
        console.log("Allowed to buy");
    }
    
    console.log("Toy price is $" + toyPrice + " and budget is $" + budget);
}
*/
/*
//Instruction 1 Point 7.
function checkCost(){
    var toyPrice, budget, conduct;
    
    toyPrice = 15.5;
    budget = 16;
    conduct = "naughty";
    
    if ((toyPrice <= budget) && (conduct == "good")) {
        console.log("Allowed to buy");
    }
    
    console.log("Toy price is $" + toyPrice + " and budget is $" + budget);
}
*/
//Instruction 1 Point 8.
function checkCost(){
    var toyPrice, budget, conduct, testScore;
    
    testScore = 100;
    toyPrice = 15.5;
    budget = 16;
    conduct = "naughty";
    
    if ((testScore == 100) || (toyPrice <= budget) && (conduct == "good")) {
        console.log("Allowed to buy");
    }
    
    console.log("Toy price is $" + toyPrice + " and budget is $" + budget);
}
checkCost();