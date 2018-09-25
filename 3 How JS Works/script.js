///////////////////////////////////////
// Lecture: Hoisting

/** FUNCTIONS */
/*calcAge(1990);

//retirement(1990); THIS FAILS

function calcAge(year){ //function declaration
    console.log(2016 - year);
}

var retirement = function(year){ //function expression
    console.log(65 - (2016 - year));
}

retirement(1990);
calcAge(1990);

/** VARIABLES */
/*console.log(age); //appears as undefined - Hoisting global declarations of functions and variables
var age = 23;
console.log(age);

function foo(){ //FOO EXECUTION CONTEXT
    var age = 65;
    console.log(age);
}
foo(); 
console.log(age); //GLOBAL EXECUTION CONTEXT

*/


///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();
function first() {
    var b = 'Hi!';
    second();
    function second() {
        var c = 'Hey!';
        third()
    }
}
function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword


//console.log(this);
/*calcAge(1985);

function calcAge(year){
    console.log(2016 - year);
    console.log(this);
}
*/

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calcAge: function(){
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        /*
        function innerFunction(){
            console.log(this); //WINDOW OBJECT(GLOBAL)
        }
        innerFunction();*/
    }
};

john.calcAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calcAge = john.calcAge;

mike.calcAge();

