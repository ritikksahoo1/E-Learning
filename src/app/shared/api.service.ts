import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  private courseSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
public course$: Observable<any> = this.courseSubject.asObservable();

updateSelectedCourse(data:any){
this.courseSubject.next(data);
}

}
