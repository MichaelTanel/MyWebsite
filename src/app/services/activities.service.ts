import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private http : HttpClient) { }

  public getActivities(): Observable<any> {
    return this.http.get<any>('assets/data/information.json');
  }
}
