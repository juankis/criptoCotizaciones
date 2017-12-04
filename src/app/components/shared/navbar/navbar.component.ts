import { Component, OnInit } from '@angular/core';
import { CoinmonitorService } from '../../../servicios/coinmonitor.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(
    private _heroesService:CoinmonitorService
  ) { }

  ngOnInit() {
  }

    buscarHeroe(texto:string){
      console.log(texto)
    }
}
