import { Component, OnInit } from '@angular/core';
import { StatusService } from '../status.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  Message = 'Loading...';

  constructor(private status: StatusService) {
    status.setMessage = (msg, fade) => (
      this.Message = msg
    );
  }

  ngOnInit() {
  }

}
