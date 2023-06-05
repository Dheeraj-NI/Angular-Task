import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HTTPConnectService {

  constructor(private _http: HttpClient, private router: Router) {}
  saveData(data: any) {
    return this._http.post('http://localhost:3000/users', data);
  }
}
