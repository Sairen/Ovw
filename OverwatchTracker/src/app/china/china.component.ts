import { Component, OnInit } from '@angular/core';
import { Skin } from '../skin';
import { CompleteInfo } from '../completeinfo';
import { Hero } from '../hero';
import { GameItem } from '../gameitem';
import { ChinaService } from '../china.service';

@Component({
  selector: 'app-china',
  templateUrl: './china.component.html',
  styleUrls: ['./china.component.css']
})
export class ChinaComponent implements OnInit {


  theData: CompleteInfo;
  //goldSkins2016: Skin[];
  //goldSkins2017: Skin[];
  //purpleSkins2016: Skin[];
  //allHeroes: Hero[];
  //price: number;

  constructor(private box: ChinaService) {
    this.theData = box.getInfo();
    //this.goldSkins2016 = this.theData.goldSkins2016;
    //this.goldSkins2017 = this.theData.goldSkins2017;
    //this.purpleSkins2016 = this.theData.purpleSkins2016;

    console.log('это');
    console.log(this.theData);

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
    console.log(skin.isChecked)//убрать это?
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
    console.log(theitem.isChecked)//убрать это?
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
    this.box.initEveryting();
    window.location.reload(false);
  }














  

}
