// To create a component
// Make a file like this
// Add meta data
import {Component} from '@angular/core'
import { CoursesService } from './courses.service';
// Create this Class

// Declarator function
@Component({
    selector:'courses',  //  <courses>
    //template:'<h2> Header Title </h2>'  //Data binding - expression
    //template:'<h2>{{ title }}</h2>'  //Data binding - expression
    //template:'<h2>{{ "Tile: "+title }}</h2>'  //Data binding - expression
    //template:'<h2>{{ getTitle() }}</h2>'  //Data binding - expression
    template:`
    <h2>
        <ul>
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
    </h2>
    `  // Change to back tick - multiline
})
export class CoursesComponent{
    title = "List of courses";
    courses;

    constructor(service: CoursesService){ // New method not tightly coupled // Argumets added dynamically
        // below method in tightly coupled
        // cannot changed at run time
        //let service = new CoursesService();


        // Dependancy injection
        // When CoursesComponent is created it will see for dependencies create them and then injects them
        this.courses = service.getCourses();
    }
}

//Component Creation Steps
/*
Create the component
Register the component in a module - inside declarations array
Finally we used in template of app.component.html
*/

/*
This is Tedious work
Automated step 
ng g c course
All the files are created for us
*/