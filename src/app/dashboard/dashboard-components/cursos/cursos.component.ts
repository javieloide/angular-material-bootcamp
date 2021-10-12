import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/models/alumno';
import { Curso } from 'src/models/curso';
import { CursosService } from 'src/services/cursos.service';
import { RecentSale, recentSales } from '../recent-table/recent-table-data';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  nombreModel: string = "nombre curso";

  cursos: Curso[] = [];
  alumnos: Alumno[] = [];

  cursoToAdd: Curso;

  tableData: RecentSale[];


  constructor(private cursosService: CursosService) {
    this.cursoToAdd = new Curso(0, "nombre curso", []);
    this.tableData = recentSales;
    console.log(this.tableData[4].Date.toDateString());
  }

  ngOnInit(): void {
    this.getCursosObservable();
  }

  getCursosObservable() {
    this.cursosService.getCursosObservable().subscribe(cursos => {
      this.cursos = cursos;
    }, error => {
      console.log(error);
    })
  }

  addCursoObservable(){
    this.cursoToAdd = new Curso(this.cursos.length+1,this.nombreModel, []);
    this.cursosService.addCursoObservable(this.cursoToAdd).subscribe(curso => {
      this.cursos.push(this.cursoToAdd);
    }, error => {
      console.log(error);
    });
    this.getCursosObservable();
  }


}
