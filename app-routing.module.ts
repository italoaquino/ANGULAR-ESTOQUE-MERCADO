import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './products/formulario/formulario.component';

const routes: Routes = [
  {path : '', pathMatch: 'full' , redirectTo: 'products' },
  {path:'formulario', component:FormularioComponent},
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
