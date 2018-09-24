/*************CODING CHALLENGE 1********************/

/*var mark = {
    weight : prompt("What is Marks height?"),
    height : prompt("What is Marks Weight?")
}
var john = {
    weight : prompt("What is Johns height?"),
    height : prompt("What is Johns Weight?")
}

var markBMI = mark.weight / (mark.height*mark.height);
var johnBMI = john.weight / (john.height*john.height);

var higher = markBMI > johnBMI;

console.log("Is Mark\'s BMI higher than John\'s?"+ higher);
console.log(typeof higher); // don't use typeof a lot so added here*/

//S2L15// IF ELSE
/*var firstName = 'John';
var civilStatus = 'single';

if(civilStatus === 'married'){
    console.log(firstName + ' is married!');
} else if(civilStatus === ''){
    console.log(firstName + '\'s civil status is unknown');
} else{
    console.log(firstName + ' is single!');
}*/

//S2L16// TERNARY || SWITCH
/*var firstName = 'John';
var age = 18;

age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age>= 18? 'beer' : 'juice';
console.log(drink);

var job = 'instructor';

switch(job){
    case 'teacher': 
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' has no job.');
}

switch(true){
    case age < 13:
        console.log(firstName + ' is a child.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young adult.');
        break;
    default:
        console.log(firstName + ' is an adult.');
}*/

//S2L17// Truthy && Falsy
//Falsy vals: undefined, null, 0, '', NaN
//Truthy values: NOT falsy vals
/*var height = 23;

if(height || height === 0){
    console.log('variable is defined');
} else{
    console.log('variable is NOT defined');
}

//EQUALITY OPS
if(height == '23'){
    console.log('The == op does type coercion!');
}
if(height === '23'){
    console.log("Value and type do match");
}
else{
    console.log("Value and type do not match");
}*/

/*************CODING CHALLENGE 2********************/

/*var teamJohn = [97, 134, 105];
var teamMike = [97, 134, 105];
var teamMary = [97, 134, 105];

var avgJohn = 0, avgMike = 0, avgMary = 0;

for(score in teamJohn){
    avgJohn+= teamJohn[score];
}
for(score in teamMike){
    avgMike+= teamMike[score];
}
for(score in teamMary){
    avgMary+= teamMary[score];
}

avgJohn = avgJohn/teamJohn.length;
avgMike = avgMike/teamMike.length;
avgMary = avgMary/teamMary.length;

console.log('John\'s average is ' + avgJohn);
console.log('Mike\'s average is ' + avgMike);
console.log('Mary\'s average is ' + avgMary);

switch(true){
    case (avgJohn > avgMike && avgJohn > avgMary):
        console.log("John is the winner with an average score of " + avgJohn);
        break;
    case (avgMike > avgJohn && avgMike > avgMary):
        console.log("Mike is the winner with an average score of " + avgMike);
        break;
    case (avgMary > avgJohn && avgMary > avgMike):
        console.log("Mary is the winner with an average score of " + avgMary);
        break;
    case (avgJohn > avgMary && avgJohn == avgMike):
        console.log("John and Mike are tied for the highest score of " + avgJohn);
        break;
    case (avgMike > avgJohn && avgMike == avgMary):
        console.log("Mike and Mary are tied for the highest score of " + avgMike);
        break;
    case (avgMary > avgMike && avgMary == avgJohn):
        console.log("Mary and John are tied for the highest score of " + avgMary);
        break;
    default:
        console.log("Mary and John and Mike are tied for the highest score of " + avgMary);
    
}*/

//S2L20// Functions

/*function calculateAge(birthYear){
    return 2018 - birthYear;
}

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0){
        console.log(firstName + ' retires in ' + retirement + ' years');
    }else{
        console.log(firstName + ' is already retired');
    }
    
}

//var age = calculateAge(1990);
yearsUntilRetirement(1990, 'Aaron');
yearsUntilRetirement(1920, 'Aaron');*/

//S2L21// Function Statements and Expressions

//Func Expression
/*var whatDoYouDo = function(job, firstName){
    switch(job){
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives as a job.';
        case 'designer':
            return firstName + ' designs great websites.';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'Aaron'));*/

//S2L22// Arrays

/*var names = ["Aaron", "Mark", "Sharon"];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names[0]);
console.log(names.length);

names[2] = "Stacie";
names[5] = "Mary";
names[names.length] = "Stephen";
console.log(names);

//Different data types

var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue'); // add to end
john.unshift('Mr'); // add to front
john.pop(); // removes last elem
john.shift(); // removes first elem
console.log(john);

console.log(john.indexOf(1990));

var isDesign = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
console.log(isDesign);
*/

/*************CODING CHALLENGE 3********************/

/*var billsBeforeTip = [124, 48, 268];

function calcTip(bill){
    switch(true){
        case bill<50:
            return bill*0.2;
        case bill>=50 && bill <=200:
            return bill*0.15;
        case bill > 200:
            return bill*0.10;
    }
}

function calcFinalAmount(tip, bill){
    return tip + bill;
}

var tips = [];
var fullPrice = [];
for(bill in billsBeforeTip){
    tips.push(calcTip(billsBeforeTip[bill]));
    fullPrice.push(calcFinalAmount(tips[bill], billsBeforeTip[bill]));
}

//OR
//var tips2 = [ calcTip(billsBeforeTip[0]), calcTip(billsBeforeTip[1]), calcTip(billsBeforeTip[2]) ];
//var fullPrice2 = [ billsBeforeTip[0] + tips2[0], billsBeforeTip[1] + tips2[1], billsBeforeTip[2] + tips2[2] ];

console.log("BILLS");
console.log(billsBeforeTip);
console.log("TIPS");
console.log(tips);
console.log("BILL + TIP");
console.log(fullPrice);

*/

//S2L25// Objects and properties



