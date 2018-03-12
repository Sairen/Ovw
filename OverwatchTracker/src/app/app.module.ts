import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { WinterService } from './winter.service';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './main-page/main-page.component';
import { ChinaComponent } from './china/china.component';
import { ChinaService } from './china.service';
import { UprisingComponent } from './uprising/uprising.component';
import { UprisingService } from './uprising.service';
import { WinterComponent } from './winter/winter.component';

const appRoutes: Routes = [
  {path:'first', component:FirstComponent},
  {path:'second', component:SecondComponent},
  {path:'main', component:MainPageComponent},
  {path:'winter', component:WinterComponent},
  {path:'china', component:ChinaComponent},
  {path:'uprising', component:UprisingComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    MainPageComponent,
    ChinaComponent,
    UprisingComponent,
    WinterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [WinterService,ChinaService, UprisingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
