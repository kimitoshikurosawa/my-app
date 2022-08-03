import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() {
    this.log('LoggerService:<<new>>')
  }

  log(message: string, obj?:unknown) {
    if(!environment.production)
    console.log(message,obj);
  }
}
