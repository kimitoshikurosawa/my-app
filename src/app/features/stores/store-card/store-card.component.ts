import {Component, OnInit, Input} from '@angular/core';
import {Stores} from "../../../models/stores.model";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-store-card',
  templateUrl: './store-card.component.html',
  styleUrls: ['./store-card.component.css']
})
export class StoreCardComponent implements OnInit {
  _subscribed: Subscription[] = [];

  constructor() {
    // TODO document why this constructor is empty
  }



  @Input() public store!: Stores;
  @Input() types: any;


  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }

}
