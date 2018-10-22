import { Component, OnInit } from '@angular/core';
import { Topic } from '../topic';
import { ApiClientService } from '../api-client.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  topics: Topic[];

  constructor(private apiClientService: ApiClientService) { }

  ngOnInit() {
    this.getAllTopics();
  }

  getAllTopics() {
    this.apiClientService.getAllTopics()
      .subscribe(response => this.topics = response);
  }

}
