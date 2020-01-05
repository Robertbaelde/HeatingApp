import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-schedule-index',
  templateUrl: './schedule-index.page.html',
  styleUrls: ['./schedule-index.page.scss'],
})
export class ScheduleIndexPage implements OnInit {
  schedules: any = [];

  constructor() { }

  ngOnInit() {
    this.loadSchedules();
  }

  loadSchedules() {
      axios.get('schedules').then((response) => {
          this.schedules = response.data.data;
      });
  }

}
