import { GameItem } from "./gameitem";

export class Hero6
{
constructor(heroName, gameitem1, gameitem2, gameitem3, gameitem4, gameitem5, gameitem6)
{
    this.heroName =heroName;
    this.gameitem1=gameitem1;
    this.gameitem2=gameitem2;
    this.gameitem3=gameitem3;
    this.gameitem4=gameitem4;
    this.gameitem5=gameitem5;
    this.gameitem6=gameitem6;
}
heroName: string;
gameitem1: GameItem;
gameitem2: GameItem;
gameitem3: GameItem;
gameitem4: GameItem;
gameitem5: GameItem;
gameitem6: GameItem;
}