import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.class';
import { SystemService } from './system.service';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  baseurl: string;

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { this.baseurl = `${this.sys.baseurl}/api/products`; }

  list(): Observable<Product[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Product[]>
  }
  get(id: number): Observable<Product> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Product>
  }
  create(product: Product): Observable<Product> {
    return this.http.post(`${this.baseurl}`, product) as Observable<Product>
  }
  change(product: Product): Observable<any> {
    return this.http.put(`${this.baseurl}/${product.id}`, product) as Observable<any>
  }
  remove(id: number): Observable<Product> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<Product>
  }
}
