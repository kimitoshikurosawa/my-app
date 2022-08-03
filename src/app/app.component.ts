import {Component, Input} from '@angular/core';
import {LoggerService} from "./shared/services/logger.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Selfie';
  subTitle = 'My super App';
  imgDisplay = false;
  searchval ='';
  constructor(private _loggerService: LoggerService) {
  }

  searchlunch(_val : string){
    this._loggerService.log('ça marche',_val);
    this.searchval = _val;
}
}
