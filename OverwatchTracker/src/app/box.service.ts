import { Injectable } from '@angular/core';
import { Skin } from './skin';
import { CompleteInfo } from './completeinfo';
import { Hero } from './hero';
import { GameItem } from './gameitem';

@Injectable()
export class BoxService {

completeInfo = new CompleteInfo();


  
  constructor()
  { 
    let getData = localStorage.getItem("thedata");
    if(getData==null)
    {
      this.initSkis();
      this.initHeroes();
      console.log(this.completeInfo);
      this.saveInfo();
      getData = localStorage.getItem("thedata");
      //оптимизировать
    }
    this.completeInfo = JSON.parse(getData);
  }

  getInfo()
{
  return this.completeInfo;
}


saveInfo()
{  
    let savedSkins = JSON.stringify(this.completeInfo);
    localStorage.setItem("thedata", savedSkins);
}


initSkis()
{
  this.completeInfo = new CompleteInfo();

  this.completeInfo.goldSkins2016.push(new Skin("lskinmei16",111));
  this.completeInfo.goldSkins2016.push(new Skin("lskintor16",222));
  this.completeInfo.goldSkins2016.push(new Skin("lskintra16",333));
  this.completeInfo.goldSkins2016.push(new Skin("lskinzen16",444));
  this.completeInfo.goldSkins2016.push(new Skin("lskinwin16",555));

  this.completeInfo.goldSkins2017.push(new Skin("lskinana17",11));
  this.completeInfo.goldSkins2017.push(new Skin("lskinbas17",11));
  this.completeInfo.goldSkins2017.push(new Skin("lskinhan17",11));
  this.completeInfo.goldSkins2017.push(new Skin("lskinjun17",11));
  this.completeInfo.goldSkins2017.push(new Skin("lskinroa17",11));
  this.completeInfo.goldSkins2017.push(new Skin("lskinsol17",11));
  this.completeInfo.goldSkins2017.push(new Skin("lskinsom17",11)); 

  this.completeInfo.purpleSkins2016.push(new Skin("skinluc16",11));
  this.completeInfo.purpleSkins2016.push(new Skin("skinrea16",11));
  this.completeInfo.purpleSkins2016.push(new Skin("skinsom16",11));
  this.completeInfo.purpleSkins2016.push(new Skin("skinroa16",11));
  this.completeInfo.purpleSkins2016.push(new Skin("skinmcc16",11));
  this.completeInfo.purpleSkins2016.push(new Skin("skinpha16",11));
  this.completeInfo.purpleSkins2016.push(new Skin("skinzar16",11));

  this.saveInfo();
}


initHeroes()
{
this.completeInfo.allHeroes.push(new Hero("Дива", 
new GameItem("Ой, ну не стоило", "divavoice1", 11),
new GameItem("Счастливых праздников!", "divavoice2",11),
new GameItem("Елочная игрушка", "divaspray1",11),
new GameItem("Печенька", "divaspray2",11)));

this.completeInfo.allHeroes.push(new Hero("Ана", 
new GameItem("Я прикрою, не волнуйся", "anavoice1", 11),
new GameItem("Стара я для сюрпризов", "anavoice2", 11),
new GameItem("Елочная игрушка", "anaspray1", 11),
new GameItem("Тепло и уют", "anaspray2", 11)));


this.completeInfo.allHeroes.push(new Hero("Бастион", 
new GameItem("Дуи-дуу-хоу", "basvoice1", 11),
new GameItem("Бу-у ву-у", "basvoice2", 11),
new GameItem("Елочная игрушка", "basspray1", 11),
new GameItem("Празднуем", "basspray2", 11)));


this.completeInfo.allHeroes.push(new Hero("Генджи", 
new GameItem("С рождеством!", "genvoice1", 11),
new GameItem("Считай что тебе повезло", "genvoice2", 11),
new GameItem("Елочная игрушка", "genspray1", 11),
new GameItem("Кадоматсу", "genspray2", 11)));

this.completeInfo.allHeroes.push(new Hero("Ханзо", 
new GameItem("Подарок для тебя", "hanvoice1", 11),
new GameItem("Холоден как лед", "hanvoice2", 11),
new GameItem("Елочная игрушка", "hanspray1", 11),
new GameItem("Кадоматсу", "hanspray2", 11)));

this.completeInfo.allHeroes.push(new Hero("Крысавчик", 
new GameItem("С рождеством!", "junvoice1", 11),
new GameItem("Ну давай, встряхнись уже", "junvoice2", 11),
new GameItem("Елочная игрушка", "junspray1", 11),
new GameItem("Типа зима", "junspray2", 11)));







this.saveInfo();
}





}
