document.getElementById('demo').innerHTML = 'This is your first answer'


var a=3;
var b=2;
var c= a * b;
console.log(a*b);


var a = 6;
var b = 2;
var c = a - b;
console.log(a-b);


function myFunction(p1,p2){
   return p1*p1;
}
console.log(myFunction(2,1))

var res = myFunction(2,1);

console.log(res)


var person = {
        Name: "asif",
    Address: "Hattigauda",
    Age: 32,
    Profession: "SDW",
getInfo: function (){
    return this.Name  + " "+ this.Address;
}
};

var Person = function(name, add) {
    this.Name = name;
    this.Address = add;
}

var p = new Person('Pomba', 'Kusuni')

console.log('p', p)