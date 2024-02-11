import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-course-badge',
  templateUrl: './course-badge.component.html',
  styleUrls: ['./course-badge.component.scss']
})
export class CourseBadgeComponent {
     @Input() completed?: string;
}
