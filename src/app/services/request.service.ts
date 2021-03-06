import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../models/request.class';
import { SystemService } from './system.service';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  baseurl: string;

  constructor(
    private sys: SystemService,
    private http: HttpClient
  ) { this.baseurl = `${this.sys.baseurl}/api/requests`; }

  list(): Observable<Request[]> {
    return this.http.get(`${this.baseurl}`) as Observable<Request[]>
  }
  get(id: number): Observable<Request> {
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Request>
  }
  create(request: Request): Observable<Request> {
    return this.http.post(`${this.baseurl}`, request) as Observable<Request>
  }
  change(request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/${request.id}`, request) as Observable<any>
  }
  remove(id: number): Observable<Request> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<Request>
  }
  
  reviews(userId: number): Observable<Request[]> {
    return this.http.get(`${this.baseurl}/review/${userId}`) as Observable<Request[]>
  }
  review(request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/review/${request.id}`, request) as Observable<any>
  }
  approve(request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/approve/${request.id}`, request) as Observable<any>
  }
  reject(request: Request): Observable<any> {
    return this.http.put(`${this.baseurl}/reject/${request.id}`, request) as Observable<any>
  }

}
