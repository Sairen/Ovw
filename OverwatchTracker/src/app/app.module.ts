import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { BoxService } from './box.service';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './main-page/main-page.component';
import { ChinaComponent } from './china/china.component';
import { ChinaService } from './china.service';

const appRoutes: Routes = [
  {path:'first', component:FirstComponent},
  {path:'second', component:SecondComponent},
  {path:'main', component:MainPageComponent},
  {path:'china', component:ChinaComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    MainPageComponent,
    ChinaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [BoxService,ChinaService],
  //убрать бокс сервис отовсюду
  bootstrap: [AppComponent]
})
export class AppModule { }
