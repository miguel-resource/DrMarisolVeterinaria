import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './shared/components/header/header.component';

import { AdminGuard } from './admin.guard';
import { HomeComponent } from './home/components/home/home.component';

const routes:Routes = [
    { //DEFAULT
        path:'',
        component: HeaderComponent,
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
                loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
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
