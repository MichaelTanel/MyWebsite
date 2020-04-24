import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(private http: HttpClient) {
    
  }

  public getEducation(): Observable<any> {
    return this.http.get<any>('../../assets/data/information.json');
  }
}
