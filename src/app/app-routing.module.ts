import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'catalogo-page',
    loadChildren: () => import('./catalogo-page/catalogo-page.module').then( m => m.CatalogoPagePageModule)
  },
  {
    path: 'catalogo-page/:id',
    loadChildren: () => import('./catalogo-page/catalogo-page.module').then( m => m.CatalogoPagePageModule)
  },
  {
    path: 'mis-prestamos-page',
    loadChildren: () => import('./mis-prestamos-page/mis-prestamos-page.module').then( m => m.MisPrestamosPagePageModule)
  },
  {
    path: 'mis-prestamos-page/:id',
    loadChildren: () => import('./mis-prestamos-page/mis-prestamos-page.module').then( m => m.MisPrestamosPagePageModule)
  },
  {
    path: 'libro-page',
    loadChildren: () => import('./libro-page/libro-page.module').then( m => m.LibroPagePageModule)
  },
  {
    path: 'libro-page/:id',
    loadChildren: () => import('./libro-page/libro-page.module').then( m => m.LibroPagePageModule)
  },
  {
    path: 'borrar-libro',
    loadChildren: () => import('./borrar-libro/borrar-libro.module').then( m => m.BorrarLibroPageModule)
  },
  {
    path: 'borrar-libro/:id',
    loadChildren: () => import('./borrar-libro/borrar-libro.module').then( m => m.BorrarLibroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
