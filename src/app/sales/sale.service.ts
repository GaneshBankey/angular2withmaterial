import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Sale } from './sale';

@Injectable()
export class SaleService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private salessUrl = 'http://localhost:9090/SpringJPA/api';  // URL to web api

  constructor(private http: Http) { }

  getSales(): Promise<Sale[]> {
    const url = `${this.salessUrl}/sales`;
    console.log('lading sales data');
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Sale[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}