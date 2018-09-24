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
var height = 23;

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
    console.log("Value and type do match")
}
else{
    console.log("Value and type do not match")
}


