import { Component, OnInit } from '@angular/core';
import { WinterService } from './../winter.service';
import { Skin } from '../skin';
import { CompleteInfo } from '../completeinfo';
import { Hero } from '../hero';
import { GameItem } from '../gameitem';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {


  theData: CompleteInfo;
  //goldSkins2016: Skin[];
  //goldSkins2017: Skin[];
  //purpleSkins2016: Skin[];
  //allHeroes: Hero[];
  //price: number;

  constructor(private box: WinterService) {
    this.theData = box.getInfo();
    //this.goldSkins2016 = this.theData.goldSkins2016;
    //this.goldSkins2017 = this.theData.goldSkins2017;
    //this.purpleSkins2016 = this.theData.purpleSkins2016;

    //console.log('это');
    //console.log(this.theData);

    //this.allHeroes = this.theData.allHeroes;
    //this.price = this.theData.price;
    
  }








  ngOnInit() {
    //console.log("i are init");
    //console.log(this.allHeroes);
    //console.log(this.purpleSkins2016);
  }

  doCheck() {

  }

  saveSkin(skin: Skin) {
    console.log(skin.isChecked)
    if (skin.isChecked == true) {
      this.theData.price = this.theData.price - skin.price;
    }
    if (skin.isChecked == false) {
      this.theData.price = this.theData.price + skin.price;
    }
    skin.isChecked = !skin.isChecked;
    this.box.saveInfo();
  }

  saveItem(theitem: GameItem) {
    console.log(theitem.isChecked)
    if (theitem.isChecked == true) {
      this.theData.price = this.theData.price - theitem.price;
    }
    if (theitem.isChecked == false) {
      this.theData.price = this.theData.price + theitem.price;
    }
    theitem.isChecked = !theitem.isChecked;
    this.box.saveInfo();
  }

  reset() {
    console.log("rezet");
    this.box.initSkis();
    this.box.initHeroes();
    window.location.reload(false);
  }














  

}
