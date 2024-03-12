import { Routes } from '@angular/router';
import { RamsDashbaordComponent } from './pages/components/rams-dashbaord/rams-dashbaord.component';
import { RamsTeacherComponent } from './pages/components/rams-teacher/rams-teacher.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: RamsDashbaordComponent
    },
    {
        path: 'instructors',
        component: RamsTeacherComponent
    }
];
