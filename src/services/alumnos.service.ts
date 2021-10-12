import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Alumno } from 'src/models/alumno';

@Injectable({
  providedIn: 'root'
})

export class AlumnosService {
  private alumnosUrl = "api/alumnos";
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
  getAlumnos(): Observable<Alumno[]>{
      return this.http.get<Alumno[]>(this.alumnosUrl).pipe(catchError(this.handleError<Alumno[]>('getAlumnos',[])))
  }

  getAlumno(id: number): Observable<Alumno> {
    return this.http.get<Alumno>(this.alumnosUrl + '/' + id);
  }

  addAlumno(alumno: Alumno){
    return this.http.post(this.alumnosUrl, alumno);
  }

  updateAlumno(alumno: Alumno){
    return this.http.put(this.alumnosUrl, alumno);
  }

  deleteAlumno(id: number){
    return this.http.delete(this.alumnosUrl + '/' + id);
  }
}
