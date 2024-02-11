import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
        .pipe(
            tap(() => console.log("Interceptor")),
            catchError((error) => {
                let errorMsg = 'Error!';
                
                if(error instanceof HttpErrorResponse) {
                    this.router.navigate(['/error']);
                    errorMsg += error.message;
                }
                console.log(errorMsg);
                return throwError(errorMsg);
            })
        );
  }
}
