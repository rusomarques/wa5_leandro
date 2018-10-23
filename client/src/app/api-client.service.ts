import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Topic } from "./topic";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class ApiClientService {
  ulrTopics: string = "http://localhost:3000/topics";
  urlAddTopic: string = "http://localhost:3000/topic";
  urlDeleteTopic: string = "http://localhost:3000/topic/";

  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
      // 'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) {}

  getAllTopics(): Observable<Topic[]> {
    return this.http.get<Topic[]>(this.ulrTopics);
  }

  addTopic(topic: Topic): Observable<any> {
    return this.http.post<any>(this.urlAddTopic, topic, this.httpOptions);
  }

  deletePost(title: string): Observable<{}> {
    return this.http.delete(this.urlDeleteTopic, this.httpOptions);
  }
}
