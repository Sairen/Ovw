import { Component, OnInit } from '@angular/core';
import { HalloweenService } from '../halloween.service';
import { CompleteInfo } from '../completeinfo';
import { GameItem } from '../gameitem';
import { Skin } from '../skin';

@Component({
  selector: 'app-halloween',
  templateUrl: './halloween.component.html',
  styleUrls: ['./halloween.component.css']
})
export class HalloweenComponent implements OnInit {

  theData: CompleteInfo;

  constructor(private box: HalloweenService) {
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
