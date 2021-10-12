import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private contactosUrl = "api/cursos";

  constructor(private http: HttpClient) { }


  getCursosObservable(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.contactosUrl)
  }

  getCursoObservable(id: number): Observable<Curso>{
    return this.http.get<Curso>(this.contactosUrl + '/' + id);
  }

  addCursoObservable(curso: Curso){
    return this.http.post(this.contactosUrl, curso);
  }

  updateCursoObservable(curso: Curso){
    return this.http.put(this.contactosUrl, curso);
  }

  deleteCursoObservable(id: number){
    return this.http.delete(this.contactosUrl + '/' + id)
  }

}
