import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';

import { AdminGuard } from './admin.guard';

const routes:Routes = [
    { //DEFAULT
        path:'',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: '/home',
                pathMatch: 'full',
            },
            {
                path: 'home',
                canActivate: [ AdminGuard ],
                //component: HomeComponent,
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'blog',
                component: BlogComponent,
            },
            {
                path: 'contact',
                loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)
            },
            {
                path: 'about',
                loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
            }
        ]
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    { //NOT FOUND
        path: '**',
        component: PageNotFoundComponent
    }
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        preloadingStrategy: PreloadAllModules
    })],
    exports: [RouterModule]
})
export class AppRoutingModule{}
