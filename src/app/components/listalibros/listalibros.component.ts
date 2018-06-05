import {Component, Input, OnInit} from '@angular/core';
import {Autor} from '../../models/autor';

@Component({
  selector: 'app-listalibros',
  templateUrl: './listalibros.component.html',
  styleUrls: ['./listalibros.component.css']
})
export class ListalibrosComponent implements OnInit {
  @Input() autor: Autor;
  constructor() { }

  ngOnInit() {
  }

}
