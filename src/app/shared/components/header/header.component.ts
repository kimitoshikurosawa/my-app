import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {LoggerService} from "../../services/logger.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('searchfield', {static: false})
  searchfield!: ElementRef;
  @ViewChild('searchtype', {static: false})
  mysearchfield!: ElementRef;

  @Output()
  searchAction : EventEmitter<string> = new EventEmitter<string>()

  constructor(private _loggerService: LoggerService) {
  }

  ngOnInit(): void {
  }
search(){
const valfield = this.searchfield.nativeElement.value;
const valtype = this.mysearchfield.nativeElement.value;

let value = valfield + valtype
  this.searchAction.emit(value)

}
}
