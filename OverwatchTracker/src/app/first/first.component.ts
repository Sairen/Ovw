import { Component, OnInit } from '@angular/core';
import { BoxService } from './../box.service';
import { Skin } from '../skin';
import { CompleteInfo } from '../completeinfo';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit 
{


  theData: CompleteInfo;
  goldSkins2016:Skin[];
  goldSkins2017:Skin[];
  purpleSkins2016:Skin[];

  constructor( private box:BoxService) 
  { 
    this.theData = box.getInfo();
this.goldSkins2016=this.theData.goldSkins2016;
this.goldSkins2017=this.theData.goldSkins2017;
this.purpleSkins2016=this.theData.purpleSkins2016;
  }

  

  
    



  ngOnInit() 
  {
    console.log("i are init");
    console.log(this.theData);
  }

  doCheck()
  {
   
  }

  save(theitem:Skin)
  {
    theitem.isChecked=!theitem.isChecked;
    this.box.saveInfo();
  }

  reset()
  {
    console.log("rezet");
    this.box.initSkis();
    
  }

}
