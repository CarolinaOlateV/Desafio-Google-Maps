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

    if ( localStorage.getItem('marcadores') ) {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
    if ( localStorage.getItem('maps') ) {
      this.maps = JSON.parse(localStorage.getItem('maps'))
    }
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

    this.guardarStorage();
  }

  borrarMarcador( i: number ) {
    this.marcadores.splice(i, 1);
    this.guardarStorage();
  }

  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify( this.marcadores ) );
  }

}
