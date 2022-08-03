import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {LoggerService} from "../../../shared/services/logger.service";
import {StoreService} from "../../../shared/services/stores/store.service";
import {Subscription} from "rxjs";
import { Stores } from 'src/app/models/stores.model';

@Component({
  selector: 'app-featured-list',
  templateUrl: './featured-list.component.html',
  styleUrls: ['./featured-list.component.css']
})
export class FeaturedListComponent implements OnInit, OnDestroy {
  _subscribed: Subscription[] = [];
  constructor(private _loggerServices: LoggerService, private _storeService: StoreService) {
  }

  ngOnDestroy(): void {
    this._subscribed.forEach(item => item.unsubscribe());
  }

  featuredStores!: Stores[];
  type = 'vedette'
  //featuredStores = new Array<Stores>()

  @Input() set filtre(valeur: string){
  }



  ngOnInit(): void {
    const onairsub =this._storeService.getAll_obs().subscribe(featured => this.featuredStores = featured);
    this._subscribed.push(onairsub);


    // this._storeService.getAll_obs().subscribe((featured)=>{
    //   this.featuredStores = featured ;
    //   console.log(this.featuredStores)
    //
    // })
  }



}
