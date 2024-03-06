let boolean: boolean;
let falseBoolean: boolean = false;

let number: number;
let integer: number = 6;
let float:number = 1.2345;

let string: string;
let firstName:string = "Bae";

let names1: string[] = ["Bae" , "han"];
let names2: Array<string> = ["Bae" , "han"];

let array1: (string | number)[] = ['Bae' , 1 , 2];
let array2: Array<string | number> = ['Bae' , 1 , 2];

let someArray: any = ['Bae' , 1 , [] , {} , false];

// 읽기 전용 배열 (readonly , ReadonlyArray)

let stringArray: readonly string[] = ['A' , 'B'];
let numberArray: ReadonlyArray<number> = [1, 2];

//읽기 전용
//stringArray.push() 함수 불가능
//numberArray[0] = 3; 불가능

let tuple1: [string,number];
tuple1 = ['a' , 1];
//tuple1 = ['a' , 1 , 2];
//tuple1 = [1,'a'];

let users: [number,string][]

users = [[1,'bae'], [2, 'kang']];

let tuple2: [string,number];
tuple2 = ['a' , 1];
tuple2.push(2);

console.log(tuple2);

let any: any = 'abc';
any = 1;
any = [];

//unknown
let unknown: unknown = false;

//let string1: boolean = unknown;
let string1: boolean = unknown as boolean; // 개발자가 타입스크립트에게 이타입이 맞다고 명시 해주는거임

//Object
let obj: object = {};
let arr: object = [];
//let nul:object = null; //ts파일에서 strict(엄격모드) 활성시 null은 할당 불가능
let date: object = new Date();

//개별적으로 설정함
const obj1:{id:number, title:string} = {
    id: 1,
    title: '타이틀1',
    //discription: 'discription' 지정하지않아서 오류가남
}

//union
let union: (string | number)
union = 'hi';
union = 123;
//union = []; 지정하지 않은 타입 에러

//function
let func1:(arg1: number , arg2: number) => number; // 리턴도 number
func1 = function (x,y) {
    return x * y
}

//매개변수없고 리턴타입없고
let func2:() => void;
func2 = function (){
    console.log('hi');
}

//Null, Undefined  "strictNullChecks":  설정이 ture로 되어있으면 에러남
/* let number1: number = undefined;
let string9: string = null;
let object: {a:10 , b: false} = undefined;
let array: any[] = null;
let undefined1: undefined = null;
let null1: null = undefined;
let void1: void = null; */

let void2: void = undefined;

//void 아무것도 반환하지 않을때 실제로 반환하는것은 undefined
function greeting(): void {
    console.log('hi')
}

const hi:void = greeting();
console.log(hi);

//never 항상 오류를 출력하거나 리턴값을 내보내지않음을 확신할때 사용함
function throwError(): never {
    throw new Error('error');
}

function keepProcessing():never {
    while(true){
        console.log('hi')
    }
}


const never: number [] = [];
never.push(1); //배열이 없으니 never타입으로 됨