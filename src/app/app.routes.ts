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
    loadComponent: ()=>import('./components/enterprise/enterprise.component').then(m=>m.EnterpriseComponent)
  },
  {
    path: 'contacts',
    loadComponent: ()=>import('./components/contacts/contacts.component').then(m=>m.ContactsComponent)
  },
  {
    path: 'shopping-cart',
    loadComponent: ()=>import('./components/shopping-cart/shopping-cart.component').then(m=>m.ShoppingCartComponent)
  },
  {
    path: 'final-form',
    loadComponent: ()=>import('./components/final-form/final-form.component').then(m=>m.FinalFormComponent)
  }
];
