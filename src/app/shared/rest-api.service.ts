import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError, forkJoin } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  consParam: any;

  apiURL = "http://65.0.108.228:88/";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      // 'Access-control-Allow-Headers' :'Content-Type',
      // 'Access-Control-Allow-Origin': '*',
    })
  }


  constructor(private restApi: HttpClient) { }

  // Error handling 
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  // HttpClient API post() method => Sending empty String works as Get Method
  getList(link): any {
    return this.restApi.post(this.apiURL + link, '', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )

  }
// with id 
  getListbyId(id, link): any {
    this.consParam = {
      "id": id
    }
    return this.restApi.post(this.apiURL + link, this.consParam, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )

  }

  // with id 
  getListbyCoupon(list, link,coupon ): any {
    this.consParam = {
      "id": list,
      "coupon_code" : coupon
    }
    return this.restApi.post(this.apiURL + link, this.consParam, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )

  }

  // with id and coupon

  getListbyIdC(id,coupon, link , type,chId): any {
    this.consParam = {
      "id": id,
      "coupon_code" : coupon,
      "event_type" : type,
      "child_id" : chId
    }
    return this.restApi.post(this.apiURL + link, this.consParam, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )

  }

  postForm(link,values): any {
    return this.restApi.post(this.apiURL + link, JSON.stringify(values), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )

  }

}
