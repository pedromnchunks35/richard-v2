import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadComponent: () => import('./components/products/products.component').then(m => m.ProductsComponent),
    pathMatch: 'full'
  },
  {
    path: 'enterprise',
    loadComponent: ()=>import('./components/enterprise/enterprise.component').then(m=>m.EnterpriseComponent),
    pathMatch: 'full'
  },
  {
    path: 'contacts',
    loadComponent: ()=>import('./components/contacts/contacts.component').then(m=>m.ContactsComponent),
    pathMatch: 'full'
  },
  {
    path: 'shopping-cart',
    loadComponent: ()=>import('./components/shopping-cart/shopping-cart.component').then(m=>m.ShoppingCartComponent),
    pathMatch: 'full'
  },
  {
    path: 'final-form',
    loadComponent: ()=>import('./components/final-form/final-form.component').then(m=>m.FinalFormComponent),
    pathMatch: 'full'
  },
  {
    path: 'product',
    loadComponent: () => import('./components/product/product.component').then(m=>m.ProductComponent),
    pathMatch: 'full'
  }
];
