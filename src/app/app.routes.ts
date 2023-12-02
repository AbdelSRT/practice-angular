import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { HomeComponent } from './pages/home/home.component';
export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'populair',
        loadComponent: () => 
        import('./pages/populair/populair.component').then(
            (c) => c.PopulairComponent,
        )
      },
      {
        path: 'aanbevolen',
        loadComponent: () => 
        import('./pages/aanbevolen/aanbevolen.component').then(
            (c) => c.AanbevolenComponent
        )


      },
      {
        path: 'nieuw',
        loadComponent:  () => 
        import('./pages/nieuwe/nieuwe.component').then(
            (c)=> c.NieuweComponent,
        )
      },
      {
    path: 'contact',
    loadComponent: () => 
    import('./pages/contact/contact.component').then(
        (c)=> c.ContactComponent,)
  }
    ],
  },
  {
    path: 'store',
    loadComponent: () => 
    import('./pages/store/store.component').then(
        (c)=> c.StoreComponent,
    )
  },
  
];
