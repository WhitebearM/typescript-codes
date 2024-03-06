// type Properties = 'propA' | 'propB';

// type MyNewType = myMappedType<{a: 'a', b: 'b'}>

// type myMappedType<T> = {
//     [P in keyof T] : T[P] | null;
// }

// //pick, Record

// type Pick1<T, Properties extends keyof T> = {
//     [P in Properties]: T[P];
// }

// type MyNewType2 = Pick1<{a:'a', b:'b', c: 'c'}, 'a'>


//Record
type Record1<K extends keyof any, T > = {
    [P in K]:T
} 

const myNewRecord: Record1<string, number> = {};
myNewRecord.a = 10;
myNewRecord.b = 10;