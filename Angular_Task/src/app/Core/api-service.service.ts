import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  constructor(private _http: HttpClient) {}

  //Get Data
  getData() {
    return this._http.get<any>('http://localhost:3000/dummydata').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  saveData(data: any) {
    return this._http.post('http://localhost:3000/register', data);
  }
  checkCredentials() {
    return this._http.get<any>('http://localhost:3000/register');
  }
}
