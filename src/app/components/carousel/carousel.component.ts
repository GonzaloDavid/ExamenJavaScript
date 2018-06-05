import {Component, Input, OnInit} from '@angular/core';
import {Autor} from '../../models/autor';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  @Input() listaAutores: Autor[];

  constructor() { }

  ngOnInit() {
  }

}
