import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {
    schedule: any = {};
  constructor(
      private route: ActivatedRoute,
      private router: Router
  ) { }

  ngOnInit() {
      this.route.params.subscribe(params => {
          axios.get(`schedules/${params.id}`).then((response) => {
              this.schedule = response.data.data;
              console.log(this.schedule);
          });
      });
  }

}
