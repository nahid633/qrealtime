import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current-work',
  templateUrl: './current-work.component.html',
  styleUrls: ['./current-work.component.css']
})
export class CurrentWorkComponent implements OnInit {
  works: any[];
  constructor() { }
  ngOnInit() {
    this.works =[
      {"table": "5","last_call":"00:00:00","servant":"Nahid","ticket":"31","served_num":"0","real_serve_time":"00:00:00","all_serve_time":"00:00:00"},
      {"table": "6","last_call":"00:00:00","servant":"Eli","ticket":"32","served_num":"0","real_serve_time":"00:00:00","all_serve_time":"00:00:00"},
      {"table": "7","last_call":"00:00:00","servant":"Veli","ticket":"45","served_num":"0","real_serve_time":"00:00:00","all_serve_time":"00:00:00"},
      {"table": "8","last_call":"00:00:00","servant":"Deli","ticket":"87","served_num":"0","real_serve_time":"00:00:00","all_serve_time":"00:00:00"},
      {"table": "9","last_call":"00:00:00","servant":"Koroglu","ticket":"121","served_num":"0","real_serve_time":"00:00:00","all_serve_time":"00:00:00"},
      {"table": "9","last_call":"00:00:00","servant":"Koroglu","ticket":"121","served_num":"0","real_serve_time":"00:00:00","all_serve_time":"00:00:00"},
      {"table": "9","last_call":"00:00:00","servant":"Koroglu","ticket":"121","served_num":"0","real_serve_time":"00:00:00","all_serve_time":"00:00:00"},
      {"table": "9","last_call":"00:00:00","servant":"Koroglu","ticket":"121","served_num":"0","real_serve_time":"00:00:00","all_serve_time":"00:00:00"},
      {"table": "9","last_call":"00:00:00","servant":"Koroglu","ticket":"121","served_num":"0","real_serve_time":"00:00:00","all_serve_time":"00:00:00"},
      {"table": "9","last_call":"00:00:00","servant":"Koroglu","ticket":"121","served_num":"0","real_serve_time":"00:00:00","all_serve_time":"00:00:00"},
      {"table": "9","last_call":"00:00:00","servant":"Koroglu","ticket":"121","served_num":"0","real_serve_time":"00:00:00","all_serve_time":"00:00:00"},
    ];
  }

}
