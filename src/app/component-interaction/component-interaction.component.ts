import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.css']
})
export class ComponentInteractionComponent implements OnInit {

  // Usamos o Input() para falar que os dados estão vindo do component pai
  @Input() public parentFirstName: any;
  // Outra forma de receber os dados que estão vindo do component pai é colocando o nome que vem do 
  // html do component dentro do @Input, como no exemplo abaixo
  @Input('parentLastName') parentLastName: any;




  // Agora iremos enviar dados do component filho para o pai
  // Mas não tem como fazer isso da mesma forma, pq não existe uma chamada do component pai dentro do component filho.
  // Entao para isso usaremos eventos.
  // Usamos o @Output, e o nosso childEvent será um emissor de eventos(EventEmitter)
  @Output() public childEvent = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }


  // Para realmente lançar o evento, precisamos de um método que será invocado.
  // No nosso caso, esse método, chamado invocaEvent() é invocado pelo botão no html

  invocaEvent(){
    // Para invocar o evento, usamos:
    this.childEvent.emit('Olá para o component pai!');
  }

}
