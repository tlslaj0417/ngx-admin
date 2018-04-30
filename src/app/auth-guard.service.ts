import { Injectable } from '@angular/core';
import { CanActivate,Router  } from '@angular/router';
import { NbAuthService } from '@tlslaj0417/auth';
import { tap } from 'rxjs/operators/tap';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: NbAuthService, private router: Router) {
  }

  canActivate() {
   // return this.authService.isAuthenticated(); // canActive can return Observable<boolean>, which is exactly what isAuhenticated returns
   return this.authService.isAuthenticated()
      .pipe(
        tap(authenticated => {
          if (!authenticated) {
            this.router.navigate(['auth/login']);
          }
        }),
      );
  }
}