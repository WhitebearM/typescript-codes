//싱글톤이란 여러개의 인스턴스를 만들 수 없게 하는것.
class Singleton {

    static instance: Singleton;

    private constructor(){ // private 를 지정하면 인스터스를 한개도 못 만든다.

    }

    static getInstance(){
        if(this.instance) return this.instance;
        this.instance = new Singleton();
        return this.instance;
    }
}

