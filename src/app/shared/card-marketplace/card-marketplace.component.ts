import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-marketplace',
  templateUrl: './card-marketplace.component.html',
  styleUrls: ['./card-marketplace.component.css']
})
export class CardMarketplaceComponent implements OnInit {
  @Input() mensaje: string;
  @Input() title :string;
  constructor() {
    this.mensaje = "";
    this.title = "";
  }

  ngOnInit(): void {
  }

}
