import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';



@Injectable()
export class Permission {
  constructor(private router: Router) {}
  canActivate(currentUser: any) {
    if (currentUser) {
      return true
    } else {
     return  this.router.navigate(['login']);
      
    }
  }
}










export const authenticateGuard: CanActivateFn = (route, state) => {
  let token = JSON.parse(localStorage.getItem('myregis') || '')
  return inject(Permission).canActivate(token);
};
