import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  DHLAuthComponent,
  DHLLoginComponent,
  DHLLogoutComponent,
  DHLRegisterComponent,
  DHLRequestPasswordComponent,
  DHLResetPasswordComponent,
} from './@theme/components/auth';
import { AuthGuard } from './auth-guard.service';

const routes: Routes = [
  { path: 'pages',canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
   loadChildren: 'app/pages/pages.module#PagesModule' },
  {
    path: 'auth',
    component: DHLAuthComponent,
    children: [
      {
        path: '',
        component: DHLLoginComponent,
      },
      {
        path: 'login',
        component: DHLLoginComponent,
      },
      {
        path: 'register',
        component: DHLRegisterComponent,
      },
      {
        path: 'logout',
        component: DHLLogoutComponent,
      },
      {
        path: 'request-password',
        component: DHLRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: DHLResetPasswordComponent,
      },
    ],
  },
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages' },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
