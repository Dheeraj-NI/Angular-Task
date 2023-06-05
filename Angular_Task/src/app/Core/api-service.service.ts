import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  private token: string = '';
  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);
  public token$: Observable<string | null> = this.tokenSubject.asObservable();

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
  getToken(): void {
    const token = JSON.parse(localStorage.getItem('myregis') || '');

    this.tokenSubject.next(token);
  }
  deleteToken(): void {
    // Clear the token and notify subscribers
    localStorage.removeItem('myregis');
    this.tokenSubject.next(null);
  }
}
