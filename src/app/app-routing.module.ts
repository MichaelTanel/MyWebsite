import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { ProjectComponent } from './project/project.component';
import { ExtracurricularsComponent } from './extracurriculars/extracurriculars.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'workexperience', component: WorkComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'education', component: EducationComponent },
  { path: 'extracurriculars', component: ExtracurricularsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
