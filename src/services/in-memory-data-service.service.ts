import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ROUTES } from '../app/shared/sidebar/menu-items';
import { RouteInfo } from '../app/shared/sidebar/sidebar.metadata';
import { ALUMNOS } from '../json/alumnos.json';
import { CURSOS } from '../json/cursos.json';
import { Alumno } from '../models/alumno';
import { Curso } from '../models/curso';


@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService{

  constructor() { }

  createDb(){
    const alumnos: Alumno[] = ALUMNOS;

    const cursos: Curso[] = CURSOS;

    const sidebar: RouteInfo[] = ROUTES;

    return {sidebar, alumnos, cursos};
  }
}
