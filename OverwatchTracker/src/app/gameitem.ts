export class GameItem
{
constructor(title, id, price)
{
    this.title =title;
    this.id=id;
    this.price=price;
    this.isChecked=false;
}

title: string;
id:string;
price: number;
isChecked: boolean;
}