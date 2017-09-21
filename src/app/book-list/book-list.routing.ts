import { BookListComponent } from './book-list.component';
import { BookDetailComponent } from './../book-detail/book-detail.component';

import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
// Define routes
const appRoutes: Routes = [
    {
        path: 'books',
        component: BookListComponent
    },
    {
        path: 'books/:isbn',
        component: BookDetailComponent
    },
    {
        path: '',
        redirectTo: '/books',
        pathMatch: 'full' // checks if full url matches path
        }
    ];
// Create a new module with configured router
export const routing: ModuleWithProviders =
RouterModule.forRoot(appRoutes);