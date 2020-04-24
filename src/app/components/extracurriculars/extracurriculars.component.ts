import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/services/activities.service';
import { Activity } from 'src/app/models/activity';

@Component({
  selector: 'app-extracurriculars',
  templateUrl: './extracurriculars.component.html',
  styleUrls: ['./extracurriculars.component.css']
})
export class ExtracurricularsComponent implements OnInit {

  private data : Activity[];

  constructor(private activitiesService : ActivitiesService) {

  }

  ngOnInit() {
    this.activitiesService.getActivities().subscribe(data => {
      this.data = data.activities;
      console.log('data: ' + data);
      console.log('data.activities: ' + data.activities);
      // console.log('this.data: ' + this.data[0].name);
    });
  }

}
