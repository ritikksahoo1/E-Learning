import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api_url: string = 'http://localhost:8080';
  token=signal('user')
  constructor(private http: HttpClient) { }

  private courseSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  public course$: Observable<any> = this.courseSubject.asObservable();

  updateSelectedCourse(data: any) {
    this.courseSubject.next(data);
  }

  login(userDetails: LoginDetails) {
    const url = this.api_url + '/loginUser';
    return this.http.post(url, userDetails)
  }

  register(registerDetails: RegisterDetails) {
    const url = this.api_url + '/api/users/register';
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.token()}`,
    });
    return this.http.post(url, registerDetails,{headers});
  }

}
export interface LoginDetails {
  userId: string;
  password: string;
  role: string;
}

export interface RegisterDetails {
  email: string;
  fullName: string;
  password: string;
  date: string;
  address: string;
  course: string;
  phone: number;
  role: string;
}
