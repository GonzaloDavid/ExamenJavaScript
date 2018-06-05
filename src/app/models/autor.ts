import {Libro} from './libro';

export class Autor {
  nombre: string;
  apellidos: string;
  fechaNacimiento: string;
  numeroLibros: number;
  esEcuatoriano: boolean;
  imagen: string;
  libros: Libro[] = [];
}
