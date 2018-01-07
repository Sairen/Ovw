import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { BoxService } from './box.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  {path:'first', component:FirstComponent},
  {path:'second', component:SecondComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [BoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
