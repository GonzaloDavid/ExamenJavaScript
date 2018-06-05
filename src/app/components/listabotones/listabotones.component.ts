import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Autor} from '../../models/autor';

@Component({
  selector: 'app-listabotones',
  templateUrl: './listabotones.component.html',
  styleUrls: ['./listabotones.component.css']
})
export class ListabotonesComponent implements OnInit {

  @Input() listaAutores: Autor[];
  @Output() autorSeleccionado: EventEmitter<Autor> = new EventEmitter<Autor>();

  constructor() { }

  ngOnInit() {
  }

  seleccionarAutor(autor: Autor) {
    this.autorSeleccionado.emit(autor);
  }

}
