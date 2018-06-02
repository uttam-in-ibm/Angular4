import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';

// Add your new component here in declarations
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent 
  ],
  imports: [
    BrowserModule,
    FormsModule    
  ],
  providers: [
    CoursesService  //Dependency injection creates single instance of this 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
