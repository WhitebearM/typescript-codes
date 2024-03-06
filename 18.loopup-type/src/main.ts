interface Car{
    id:number;
    name:string;
}

type CarId = number;

interface CarBrand{
    popularity:number;
    logo:string;
    history:number;
}

function updateCarBrand(id: Car['id'], newBrand: CarBrand){

}