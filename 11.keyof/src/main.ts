interface IUser{
    name:string;
    age:number;
    address:string;
}

// type UserKeys = keyof IUser
// "name" | "age" | "address" 형식으로 반환

const user = {
    name: "bae",
    age:20,
    address: "d"
}


type UserKeys = keyof typeof user 

enum UserRole {
    admin,
    manager
}

//enum을 유니온 타입으로 반환
type UserRoleKeys = keyof typeof UserRole