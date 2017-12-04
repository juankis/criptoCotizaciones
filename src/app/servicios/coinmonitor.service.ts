import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Observable}  from 'rxjs/Rx';

@Injectable()
export class CoinmonitorService {
  data: any = null;
  urlApiCotizacionDolar: string = 'http://localhost/coinmonitor/public/api/v1/getCotizacion?base=USD&moneda=BOB';
  urlMarketPriceBitcoin: string = 'https://api.coinmarketcap.com/v1/ticker/bitcoin/';

  constructor(private _http: Http) {
    console.log("servicios vivo!!")
  }

  getCotizacion(){
     return this._http.get(this.urlApiCotizacionDolar)
                      .map((res: Response) => res.json());
  }

  getCotizacionBitcoin(){
    return this._http.get(this.urlMarketPriceBitcoin)
                     .map((res: Response) => res.json());
  }
}
