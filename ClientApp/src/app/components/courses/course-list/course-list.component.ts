import {Component, Input} from '@angular/core';
import { Collection } from 'src/app/interfaces/collection';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent {
    @Input()
  collection!: Collection;
    @Input() showMore: boolean = true;
}
