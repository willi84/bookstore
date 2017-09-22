
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
// Define routes
const appRoutes: Routes = [
    
    {path: '', redirectTo: '/books', pathMatch: 'full'},
    {path: 'books', loadChildren: './book/book.module#BookModule'}
    ];
// Create a new module with configured router
export const routing: ModuleWithProviders =
RouterModule.forRoot(appRoutes);