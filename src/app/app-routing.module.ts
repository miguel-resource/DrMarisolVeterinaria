import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules} from '@angular/router';

import { BlogComponent } from './blog/blog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './shared/components/header/header.component';

import { AdminGuard } from './admin.guard';
import { HomeComponent } from './home/components/home/home.component';
import { PostComponent } from './blog/components/post/post.component'

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
                loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
            },
            {
                path: 'blog',
                loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule)
            },
            {
              path: 'blog/:id',
              component: PostComponent,
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
        canActivate: [ AdminGuard ], 
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
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
