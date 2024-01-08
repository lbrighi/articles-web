import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { ContextService } from "../service/context.service";
import { BaseResponse } from "../models/base-response";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    token:string;

    constructor(
      private router: Router,
      private context:ContextService) {
        this.token = this.context.get()
    }

    private handleError(err: HttpErrorResponse): Observable<any> {
      var response:BaseResponse<any> = err.error

      // if (err.status === 401 || err.status === 403) {
      //   this.router.navigateByUrl(`/logout`);
      //   return of(err.message);
      // }

      if (err.status === 500){
        console.log("Erro inesperado do serviço")
        return of(err.message);
      }
      return throwError(response);
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const authReq = req.clone({headers: req.headers.set('Authorization', `Bearer ${this.token}`)});
      return next.handle(authReq).pipe(catchError(x=> this.handleError(x)));
    }
}
