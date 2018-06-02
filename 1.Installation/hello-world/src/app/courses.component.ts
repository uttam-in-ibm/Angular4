
import {Component} from '@angular/core'
import { CoursesService } from './courses.service';

@Component({
    selector:'courses',
    template:`    
        {{courses.title | uppercase | lowercase}} <br/>
        {{courses.students | number }} <br/>
        {{courses.rating | number:'2.1-1'}} <br/>
        {{courses.price | currency:'AUD':true:'3.2-2'}} <br/>
        {{courses.releaseDate | date:'shortDate'}} <br/>
    `  
})
export class CoursesComponent{
    courses = {
        title : 'The title',
        students : 4.9745,
        rating: 30123,
        price: 123456,
        releaseDate: new Date(2016,3,1)
    }
}

