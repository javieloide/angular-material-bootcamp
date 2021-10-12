import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/models/alumno';
import { Curso } from 'src/models/curso';
import { AlumnosService } from 'src/services/alumnos.service';
import { CursosService } from 'src/services/cursos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-curso-item',
  templateUrl: './curso-item.component.html',
  styleUrls: ['./curso-item.component.css']
})
export class CursoItemComponent implements OnInit {
  id:any;
  nombreUpdate: string;
  curso: any;
  alumnoSeleccionado: number;
  alumnos: Alumno[]= []
  constructor(private activateRouted: ActivatedRoute, private cursosService: CursosService, private alumnosService: AlumnosService, private router: Router) {
   this.alumnoSeleccionado = 0;
   this.nombreUpdate="";
  }

  ngOnInit(): void {
    this.id = this.activateRouted.snapshot.paramMap.get('id');
    console.log(this.id);
    //this.getItem();
    this.getCursoObservable();
    this.getAlumnos();
  }

  getAlumnos(){
    this.alumnosService.getAlumnos().subscribe(alumnos => {
      this.alumnos=alumnos;
    })
  }

  capturar(){
    console.log(this.alumnoSeleccionado);
  }

  addAlumno(){
    this.alumnosService.getAlumno(this.alumnoSeleccionado).subscribe(alumno => {
        console.log(alumno);
        this.curso.alumnos.push(alumno);
    });
  }

  private getCursoObservable(){
    this.cursosService.getCursoObservable(this.id).subscribe((curso: Curso) => {
      this.curso = curso;
      this.nombreUpdate = curso.nombre;
    })
  }

  editCurso(){
    this.cursosService.getCursoObservable(this.id).subscribe(() => {
      this.curso.nombre = this.nombreUpdate;
      console.log(this.curso);
      this.cursosService.updateCursoObservable(this.curso).subscribe();
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Curso actualizado correctamente',
        showConfirmButton: false,
        timer: 1500
      }).then(() =>{
        this.router.navigateByUrl('/dashboard');
      })
    })
  }

  deleteCurso(){
    Swal.fire({
      title: '¿Estas seguro?',
      text: "¡Una vez eliminado sera irreversible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, eliminalo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.cursosService.deleteCursoObservable(this.id).subscribe();
        Swal.fire(
          '¡Eliminado!',
          'El curso ha sido eliminado.',
          'success'
        )
        this.router.navigateByUrl('/dashboard');
      }
    })

  }

}
