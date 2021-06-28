import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = 'http://www.angular.at/api/airport';

@Injectable({
  providedIn: 'root',
})
export class AirportService {
  constructor(private http: HttpClient) {}

  findAll(): Observable<string[]> {
    return this.http.get<string[]>(URL, {
      responseType: 'json',
    });
  }
}
