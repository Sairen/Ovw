import { Component, OnInit } from '@angular/core';
import { BoxService } from './../box.service';
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
  goldSkins2016: Skin[];
  goldSkins2017: Skin[];
  purpleSkins2016: Skin[];
  allHeroes: Hero[];

  constructor(private box: BoxService) {
    this.theData = box.getInfo();
    this.goldSkins2016 = this.theData.goldSkins2016;
    this.goldSkins2017 = this.theData.goldSkins2017;
    this.purpleSkins2016 = this.theData.purpleSkins2016;

    // вот тут ты присваиваешь массив. Почему не проверить что ты туда запихиваешь???
    //console.log('это');
    //console.log(this.theData);

    this.allHeroes = this.theData.allHeroes;
  }








  ngOnInit() {
    //console.log("i are init");
    //console.log(this.allHeroes);
    //console.log(this.purpleSkins2016);
  }

  doCheck() {

  }

  saveSkin(skin: Skin) {
    skin.isChecked = !skin.isChecked;
    this.box.saveInfo();
  }

  saveItem(theitem: GameItem) {
    theitem.isChecked = !theitem.isChecked;
    this.box.saveInfo();
  }

  reset() {
    console.log("rezet");
    this.box.initSkis();
    this.box.initHeroes();
  }

}
