import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-course-list-info',
    templateUrl: './course-list-info.component.html',
    styleUrls: ['./course-list-info.component.scss']
})
export class CourseListInfoComponent {
    @Input()
    image?: string;
    @Input()
    bio!: string;

}
