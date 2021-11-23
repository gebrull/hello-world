import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {

  // URL de um arquivo json local. Mas também serviria se fosse uma url de algum site online que disponibilizasse os dados
  private _url: string = "/assets/data/employees.json";

  constructor( private http: HttpClient) { }

  /**
   * Com isso, nós podemes pegar o json que está disponibilizado na URL setada
   * Também iremos fazer o cast de  Observable para a classe IEmployee que criamos no employees.ts
   * Podemos também, tratar erros. E para isso, nos usaremos o metodo catchError(), que vai receber o nome de um método
   * como argumento. Mas para usar o catchError(), precisamos usar o pipe. Por isso a sintaxe
  */
  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url)
                    .pipe(catchError(this.errorHandler));
                     
  }

  /**
   * o throError serve para tratar quando o retorno do tipo Observable apresentar 
   * algum erro na hora de obter os dados da url 
   */
  errorHandler(error: HttpErrorResponse){
    return throwError(error.message || "Server Error");
    
  }



}
