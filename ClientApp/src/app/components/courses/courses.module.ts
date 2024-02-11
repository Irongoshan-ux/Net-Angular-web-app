import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CollectionPageComponent } from '../courses/collection-page/collection-page.component';
import { CollectionTitleComponent } from '../courses/collection-page/collection-title/collection-title.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseItemComponent } from './course-list/course-item/course-item.component';
import { CourseBadgeComponent } from './course-list/course-item/course-badge/course-badge.component';
import { CourseListInfoComponent } from './course-list/course-list-info/course-list-info.component';
import { CourseListHeaderComponent } from './course-list/course-list-header/course-list-header.component';
import { CourseInfoComponent } from './course-list/course-item/course-info/course-info.component';

@NgModule({
    declarations: [
        CollectionPageComponent,
        CollectionTitleComponent,
        CourseListComponent,
        CourseItemComponent,
        CourseBadgeComponent,
        CourseListInfoComponent,
        CourseListHeaderComponent,
        CourseInfoComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: CollectionPageComponent
            }
        ]),
    ],
    exports: [],
})
export class CoursesModule { }
