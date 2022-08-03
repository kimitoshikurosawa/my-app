import { Component, OnInit } from '@angular/core';
import {LoggerService} from "../../shared/services/logger.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  imgDisplay = false;
  searchval ='';
  constructor(private _loggerService: LoggerService) {
  }
  searchlunch(_val : string){
    this._loggerService.log('ça marche',_val);
    this.searchval = _val;}
  ngOnInit(): void {


  }

}
