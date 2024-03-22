import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DistrictcompComponent } from './districtcomp/districtcomp.component';
import { UploadfileComponent } from './components/uploadfile/uploadfile.component';
import { AnalysisComponentComponent } from './components/analysis-component/analysis-component.component';




@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    DashboardComponent,
    DistrictcompComponent,
    UploadfileComponent,
    AnalysisComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
