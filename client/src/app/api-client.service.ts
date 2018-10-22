import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Observable } from "rxjs";
import { Topic } from './topic';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  ulrTopics: string = 'http://localhost:3000/topics';

  constructor(private http: HttpClient) { }

  getAllTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.ulrTopics);
  }

}
