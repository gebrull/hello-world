import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {

  departments = [
    {"id":1, "name": "Angular"},
    {"id":2, "name": "Node"},
    {"id":3, "name": "MongoDB"},
    {"id":4, "name": "Ruby"},
    {"id":5, "name": "Bootstrap"}

  ]

  /**Para usar o routing dentro do códogo, precisamos importar o Router lá em cima.
   * Depois, vamos instanciar o router no construtor de department
   */
  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onSelect(department: any){
    /**Aqui chamamos a instância do router, e seu método navigate(), que recebe como argumento
     * um array com as informações necessárias para o Angular criar uma url. Nesse caso, o angular
     * pega o "/departments" e junta com o valor do department.id para criar a url: /departments/valor_id
     */
    this.router.navigate(['/departments', department.id])
  }


}
