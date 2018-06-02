// To create a component
// Make a file like this
// Add meta data
import {Component} from '@angular/core'
import { CoursesService } from './courses.service';
// Create this Class

// Declarator function
@Component({
    selector:'courses',  //  <courses>
    template:`    
        <input [(ngModel)]="email" (keyup.enter)="onKeyUp()"/>    
    `  // Change to back tick - multiline
})
export class CoursesComponent{
    email="panasala@in.ibm.com";
    onKeyUp(){        
        console.log(this.email);
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