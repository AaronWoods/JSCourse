/*************CODING CHALLENGE 1********************/

var mark = {
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

console.log("Is Marks BMI higher than Johns?"+ higher);
console.log(typeof higher); // don't use typeof a lot so added here
