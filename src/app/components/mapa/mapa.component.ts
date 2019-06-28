import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';
import { MapsService } from '../servicios/maps.services';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  maps:any[] = [];
  marcadores: Marcador[] = [];

  lat = 19.4978;
  lng = -99.1269;

  constructor( private _mapsService:MapsService ) {
   }

  ngOnInit() {
    this.maps = this._mapsService.getMaps();
    console.log( this.maps );
  }
}
