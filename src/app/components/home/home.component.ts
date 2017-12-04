import { Component, OnInit } from '@angular/core';
import { CoinmonitorService } from '../../servicios/coinmonitor.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  cotizacionDolar: any;
  marketPriceBitcoin: any;
  bobBitcoin: any;
  usdBitcoin: number;

  constructor( private _coinmonitorService:CoinmonitorService) {
    this._coinmonitorService.getCotizacion().subscribe(data => {
      this.cotizacionDolar = data.cotizacion;
      this.calcularCotizaciones();
    });
  }

  calcularCotizaciones(){
    this._coinmonitorService.getCotizacionBitcoin().subscribe(dataCotizacion => {
      this.marketPriceBitcoin = dataCotizacion;
      this.bobBitcoin = this.marketPriceBitcoin[0].price_usd*this.cotizacionDolar;
      this.usdBitcoin = this.marketPriceBitcoin[0].price_usd;
    });
  }

  ngOnInit() {}

}
