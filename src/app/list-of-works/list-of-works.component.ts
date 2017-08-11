import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-of-works',
  templateUrl: './list-of-works.component.html',
  styleUrls: ['./list-of-works.component.css']
})
export class ListOfWorksComponent implements OnInit {
  cars: any[];
  sections: any[];
  constructor() { }

  ngOnInit() {
    this.cars = [
      {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
      {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
      {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
      {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
      {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
      {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
      {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
      {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
      {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
      {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"},
      {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
      {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
      {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
      {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
      {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
      {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
      {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
      {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
      {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
      {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"},
      {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
      {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
      {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
      {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
      {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
      {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
      {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
      {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
      {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
      {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"},
      {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
      {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
      {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
      {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
      {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
      {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
      {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
      {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
      {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
      {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}];
  this.sections = [
    {"name":"Ümumi","served_tables_num":"1","served_num":"0","avg_serve_time":"00:00:00","waiting_time":"0"},
    {"name":"Məlumat almaq","served_tables_num":"0","served_num":"0","avg_serve_time":"00:00:00","waiting_time":"0"},
    {"name":"Qeydiyyat - uçot","served_tables_num":"1","served_num":"0  ","avg_serve_time":"00:00:00","waiting_time":"0"},
    {"name":"Bəyannamə","served_tables_num":"0","served_num":"0","avg_serve_time":"00:00:00","waiting_time":"0"},
    {"name":"E-Xidmət Asan imza","served_tables_num":"0","served_num":"0","avg_serve_time":"00:00:00","waiting_time":"0"},
    {"name":"Vergi borcu","served_tables_num":"0","served_num":"0","avg_serve_time":"00:00:00","waiting_time":"0"},
    {"name":"Uyğunsuzluq","served_tables_num":"0","served_num":"0","avg_serve_time":"00:00:00","waiting_time":"0"},
    {"name":"Ərizə(sənəd) qəbulu","served_tables_num":"0","served_num":"0","avg_serve_time":"00:00:00","waiting_time":"0"},
    {"name":"Hazır sənədin alınması","served_tables_num":"0","served_num":"0","avg_serve_time":"00:00:00","waiting_time":"0"},
    {"name":"Digər","served_tables_num":"0","served_num":"0","avg_serve_time":"00:00:00","waiting_time":"0"},
    {"name":"Özünə xidmət","served_tables_num":"0","served_num":"0","avg_serve_time":"00:00:00","waiting_time":"0"},
    {"name":"Online Növbə ","served_tables_num":"0","served_num":"0","avg_serve_time":"00:00:00","waiting_time":"0"},
    {"name":"Online Növbə ","served_tables_num":"0","served_num":"0","avg_serve_time":"00:00:00","waiting_time":"0"},
    {"name":"Online Növbə ","served_tables_num":"0","served_num":"0","avg_serve_time":"00:00:00","waiting_time":"0"},
    {"name":"Online Növbə ","served_tables_num":"0","served_num":"0","avg_serve_time":"00:00:00","waiting_time":"0"},
    {"name":"Yaşıl Dəhliz ","served_tables_num":"0","served_num":"0","avg_serve_time":"00:00:00","waiting_time":"0"}
  ];
  }
}
