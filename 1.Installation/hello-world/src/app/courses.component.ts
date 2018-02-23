// To create a component
// Make a file like this
// Add meta data
import {Component} from '@angular/core'
// Create this Class

// Declarator function
@Component({
    selector:'courses',  //  <courses>
    template:'<h2>Courses</h2>'
})
export class CoursesComponent{
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