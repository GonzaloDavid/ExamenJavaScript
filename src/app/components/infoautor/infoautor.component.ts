import {Component, Input, OnInit} from '@angular/core';
import {Autor} from '../../models/autor';

@Component({
  selector: 'app-infoautor',
  templateUrl: './infoautor.component.html',
  styleUrls: ['./infoautor.component.css']
})
export class InfoautorComponent implements OnInit {

  @Input() autor: Autor;

  constructor() { }

  ngOnInit() {
  }

}
