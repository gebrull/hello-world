import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-list-department',
  templateUrl: './list-department.component.html',
  styleUrls: ['./list-department.component.css']
})
export class ListDepartmentComponent implements OnInit {

  public selectedId : any;

  departments = [
    {"id":1, "name": "Angular"},
    {"id":2, "name": "Node"},
    {"id":3, "name": "MongoDB"},
    {"id":4, "name": "Ruby"},
    {"id":5, "name": "Bootstrap"}

  ]

  /**Para usar o routing dentro do códogo, precisamos importar o Router lá em cima.
   * Depois, vamos instanciar o router no construtor de department
   * Para poder acessar uma informação que é fornecida na rota, precisamos importar o
   * ActivatedRoute lá em cima
   */
  constructor(private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe((params : ParamMap) => {
      let id = Number(params.get('id'));
      this.selectedId = id;
    });

  }

  onSelect(department: any){
    /**Aqui chamamos a instância do router, e seu método navigate(), que recebe como argumento
     * um array com as informações necessárias para o Angular criar uma url. Nesse caso, o angular
     * pega o "/departments" e junta com o valor do department.id para criar a url: /departments/valor_id
     */
    // this.router.navigate(['/departments', department.id])

    /**Usar uma Url absoluta pode causar problemas se for necessário fazer alterações em algum elemento
     * que faça parte de qualquer Url. Por isso é bom utilizar a navegação relativa. Que não precisa levar
     * em consideração qual é a url atual para trabalhar
     */
    /**Os parametros do navigate() nesse caso, são o department.id que vai informar o caminho que será
     * anexado na rota atual (relativeTo: this.route)
    */
    this.router.navigate([department.id], {relativeTo: this.route});


  }

  isSelected(department : any){
    return department.id === this.selectedId;
  }

}
