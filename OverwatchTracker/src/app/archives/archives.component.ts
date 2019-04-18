import { Component, OnInit } from '@angular/core';
import { Skin } from '../skin';
import { GameItem } from '../gameitem';
import { ArchivesService } from '../archives.service';
import { CompleteInfoNew } from '../completeinfoNew';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {

  theData: CompleteInfoNew;

  constructor(private box: ArchivesService) {
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