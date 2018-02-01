import { Skin } from "./skin";
import { Hero } from "./hero";

export class CompleteInfo 
{
    constructor()
    {
        this.goldSkins2016=new Array<Skin>();
        this.goldSkins2017=new Array<Skin>();
        this.purpleSkins2016=new Array<Skin>();
        this.allHeroes=new Array<Hero>();

    }
    
   public goldSkins2016:Array<Skin>;
   public goldSkins2017:Array<Skin>;
   public purpleSkins2016:Array<Skin>;
   public allHeroes:Array<Hero>;

    

}