import { Component, OnInit } from '@angular/core';
import { EducationService } from 'src/app/services/education.service';
import { Education } from 'src/app/models/education';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  private data: Education[];

  constructor(private educationService : EducationService) { }

  ngOnInit() {
    this.educationService.getEducation().subscribe(data => {
      this.data = data.education;
      console.log('data: ' + data);
      console.log('data.activities: ' + data.education);
      // console.log('this.data: ' + this.data[0].name);
    });
  }

}
