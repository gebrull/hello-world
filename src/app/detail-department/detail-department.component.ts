import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail-department',
  templateUrl: './detail-department.component.html',
  styleUrls: ['./detail-department.component.css']
})
export class DetailDepartmentComponent implements OnInit {

  public departmentId : any;
  

  /**Para usar o routing dentro do códogo, precisamos importar o Router lá em cima.
   * Depois, vamos instanciar o router no construtor do detail-department.
   * Para poder detalhar o departamento através do parâmetro recebido através da rota, primeiro 
   * precisamos importar o ActivatedRoute lá em cima.
   * Depois, iremos instânciaá-lo no construtor do detail-department */
  constructor(private route : ActivatedRoute, private router : Router) { }


  /**Depois disso, no ngOnInit() iremos pegar o id que queremos através do método 
   * No método, a nossa instância de route, nos fornece um snapshot da rota atual,
   * com isso, vamos usar o mapeamento de parâmetros fornecidos pelo snapshot e pegar
   * o atual "id" da url. E é claro, o nosso resultado será convertido para numero.
  */
  ngOnInit(): void {
    /**Mas existe um problema ao usar o snapshot. Sempre que o angular muda um component, ele
     * verifica se precisa ou não carregar um component novo ou apenas reusar o que já existe.
     * E com isso, ele não atualiza o departmentId, já que o ngOnInit() não será chamado novamente.
     */
    // let id = Number(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;

    /**E é por isso que iremos usar Observables 
     * O paramMap retorna um observable. Por isso, precisamos dar subscribe nele.
     * Criaremos uma instância de ParamMap, que vai receber o Observable do subscribe.
     * Depois, pegamos o params, e extraimos o 'id' dele, passamos para number e atribuimos ao id.
     * E por último, atualizamos o departmentId
    */

    this.route.paramMap.subscribe((params : ParamMap) => {
      let id = Number(params.get('id'));
      this.departmentId = id;
    });

  }

  /** Aqui iremos criar os métodos para poder navegar entre os departamentos */
  goPrevious(){
    // Aqui apenas setamos qual seria o id anterior
    let previousId = this.departmentId-1;

    /**Aqui chamamos a instância do router, e seu método navigate(), que recebe como argumento
     * um array com as informações necessárias para o Angular criar uma url. Nesse caso, o angular
     * pega o "/departments" e junta com o valor do department.id para criar a url: /departments/valor_id
     */
    this.router.navigate(['/departments', previousId]);
  }

  // O goNext() faz o mesmo que o goPrevious(), só que com o id_atual + 1
  goNext(){
    let nextId = this.departmentId+1;
    this.router.navigate(['/departments', nextId]);
  }

  gotoDepartments(){
    // Irá verificar se o departamento selecionado possui id
    let selectedId = this.departmentId ? this.departmentId : null;

    /**Nesse cado do navigate, o segundo parâmetro vai ser um objeto
     * contendo chaves e valores
     */
    this.router.navigate(["/departments", {id: selectedId}]);
  }




}
