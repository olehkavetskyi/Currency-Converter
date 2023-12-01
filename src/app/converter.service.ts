import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {
  baseUrl = environment.apiUrl;
  apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  getCurrency(source: string, currency: string) {
    return this.http.get(`${this.baseUrl}${this.apiKey}/pair/${source}/${currency}`);
  }

}
