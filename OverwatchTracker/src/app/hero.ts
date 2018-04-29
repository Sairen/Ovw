import { GameItem } from "./gameitem";

export class Hero
{
constructor(heroName, gameitem1, gameitem2, gameitem3, gameitem4)
{
    this.heroName =heroName;
    this.gameitem1=gameitem1;
    this.gameitem2=gameitem2;
    this.gameitem3=gameitem3;
    this.gameitem4=gameitem4;
}
heroName: string;
gameitem1: GameItem;
gameitem2: GameItem;
gameitem3: GameItem;
gameitem4: GameItem;
}