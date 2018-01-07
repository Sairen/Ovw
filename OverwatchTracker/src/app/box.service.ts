import { Injectable } from '@angular/core';
import { Skin } from './skin';
import { CompleteInfo } from './completeinfo';

@Injectable()
export class BoxService {

completeInfo = new CompleteInfo();


  
  constructor()
  { 
    let getData = localStorage.getItem("thedata");
    if(getData==null)
    {
      this.initSkis();
      this.saveInfo();
      getData = localStorage.getItem("thedata");
      //оптимизировать
    }
    this.completeInfo = JSON.parse(getData);
  }



initSkis()
{
  this.completeInfo = new CompleteInfo();

  this.completeInfo.goldSkins2016.push(new Skin("lskinmei",111));
  this.completeInfo.goldSkins2016.push(new Skin("lskintor",222));
  this.completeInfo.goldSkins2016.push(new Skin("lskintra",333));
  this.completeInfo.goldSkins2016.push(new Skin("lskinzen",444));
  this.completeInfo.goldSkins2016.push(new Skin("lskinwin",555));

  this.completeInfo.goldSkins2017.push(new Skin("lskinana17",11));
  this.completeInfo.goldSkins2017.push(new Skin("lskinbas17",11));
  this.completeInfo.goldSkins2017.push(new Skin("lskinhan17",11));
  this.completeInfo.goldSkins2017.push(new Skin("lskinjun17",11));
  this.completeInfo.goldSkins2017.push(new Skin("lskinroa17",11));
  this.completeInfo.goldSkins2017.push(new Skin("lskinsol17",11));
  this.completeInfo.goldSkins2017.push(new Skin("lskinsom17",11)); 

  this.saveInfo();
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

}
