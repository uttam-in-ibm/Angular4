//Variable Declaration in TS
var number = 1;
var count = 2;
/*
ES5 - all browsers support
ES6 - 2015 new browsers
Year convention from here
ES2016
ES2017

let is scoped to latest block
var is scoped to latest function
*/
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}
doSomething();
