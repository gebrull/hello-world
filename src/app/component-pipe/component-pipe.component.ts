import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-pipe',
  templateUrl: './component-pipe.component.html',
  styleUrls: ['./component-pipe.component.css']
})
export class ComponentPipeComponent implements OnInit {

  public name = "Gabriel está estudando angular";

  public person = {
    "firstName": "Gabriel",
    "lastName": "Souza"
  }

  public date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
