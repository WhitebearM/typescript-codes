type Colors = 'red' | 'green' | 'blue';

type RGB = [red : number , green: number, blue: number];


const palette = {
    red: [255,0,0],
    green: "#00ff00",
    blue: [0,0,255],  //오타 내면 에러남
    platypus: 'false' //Record< Colors,string | RGB > 안에 string 형식이 없으면 에러가 난다. 
} satisfies Record< string ,string | RGB > //하지만 satisfies를 사용 하면 각 함수를 올바르게 사용할 수 있다. key에 대한 형식도 에러를 잡아낼 수 있다.

const redComponent = palette.red.at(0) //0을 넣으면 배열의 0번째 인덱스 값이(255) 리턴

const grrenNormallized = palette.green.toUpperCase(); // satisfies 를 이용 안하면 : Record< Colors,string | RGB > 하였을때 에러가 난다.