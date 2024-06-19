import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { LoggerService } from '../../core/logger.service';

@Injectable({
  providedIn: 'root'
})
export class PracticeAppHttpService {

  private http = inject(HttpClient);
  private logger = inject(LoggerService);

  helloWorld() : Observable<string>  {

    this.logger.log("ConfigService:helloWorld() -> calling angular/helloworld ");

    return this.http.get('http://localhost:8080/angular/helloworld', {responseType: 'text'})
    .pipe(
      tap((data: string) => data),
      catchError(err => throwError(() => err))
    )
  }
}