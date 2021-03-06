import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WinterService } from './winter.service';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './main-page/main-page.component';
import { ChinaComponent } from './china/china.component';
import { ChinaService } from './china.service';
import { ArchivesComponent } from './archives/archives.component';
import { ArchivesService } from './archives.service';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { AnniversaryService } from './anniversary.service';
import { SummerComponent } from './summer/summer.component';
import { SummerService } from './summer.service';
import { HalloweenComponent } from './halloween/halloween.component';
import { HalloweenService } from './halloween.service';
import { ChristmasComponent } from './christmas/christmas.component';
import { ChristmasService } from './christmas.service';

const appRoutes: Routes = [
  {path:'', component:MainPageComponent},
  {path:'christmas', component:ChristmasComponent},
  {path:'china', component:ChinaComponent},
  {path:'archives', component:ArchivesComponent},
  {path:'anniversary', component:AnniversaryComponent},
  {path:'summer', component:SummerComponent},
  {path:'halloween', component:HalloweenComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ChinaComponent,
    ArchivesComponent,
    AnniversaryComponent,
    SummerComponent,
    HalloweenComponent,
    ChristmasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [WinterService, ChinaService, ArchivesService, AnniversaryService, SummerService, HalloweenService, ChristmasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
