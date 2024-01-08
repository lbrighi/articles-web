import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseResponse } from '../models/base-response';
import { Article } from '../models/article';

@Injectable()
export class ArticleService {
  private baseUrl = environment.baseUrl;

  constructor(private http:HttpClient) { }

  get(id:number): Observable<Article> {
    return this.http.get<Article>(`${this.baseUrl}/api/article/${id}/`)
  }

  list(title:string, category:number): Observable<BaseResponse<Article[]>> {
    var params = new HttpParams()

    if (title)
      params  = params.set('title',title)

    if (category != 0)
      params = params.set('category',category.toString())

    return this.http.get<BaseResponse<Article[]>>(`${this.baseUrl}/api/article/`,{params})
  }
}
