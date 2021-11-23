import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-right',
  templateUrl: './test-right.component.html',
  styleUrls: ['./test-right.component.css']
})
export class TestRightComponent implements OnInit {

  public master = "Gabriel";
  public name = "";
  public greetings = "";

  public teste ="";

  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: any){
    console.log(event)
    this.greetings = event.type;
  }

  logMessage(value: any) {
    console.log(value);
  }

}
