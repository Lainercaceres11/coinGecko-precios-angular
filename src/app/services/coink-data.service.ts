import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coink } from '../models/coin.interface';

@Injectable({
  providedIn: 'root'
})
export class CoinkDataService {

  constructor(private htpp: HttpClient) { }

  getDataCoink():Observable<Coink>{
    return this.htpp.get<Coink>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  }
}
