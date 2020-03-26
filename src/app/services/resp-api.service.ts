import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// THIRD
import { Observable } from 'rxjs';

// OPTIONS
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class RespApiService {

  /** HTTP WRAPPER  */
  constructor(private http: HttpClient) { }

  /** GET REQUEST BY API */
  public getApi(url: string): Observable<any> {
    return this.http.get(url, httpOptions);
  }
}
