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

    // npm install bootstrap --save
    template:`
        <input [value]="email" (keyup.enter)="email=$event.target.value;onKeyUp()"/>
    
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