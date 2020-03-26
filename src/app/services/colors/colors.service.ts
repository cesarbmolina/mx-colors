import { Injectable } from '@angular/core';
// API SERVICES
import { RespApiService } from '../resp-api.service';
import { Observable } from 'rxjs';
// MODELS
import { ColorsInterface } from './colors.model';

@Injectable({
  providedIn: 'root'
})
export class ColorServices {
  constructor(private api: RespApiService) { }

  /** GET COLORS */
  public getColors(page?: number): Observable<ColorsInterface> {
    const url = 'https://reqres.in/api/colors';
    return this.api.getApi(url + `?page=${page}` + `&per_page=9`);
  }
}
