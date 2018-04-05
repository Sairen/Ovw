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

const appRoutes: Routes = [
  {path:'main', component:MainPageComponent},
  {path:'winter', component:WinterComponent},
  {path:'china', component:ChinaComponent},
  {path:'archives', component:ArchivesComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ChinaComponent,
    ArchivesComponent,
    WinterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot()
  ],
  providers: [WinterService, ChinaService, ArchivesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
