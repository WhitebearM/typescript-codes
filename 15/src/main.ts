// type AType<T> = T extends infer R ? R : null;

// const a: AType<number> = 1;

// type BType<T> = T extends {a: infer A; b: 1} ? A :any;

// type inferred = BType<{a: 'hi' , b: 1}>;

// type CType<T> = T extends {a: infer A; b: infer B} ? A & B : any;

// type Inferred2 = CType<{a: {someAProps: 1; b: {someBProps:2}}}>