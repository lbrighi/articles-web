import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';

@Injectable()
export class TokenService {
  private baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  login(login:Login): Observable<any> {
    var response = this.http.post<any>(`${this.baseUrl}/api/token/`,login)
    return response;
  }
}
