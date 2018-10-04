// Function constructor
/*var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    
}

Person.prototype.calculateAge =
function(){
        console.log(2018 - this.yearOfBirth);
};
Person.prototype.lastName = 'Smith';

var john= new Person("john", 1990, "teacher");
var jane = new Person("jane", 1969, "designer");
var mark= new Person("mark", 1948, "retired");

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(mark.lastName);
console.info(mark);

var x = [1,2,3];
console.info(x);*/

//Object.create
/*var personProto = {
    calculateAge: function(){
        console.log(2016 - this.yearOfBirth);
    }
}

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane' },
    yearOfBirth : { value: 1969 },
    job: { value: 'designer' }
});*/

//Primitives vs Objects
