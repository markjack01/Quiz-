
    b();
    console.log(a);
    var a = 'Hello World';


    function b(){
console.log('Called b!')
    }


var a; 
console.log(a);

if (a === undefined){
    console.log('a is undefined!');
}
else {
    console.log('a is defined!');
}

var b;
console.log(a);

if (b === undefined){
    console.log('b is undefined')
}
else {console.log ('b is defined');
}

function b() {
	var myVar;
    console.log(myVar);
}

function a() {
	var myVar = 2;
    console.log(myVar);
	b();
}

var myVar = 1;
console.log(myVar);
// a();
console.log(myVar);

function b(){
    var myVar;
    console.log(myVar);
}

function a(){
    var myVar =2;
    console.log(myVar);
    b();
}
var myVar = 1;
console.log(myVar);
// a();
console.log(myVar);
