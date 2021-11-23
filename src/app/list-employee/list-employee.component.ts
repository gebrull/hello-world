import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

  /** Basicamente, o que acontece aqui é: 
   * 1- nós temos uma instância de employeeService: (private _employeeService : EmployeeService) 
   * 2- usamos a nossa instância para chamar o método getEmployees()
   * 3- o método getEmployees() retorna um Observable, então para receber os dados, nós precisamos dar subscribe
   * 4- após dar o subscribe, o array de dados chega assincronamente
   * 5- nós vamos associar os dados recebidos à classe IEmployees usando a sintaxe da seta dupla
   */


  public employees: any = [];
  public errorMsg: any;

  // Aqui diz para o contrutor que quando uma nova instância de DetailEmployee surgir, ele será construído com base
  // nos dados fornecidos por um método de EmployeeService
  constructor(private _employeeService: EmployeeService) { }

  // Esse método é chamado quando um component é inicializado
  ngOnInit(): void {
    // Quando for carregado, esse component vai inicializar com os valores fornecidos pelo método getEmployees()
    // this.employees = this._employeeService.getEmployees();

    /** Abaixo, vamos usar o método getEmployees(), mas na forma de conseguir os valores através de um subscribe no Observable
      * Essa é a sintaxe para obter os valores
      * o erro funciona da mesma forma, precisamos declarar uma variável para receber o erro e atribuimos ela aqui
      * Se houver algum erro na hora de obter os dados da url, o erro será mostrado
    */
    this._employeeService.getEmployees().subscribe(data => this.employees = data,
                                                   error =>this.errorMsg = error);
  }

}
