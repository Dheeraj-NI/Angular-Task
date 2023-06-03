import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

@Injectable()
export class HomeGuard {
  constructor(private router: Router) {}
  canActivate(currentUser: any) {
    
    if (currentUser) {
      return true;
    } else {
      return this.router.navigate(['login']);
    }
  }
}


export const homeAuthGuard: CanActivateFn = (route, state) => {
  let token = JSON.parse(localStorage.getItem('myregis') || '');
  return inject(HomeGuard).canActivate(token);
};
