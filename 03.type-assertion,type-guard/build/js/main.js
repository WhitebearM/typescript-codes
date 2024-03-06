"use strict";
const bodyElement = document.querySelector('body');
bodyElement.innerText = "Hello";
// !연산자
const bodyElement1 = document.querySelector('body');
bodyElement1.innerText = "Hello";
// guard
const bodyElement2 = document.querySelector('body');
if (bodyElement2) {
    bodyElement2.innerText = "Hello";
}
//잘못된 예시
function func(arg) {
    if (arg) {
        return arg.toLocaleLowerCase();
    }
}
func('hello');
func(null);
