export class Skin 
{
    constructor(name, price)
    {
        this.name=name;
        this.price=price;
        this.image= "assets/"+name+".jpg";
        this.isChecked=false;
    }
    
    name: string;
    price: number;
    image:string;
    isChecked: boolean;
    

}