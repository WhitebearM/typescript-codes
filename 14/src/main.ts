// // type SomeType = T extends U ? X : y;
// type SomeType = number;
// type ConditionalType = SomeType extends string ? string : null;

// function fn1<T>(value: T){
//     const fn2 = (arg: T extends boolean ? 'A' : 'B') => {};
//     return fn2;
// }

// const result = fn1(true);

// type StringOrNot<T> = T extends string ? string : never;

// type AUnion = string | boolean | never;

// const A: StringOrNot<string> = 'string';

//type Exclude<T,U> = T extends U ? naver : T;
type ResultType = Exclude<'a' | 'b' | 'c' , 'a' | 'b'>;
/* 
    'a' extends 'a' | 'b' ? never : T ===> never
    'b' extends 'a' | 'b' ? never : T ===> never
    'c' extends 'a' | 'b' ? never : T ===> c
*/