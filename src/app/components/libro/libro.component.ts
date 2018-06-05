import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Libro} from '../../models/libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  @Output() libroCreado: EventEmitter<Libro> = new EventEmitter<Libro>();

  libro: Libro;
  constructor() { }

  ngOnInit() {
    this.libro = new Libro();
  }

  crearLibro() {
    this.libroCreado.emit(this.libro);
    this.libro = new Libro();
  }

}
