import { GameItem } from "./gameitem";

export class Hero
{
constructor(heroName, voiceline1, voiceline2, spray1, spray2)
{
    this.heroName =heroName;
    this.voiceline1=voiceline1;
    this.voiceline2=voiceline2;
    this.spray1=spray1;
    this.spray2=spray2;
}
heroName: string;
voiceline1: GameItem;
voiceline2: GameItem;
spray1: GameItem;
spray2: GameItem;
}