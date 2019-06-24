import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  marcadores: Marcador[] = [];

  lat = 19.4978;
  lng = -99.1269;

  constructor() {

    const nuevoMarcador = new Marcador(19.4978, -99.1269);

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
