// JavaScript is synchronous. 
// 자바스크립트는 동기적인 아이다. 
// 하나하나 동기적으로 실행된다는 말! 

// Execute the code block by order after hoisting.
// hoisting? var, function declaration 선언들이 가장 위로 올라가는 것 

console.log('1');
setTimeout(() => console.log('2'),1000);
// 콜백함수 : 내가 지정해놓은 함수를 나중에 너가 불러줘! 
console.log('3');


// 1. Synchronous Callback
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));

// 2. Asynchronous Callback

function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('world'),2000);

// 순서대로 생각해보면, function 선언은 전부 위쪽으로 간다.
// console.log('1'); //동기 (처리)
// setTimeout(() => console.log('2'),1000); //비동기 (요청해놓고)
// console.log('3'); //동기 (처리)
// printImmediately(() => console.log('hello')); //동기 (처리) 
// printWithDelay(() => console.log('world'),2000); //비동기 (요청) 

