import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./components/courses/courses.module').then(m => m.CoursesModule),
        pathMatch: 'full',
    },
    {
        path: 'not-found',
        loadComponent: () =>
            import('./components/content-not-found/content-not-found.component').then(m => m.ContentNotFoundComponent),
    },
    {
        path: '**',
        redirectTo: '/not-found',
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
