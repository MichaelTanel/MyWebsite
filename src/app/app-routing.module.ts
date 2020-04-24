import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EducationComponent } from './components/education/education.component';
import { HomeComponent } from './components/home/home.component';
import { WorkComponent } from './components/work/work.component';
import { ProjectComponent } from './components/project/project.component';
import { ExtracurricularsComponent } from './components/extracurriculars/extracurriculars.component';

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
