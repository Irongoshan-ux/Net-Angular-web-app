import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-course-info',
    templateUrl: './course-info.component.html',
    styleUrls: ['./course-info.component.scss'],
})
export class CourseInfoComponent {
    @Input()
    courseHeader!: string;
    @Input()
    courseSessions!: number;
    @Input()
    completedSessions!: number;
    @Input()
    signFlag!: boolean;
    @Input()
    rate!: number;
}
