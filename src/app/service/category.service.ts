import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';
import { BaseResponse } from '../models/base-response';

@Injectable()
export class CategoryService {
  private baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  list(): Observable<BaseResponse<Category[]>> {
    return this.http.get<BaseResponse<Category[]>>(`${this.baseUrl}/api/category/`)
  }
}
