// interface getLikeNumber {
//     (like: number):number;
// }

// interface Post {
//     id: number;
//     title:string;
//     getLikeNumber:(like:number) => number
// }

// const post1 = {
//     id: 1,
//     title: 'post 1',
//     getLikeNumber(like: number){
//         return like
//     }
// }

// post1.getLikeNumber(1);

interface Post{
    [key:string]:unknown
    id: number,
    title: string
}

const post1: Post = {
    id: 1,
    title : 'post 1'
}

post1['description'] = 'description 1';
post1['pages'] = 300;


interface Names {
    [item: number]:string
}

const userNames = ['Bae' , 'Kang', 'Lee'];
// userNames[0] === 'Bae'