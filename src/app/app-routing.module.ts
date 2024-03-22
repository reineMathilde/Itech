import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DistrictcompComponent } from './districtcomp/districtcomp.component';
import { UploadfileComponent } from './components/uploadfile/uploadfile.component';
import { AnalysisComponentComponent } from './components/analysis-component/analysis-component.component';

const routes: Routes = [
  {path: "",component:DashboardComponent},
  {path: "district",component:DistrictcompComponent},
  {path: "upload",component:UploadfileComponent},
  {path: "analysis",component:AnalysisComponentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
