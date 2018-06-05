import {Component, OnInit} from '@angular/core';
import {Autor} from './models/autor';
import {Libro} from './models/libro';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  autores: Autor[];
  autorSeleccionado: Autor;
  constructor() {
  }
  ngOnInit() {
    this.autores = [];
  }

  insertarAutor(evento: Autor) {
    this.autores.push(evento);
    console.log('[LISTA AUTORES]: ', this.autores);
  }
  seleccionarAutor(evento: Autor) {
    this.autorSeleccionado = evento;
    console.log('[AUTOR SELECCIONADO]: ', this.autorSeleccionado);
  }

  insertarLibroEnAutorSeleccionado(evento: Libro) {
    this.autorSeleccionado.libros.push(evento);
  }
}
