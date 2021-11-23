import { Component, OnInit } from '@angular/core';

@Component({

  // Existem três formas de especificar o selector para o component 
  // pode usar 'app-test': aí pra chamar ele no html usa a tag <app-test></app-test>
  // pode usar '.app-test': aí pra chamar ele no html usa ele como uma classe. Ex: <div class="app-test">
  // pode usar '[app-test]': aí pra chamar ele no html usa ele como um atributo. Ex: <div app-test>


  // O templateUrl é usado pra mostrar o html do component que vc tá inserindo
  // É possível mudar de 'templateUrl' para 'template', aí em 
  // template dá pra escrever o código que iria dentro de um html

  // A mesma coisa de template pode ser feita para style
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  // A variável 'name' pode ser acessada dentro do html usando '{{name}}'
  public name = "Gabriel";
  public myId = "TestId";
  public isDisabled = true;
  public siteUrl = window.location.href;
  public isSpecial = true;
  public hasError = true;
  public classSucess = "text-sucess";
  public styleColor = "purple"

  public day = false;


  // Aqui definimos um objeto que vai retornar ou não os valores em string dependendo
  // das condições abaixo, por exemplo: "text-special" vai estar na lista se this.isSpecial for true

  public messageClasses = {
    "text-sucess": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  
  public dayOrNight = {
    "day-time": this.day,
    "night-time": !this.day
  }

  // Aqui vamos definir uma lista de estilos que vai ser chamado lá no html
  public messageStyle = {
    color: "yellow",
    fontStyle: "italic"
  }



  ngOnInit(): void {
  }


  // Podemos adicionar metodos

  greetUser(){
    return "Olá " + this.name;
  }




}
