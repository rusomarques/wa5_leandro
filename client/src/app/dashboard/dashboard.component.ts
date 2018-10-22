import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../topic';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  topics: Topic[];
  @Input() topicTitle: string;

  constructor(private apiClientService: ApiClientService) { }

  ngOnInit() {
    this.getAllTopics();
  }

  getAllTopics() {
    this.apiClientService.getAllTopics()
      .subscribe(response => this.topics = response);
  }

  addTopic() {
    this.apiClientService.addTopic({
      title: this.topicTitle,
      published_at: Date.now().toString(),
      score: 0
    })
      .subscribe(topic => this.topics.push(topic));
  }

}
