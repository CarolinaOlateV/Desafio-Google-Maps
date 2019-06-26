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

    const nuevoMarcador = new Marcador(19.4978, -99.1269);

    this.marcadores.push( nuevoMarcador );
   }

  ngOnInit() {
    this.maps = this._mapsService.getMaps();
    console.log( this.maps );
  }

  agregarMarcador( evento ) {

    const coords = evento.coords;

    // console.log(evento.coords.lat);

    const nuevoMarcador = new Marcador( coords.lat, coords.lng );

    this.marcadores.push( nuevoMarcador );
  }

}
