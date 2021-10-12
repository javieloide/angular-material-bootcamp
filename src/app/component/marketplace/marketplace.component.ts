import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent implements OnInit {
  showed:boolean = true;
  constructor() {
  }

  ngOnInit(): void {
  }

  show(){
    this.showed=!this.showed;
  }

  salida(evento: string){
    console.log(evento);
  }

}
