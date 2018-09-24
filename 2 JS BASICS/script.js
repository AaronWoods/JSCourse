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

//Obj literal
/*var personJohn = {
    fName: 'John',
    lName: 'Smith',
    birthYear: 1990,
    family: [
        'Jane', 'Mark', 'Bob', 'Emily'
    ],
    job: 'teacher',
    isMarried: false
};

console.log(personJohn);
console.log(personJohn.fName);
console.log(personJohn['lName']);
var x = 'birthYear';
console.log(personJohn[x]);

personJohn.job = 'designer';
personJohn['isMarried'] = true;
console.log(personJohn);

//new Obj
var personJane = new Object();
personJane.firstName = 'Jane';
personJane.birthYear = 1969;
personJane['lastName'] = 'Smith';
console.log(personJane);
*/

//S2L26 Objects and Methods
/*var personJohn = {
    fName: 'John',
    lName: 'Smith',
    birthYear: 1992,
    family: [
        'Jane', 'Mark', 'Bob', 'Emily'
    ],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        this.age = 2018 - this.birthYear;
    }
};
personJohn.calcAge();
console.log(personJohn);
*/

/*************CODING CHALLENGE 4********************/

/*var personMark = {
    name: 'Mark Howard',
    mass: 70,
    height: 1.5,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

var personJohn = {
    name: 'John Smith',
    mass: 80,
    height: 1.25,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
}

personMark.calcBMI() > personJohn.calcBMI() ? console.log("Marks BMI is higher") : console.log("Johns BMI is higher");
personJohn.calcBMI();
personMark.calcBMI();
console.log(personJohn, personMark);
*/

//S2L29// Loops and Iteration
/*
//For
for( var i = 1; i <= 20; i+=2){
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false];
for(var j = 0; j < john.length; j++){
    console.log(john[j]);
}

//While
var i = 0;
while(i < john.length){
    console.log(john[i]);
    i++;
}

//Only Strings
for(var j = 0; j < john.length; j++){
    if(typeof john[j] !== 'string') continue;
    console.log(john[j]);
}

//Work backwards
for(var i = john.length-1; i>=0; i--){
    console.log(john[i]);
}

*/


/*************CODING CHALLENGE 5********************/
/*
var john = {
    name: "John Smith",
    tips: [],
    billIncTip: [],
    bills: [124, 48, 268, 180, 42],
    calcTips: function(){
        for(var i = 0; i< this.bills.length; i++){
            switch(true){
                case this.bills[i] < 50:
                    this.tips.push(this.bills[i]*0.2);
                    this.billIncTip.push(this.bills[i]+this.tips[i])
                    break;
                case this.bills[i] >=50 && this.bills[i] <=200:
                    this.tips.push(this.bills[i]*0.15);
                    this.billIncTip.push(this.bills[i]+this.tips[i])
                    break;
                case this.bills[i] > 200:
                    this.tips.push(this.bills[i]*0.1);
                    this.billIncTip.push(this.bills[i]+this.tips[i])
                    break;
            }
        }
    }
}

john.calcTips();


var mark = {
    name: "Mark Foley",
    tips: [],
    billIncTip: [],
    bills: [77, 375, 110, 45],
    calcTips: function(){
        for(var i = 0; i< this.bills.length; i++){
            switch(true){
                case this.bills[i] < 100:
                    this.tips.push(this.bills[i]*0.2);
                    this.billIncTip.push(this.bills[i]+this.tips[i]);
                    break;
                case this.bills[i] >=100 && this.bills[i] <=300:
                    this.tips.push(this.bills[i]*0.10);
                    this.billIncTip.push(this.bills[i]+this.tips[i]);
                    break;
                case this.bills[i] > 300:
                    this.tips.push(this.bills[i]*0.25);
                    this.billIncTip.push(this.bills[i]+this.tips[i]);
                    break;
            }
        }
    }
}

mark.calcTips();

function calcAvgTips(tips){
    var sum = 0;
    for(var i = 0; i < tips.length; i++){
        sum+=tips[i];
    }
    return sum/tips.length;
}

john.average = calcAvgTips(john.tips);
mark.average = calcAvgTips(mark.tips);

if(john.average > mark.average){
    console.log("John tipped higher");
}else if(mark.average > john.average){
    console.log("Mark tipped higher");
}else{
    console.log("Mark tipped the same as John");
}

*/