import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = -33.4726900;
  lng = -70.6472400;

  constructor() {

    const nuevoMarcador = new Marcador(-33.4726900, -70.6472400);

    this.marcadores.push( nuevoMarcador );
   }

  ngOnInit() {
  }

  agregarMarcador( evento ) {

    const coords = evento.coords;

    console.log(evento.coords.lat);

    const nuevoMarcador = new Marcador( coords.lat, coords.lng );

    this.marcadores.push( nuevoMarcador );
  }

}
