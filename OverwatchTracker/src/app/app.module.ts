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
import { WinterComponent } from './winter/winter.component';
import { AnniversaryComponent } from './anniversary/anniversary.component';
import { AnniversaryService } from './anniversary.service';

const appRoutes: Routes = [
  {path:'', component:MainPageComponent},
  {path:'winter', component:WinterComponent},
  {path:'china', component:ChinaComponent},
  {path:'archives', component:ArchivesComponent},
  {path:'anniversary', component:AnniversaryComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ChinaComponent,
    ArchivesComponent,
    WinterComponent,
    AnniversaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [WinterService, ChinaService, ArchivesService, AnniversaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
