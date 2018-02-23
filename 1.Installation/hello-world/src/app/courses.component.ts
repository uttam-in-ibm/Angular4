// To create a component
// Make a file like this
// Add meta data
import {Component} from '@angular/core'
// Create this Class

// Declarator function
@Component({
    selector:'courses',  //  <courses>
    //template:'<h2> Header Title </h2>'  //Data binding - expression
    //template:'<h2>{{ title }}</h2>'  //Data binding - expression
    //template:'<h2>{{ "Tile: "+title }}</h2>'  //Data binding - expression
    template:'<h2>{{ getTitle() }}</h2>'  //Data binding - expression
})
export class CoursesComponent{
    title = "List of courses";
    getTitle(){
        return this.title;
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