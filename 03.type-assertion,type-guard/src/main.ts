const bodyElement = document.querySelector('body') as HTMLBodyElement;
bodyElement.innerText = "Hello";

// !연산자
const bodyElement1 = document.querySelector('body') as HTMLBodyElement;
bodyElement1!.innerText = "Hello";

// guard
const bodyElement2 = document.querySelector('body') as HTMLBodyElement;
if(bodyElement2){
    bodyElement2.innerText = "Hello";
}

//잘못된 예시
function func(arg: string | null){
    if(arg){
        return arg.toLocaleLowerCase();
    }
}

func('hello');
func(null);