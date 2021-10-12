import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/models/alumno';
import { Curso } from 'src/models/curso';
import { AlumnosService } from 'src/services/alumnos.service';
import { CursosService } from 'src/services/cursos.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  alumnos: Alumno[] = [];
  cursos: Curso[] = [];
  nombreModel: string;
  cursoSeleccionado: number;
  constructor(private alumnosService: AlumnosService, private cursosService: CursosService) {
    this.nombreModel= "nombre alumno";
    this.cursoSeleccionado= 0;
  }

  ngOnInit(): void {
    this.getCursos();
    this.getAlumnos();
  }

  getAlumnos(){
    this.alumnosService.getAlumnos().subscribe(alumnos => {
      console.log(alumnos)
      this.alumnos = alumnos;
    }, err => {
      console.log(err);
    })
  }

  getCursos(){
    this.cursosService.getCursosObservable().subscribe(cursos => {
      console.log(cursos);
      this.cursos=cursos;
    })
  }

  addAlumno(){
    const alumno = {
      id: this.alumnos.length+2,
      name:this.nombreModel,
      id_curso: this.cursoSeleccionado
    }
    this.alumnosService.addAlumno(alumno).subscribe(() => {
      this.cursosService.getCursoObservable(this.cursoSeleccionado).subscribe((curso) => {
        curso.alumnos.push(alumno);
        console.log(curso.alumnos);
        this.cursosService.updateCursoObservable(curso).subscribe()
      })
    });
    this.getAlumnos();
  }


}
