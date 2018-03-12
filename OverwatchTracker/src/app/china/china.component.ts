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

  constructor(private box: ChinaService) {
    this.theData = box.getInfo();    
  }

  ngOnInit() {
  } 

  saveSkin(skin: Skin) {
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
