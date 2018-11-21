import { Skin } from "./skin";
import { Hero } from "./hero";
import { GameItem } from "./gameitem";

export class CompleteInfoNew 
{
    constructor()
    {
        this.goldSkins2016=new Array<Skin>();
        this.goldSkins2017=new Array<Skin>();
        this.goldSkins2018=new Array<Skin>();
        this.purpleSkins2016=new Array<Skin>();
        this.purpleSkins2017=new Array<Skin>();
        this.purpleSkins2018=new Array<Skin>();
        this.allHeroesPoseVoice=new Array<Hero>();
        this.allHeroesSprayPotg=new Array<Hero>();
        this.allIcons = new Array<GameItem>();
        this.allSprays = new Array<GameItem>();
        this.allPoses = new Array<GameItem>();
        this.allEmotes = new Array<GameItem>();
        this.allMoments = new Array<GameItem>();

        this.price = 0;

    }
    
   public goldSkins2016:Array<Skin>;
   public goldSkins2017:Array<Skin>;
   public goldSkins2018:Array<Skin>;
   public purpleSkins2016:Array<Skin>;
   public purpleSkins2017:Array<Skin>;
   public purpleSkins2018:Array<Skin>;

   public allHeroesPoseVoice:Array<Hero>;
   public allHeroesSprayPotg:Array<Hero>;
   
   public allIcons:Array<GameItem>;
   public allSprays:Array<GameItem>;
   public allPoses:Array<GameItem>;
   public allEmotes:Array<GameItem>;
   public allMoments:Array<GameItem>;
   
   public price:number;

    

}