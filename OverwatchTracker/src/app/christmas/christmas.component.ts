import { Component, OnInit } from '@angular/core';
import { ChristmasService } from '../christmas.service';
import { CompleteInfoNew } from '../completeinfoNew';
import { GameItem } from '../gameitem';
import { Skin } from '../skin';

@Component({
  selector: 'app-christmas',
  templateUrl: './christmas.component.html',
  styleUrls: ['./christmas.component.css']
})
export class ChristmasComponent implements OnInit {

  theData: CompleteInfoNew;

  constructor(private box: ChristmasService) {
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

