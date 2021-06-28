import { ExtraOptions, Routes } from '@angular/router';
import { BasketComponent } from './basket/basket.component';
import { HomeComponent } from './home/home.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'basket',
    component: BasketComponent,
    outlet: 'aux',
  },
  {
    path: 'mf-passenger',
    loadChildren: () =>
      loadRemoteModule({
        remoteName: 'passenger',
        exposedModule: './module',
      }).then((m) => m.PassengerModule),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
