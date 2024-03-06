// document.addEventListener('click',( e )=>{

// }) 

// document.addEventListener('keypress',( e )=>{

// })



interface MyMouseEvent {
    x: number;
    y: number;
}


interface MyKeyBoardEvnet {
    key : string;
}

interface MyEventObjects {
    click : MyMouseEvent;
    keypress: MyKeyBoardEvnet;
}
//각각 마우스와 키보드 이벤트를 할당

function handleEvent<K extends keyof MyEventObjects>(
    eventName:K, 
    callBack: (e:MyEventObjects[keyof MyEventObjects]) => void) 
    {
     if(eventName === 'click'){
        callBack({ x:0 , y:0 });
     }else if(eventName === 'keypress'){
        callBack({key : 'Enter'});
     }
}


handleEvent('click', () => {})