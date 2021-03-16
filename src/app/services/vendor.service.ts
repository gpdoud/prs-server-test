import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vendor } from '../models/vendor.class';
import { SystemService } from './system.service';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

  baseurl: string;

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { this.baseurl = `${this.sys.baseurl}/api/vendors`; }

  list(): Observable<Vendor[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Vendor[]>
  }
  get(id: number): Observable<Vendor> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Vendor>
  }
  create(vendor: Vendor): Observable<Vendor> {
    return this.http.post(`${this.baseurl}`, vendor) as Observable<Vendor>
  }
  change(vendor: Vendor): Observable<any> {
    return this.http.put(`${this.baseurl}/${vendor.id}`, vendor) as Observable<any>
  }
  remove(id: number): Observable<Vendor> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<Vendor>
  }
}
