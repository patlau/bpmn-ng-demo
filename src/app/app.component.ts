import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'BPMN-JS';

  constructor(private http: Http) {}

  ngOnInit() {
  }



}
