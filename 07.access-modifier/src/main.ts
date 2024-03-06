class Post {
    private id: number = 0;
    protected title: string = "";
    constructor(id:number , title:string){
        this.id = id;
        this.title = title;
    }

    getPost(){
        return `postId ${this.id}, postTitle: ${this.title}`;

    }

}

class PostB extends Post{
    getPost(){
        return this.title; // 하위 클래스에서 선언 했기 때문에 에러가 없다.
    }
}

const post: Post = new Post(1, "title1");