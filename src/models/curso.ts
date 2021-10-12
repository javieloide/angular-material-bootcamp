import { Alumno } from "./alumno";

export class Curso {
  id: number;
  nombre: string;
  alumnos: Alumno[];

  constructor(id:number, nombre:string, alumnos: Alumno[]) {
    this.id=id;
    this.nombre=nombre;
    this.alumnos=alumnos;
  }
}
