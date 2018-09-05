import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  details = 'Secret password = x';
  showDetails = false;
  logs = [];
  constructor() { }

  ngOnInit() {
  }

  onTogle() {
    this.showDetails = !this.showDetails;
    // this.logs.push(this.logs.length + 1 );
    this.logs.push(new Date());
  }


}
