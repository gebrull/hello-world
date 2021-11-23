import { Component } from '@angular/core';


// Esse component é basicamente uma anexo da classe abaixo
// Esse component também diz ao Angular que essa classe é uma classe de component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicação de aprender';

  public firstName = "Gabriel";
  public lastName = "Souza";
  
  // Aqui é a declaração da variável que vai receber os dados do component filho
  public message = "";
}
