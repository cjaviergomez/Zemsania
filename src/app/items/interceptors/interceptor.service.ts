import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Pasó por el interceptor');

    let requestClone = req;
    // Agregamos el Accept
    requestClone = req.clone({
      headers: requestClone.headers.set('Accept', 'application/json'),
    });
    return next.handle(requestClone).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(err);
      })
    );
  }
}
