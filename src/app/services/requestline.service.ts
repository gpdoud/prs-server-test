import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requestline } from '../models/requestline.class';
import { SystemService } from './system.service';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {

  baseurl: string;

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { this.baseurl = `${this.sys.baseurl}/api/requestlines`;}

  list(): Observable<Requestline[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Requestline[]>
  }
  get(id: number): Observable<Requestline> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Requestline>
  }
  create(requestline: Requestline): Observable<Requestline> {
    return this.http.post(`${this.baseurl}`, requestline) as Observable<Requestline>
  }
  change(requestline: Requestline): Observable<any> {
    return this.http.put(`${this.baseurl}/${requestline.id}`, requestline) as Observable<any>
  }
  remove(id: number): Observable<Requestline> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<Requestline>
  }
  
}
