import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.css']
})
export class DiretivasEstruturaisComponent implements OnInit {

  public isVisible = true;

  public color = "green";

  public colors = ["green", "red", "blue", "orange", "black", "white"];


  constructor() { }

  ngOnInit(): void {
  }

}
