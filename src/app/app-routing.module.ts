import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules, Router } from '@angular/router';
import { HomeComponent } from './site/pages/home/home.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

const defaultRoutes: Routes = [
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot([...routes, ...defaultRoutes],
    {
      scrollPositionRestoration: 'disabled',
      preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule]
})

export class AppRoutingModule {
  constructor(private router: Router) {
    router.resetConfig([...routes, ...defaultRoutes]);
  }
}
