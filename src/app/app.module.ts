import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { WorkComponent } from './work/work.component';
import { ExtracurricularsComponent } from './extracurriculars/extracurriculars.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    EducationComponent,
    HomeComponent,
    ProjectComponent,
    WorkComponent,
    ExtracurricularsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
