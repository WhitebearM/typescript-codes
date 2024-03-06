// //Partil

// interface Address {
//     email: string;
//     address: string;
// }

// const me:Partial<Address> = {};
// //아무것도 없더라고 객체라는게 포함이 되기 때문에 가능하다.
// const you:Partial<Address> = {email:'bhs964@abc.com'};
// //Address 안에 사용되는것이 사용 하고 있으면 된다.
// const all:Address = {email:'bhs964@abc.com', address: 'sol'};


// //pick

// interface Todo{
//     title: string;
//     decription:string;
//     completed: boolean;
// }

// //pick을 이용해 몇개의 속성을 pick해 새롭게 정의 해 주는것
// type TodoPreview = Pick<Todo, "title" | "completed">;

// //Pick 을 이용해 특정 속성만 사용 하는것
// const todo: TodoPreview = {
//     title: "Clean Room",
//     completed: false
// }


//Omit (pick 과 정반대 특정 속성을 제거)

interface Todo{
    title:string;
    decription: string;
    completed:boolean;
    createdAt: number;
}
//decription만 필요없으니 Omit에 넣어준다.
type TodoPreview = Omit<Todo, "decription">;

const todo = {
    title: "clean Room",
    completed:false,
    createdAt: 123123
}

// //Required
// type User = {
//     firstName:string,
//     lastName?:string
// }

// //여기선 lastName은 필수가 아니지만
// let firstUser:User = {
//     firstName: "Bae"
// }

// //Requeired로 명시하면 필수요소가 된다.
// let secondUser: Required<User> = {
//     firstName: "bae"
// }

//Record
interface CatInfo {
    age: number;
    breed: string;
}

type CatName = "miffy" | "boris" | "mordred";

const cats: Record<CatName, CatInfo> = {
    miffy: {age:10 , breed: 'persian'},
    boris: {age: 5, breed: 'maine coon'},
    mordred:{age: 16, breed:"british shorthair"}
}


//ReturnType

type T0 = ReturnType<()=> string>
type T1 = ReturnType<(s: string)=> void>

function fn(str: string) {
    return str;
}

const a: ReturnType<typeof fn> = 'Hello';
//const b: ReturnType<typeof fn> = true;