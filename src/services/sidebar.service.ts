import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RouteInfo } from '../app/shared/sidebar/sidebar.metadata';

@Injectable({
  providedIn: 'root'
})

export class SidebarService {
  private sidebarUrl = "api/sidebar";
  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T){
    return (error: any): Observable<T> => {
      console.log(error);

      console.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
  getSidebars(): Observable<RouteInfo[]>{
      return this.http.get<RouteInfo[]>(this.sidebarUrl).pipe(catchError(this.handleError<RouteInfo[]>('getSidebars',[])))
  }

  getSidebar(id: number): Observable<RouteInfo> {
    return this.http.get<RouteInfo>(this.sidebarUrl + '/' + id);
  }

  addSidebar(sidebar: RouteInfo){
    return this.http.post(this.sidebarUrl, sidebar);
  }

  updateSidebar(sidebar: RouteInfo){
    return this.http.put(this.sidebarUrl, sidebar);
  }

  deleteSidebar(id: number){
    return this.http.delete(this.sidebarUrl + '/' + id);
  }
}
