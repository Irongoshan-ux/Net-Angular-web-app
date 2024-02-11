import { Component, Input } from '@angular/core';
import { Course } from 'src/app/interfaces/course';

@Component({
    selector: 'app-course-list-header',
    templateUrl: './course-list-header.component.html',
    styleUrls: ['./course-list-header.component.scss']
})
export class CourseListHeaderComponent {
    @Input()
    collectionTitle?: string;
    @Input()
    collectionName?: string;
    @Input() showMore = true;
    @Input() collectionCourses?: Course[];
}
