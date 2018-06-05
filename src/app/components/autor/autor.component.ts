import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Autor} from '../../models/autor';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  @Output() autorCreado: EventEmitter<Autor> = new EventEmitter<Autor>();
  constructor() { }
  ngOnInit() {
  }

  crearAutor() {
    const autor: Autor = new Autor();
    autor.nombre = 'Gonzalo';
    autor.apellidos = 'Proaño';
    autor.imagen = 'https://i.ytimg.com/vi/8tR_ByszHTc/maxresdefault.jpg';
    console.log('[NUEVO AUTOR]: ', autor);
    this.autorCreado.emit(autor);
  }

}
