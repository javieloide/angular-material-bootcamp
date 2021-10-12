import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from 'src/models/alumno';
import { Curso } from 'src/models/curso';
import { AlumnosService } from 'src/services/alumnos.service';
import { CursosService } from 'src/services/cursos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alumno-detail',
  templateUrl: './alumno-detail.component.html',
  styleUrls: ['./alumno-detail.component.css']
})
export class AlumnoDetailComponent implements OnInit {

  id:any;
  nombreUpdate: string;
  alumno: any;
  cursos: Curso[] = [];
  curso: Curso =
    {
      id:0,
      alumnos: [],
      nombre: ""
    };
  cursoSeleccionado: number;
  constructor(private activateRouted: ActivatedRoute,  private alumnosService: AlumnosService, private router: Router, private cursosService: CursosService) {
   this.nombreUpdate="";
   this.cursoSeleccionado=2;
  }

  ngOnInit(): void {
    this.id = this.activateRouted.snapshot.paramMap.get('id');
    this.id = Number.parseInt(this.id);
    this.getCursos();
    this.getAlumno();
  }
  getCurso(){
    this.cursosService.getCursoObservable(this.cursoSeleccionado).subscribe(curso => {
      this.curso=curso;
      console.log(this.curso);
    })
  }
  getCursos(){
    this.cursosService.getCursosObservable().subscribe(cursos => {
      this.cursos=cursos;
    }, err => {
      console.log(err);
    })
  }

  private getAlumno(){
    this.alumnosService.getAlumno(this.id).subscribe((alumno: Alumno) => {
      this.alumno = alumno;
      console.log(this.alumno)
      this.nombreUpdate = alumno.name;
      this.cursoSeleccionado = alumno.id_curso;
      this.getCurso();
    })

  }

  editAlumno(){
    this.alumnosService.getAlumno(this.id).subscribe(() => {
      this.alumno.name = this.nombreUpdate;
      this.alumno.id_curso = this.cursoSeleccionado;

      console.log(this.alumno);

      this.alumnosService.updateAlumno(this.alumno).subscribe();

      this.curso.alumnos.forEach(alumno => {
        if(alumno.id === this.alumno.id){
          let index = this.curso.alumnos.indexOf(alumno);
          this.cursosService.getCursoObservable(this.cursoSeleccionado).subscribe((curso)=>{
            this.curso=curso;
            this.curso.alumnos[index] = this.alumno;
            console.log(this.curso);
            this.cursosService.updateCursoObservable(this.curso).subscribe();
          })
        } else {
          this.curso.alumnos.push(this.alumno)
          this.cursosService.updateCursoObservable(this.curso).subscribe();
        }
      })
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Alumno actualizado correctamente',
        showConfirmButton: false,
        timer: 1500
      }).then(() =>{
        this.router.navigateByUrl('/component/alumnos');
      })
    })
  }

  deleteAlumno(){
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
        this.alumnosService.deleteAlumno(this.id).subscribe();
        Swal.fire(
          '¡Eliminado!',
          'El alumno ha sido eliminado.',
          'success'
        )
        this.router.navigateByUrl('/component/alumnos')
      }
    })
  }
}
