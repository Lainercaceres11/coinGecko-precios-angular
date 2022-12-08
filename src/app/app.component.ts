import { Component, OnInit } from '@angular/core';
import { Coink } from './models/coin.interface';
import { CoinkDataService } from './services/coink-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CoinMarket';
  coins: Coink[] = [];
  filteredCoints: Coink[] = [];
  titles: string[] = [
    '#',
    'coin',
    'price',
    'price_change_percentage_24h',
    '24h volume '
  ]

  searchText: string = '';

  constructor(private _CoinkData: CoinkDataService){}

  ngOnInit(): void {
    this._CoinkData.getDataCoink().subscribe({
      next:((response: Coink[] | any)=>{
        console.log(response)
        this.coins = response
        this.filteredCoints = response
      }), 
      error: ((error)=> console.log('Error al obtener datos', error)),
      complete: (()=> console.info('Peticion completada'))
    })
  }

  searchCoin() {
    this.filteredCoints = this.coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
