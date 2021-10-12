import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactosService } from 'src/services/contactos.service';

@Component({
  selector: 'app-contacto-detail',
  templateUrl: './contacto-detail.component.html',
  styleUrls: ['./contacto-detail.component.css']
})
export class ContactoDetailComponent implements OnInit {

  id:any;
  contacto:any;
  constructor(private activateRouted: ActivatedRoute, private contactosService: ContactosService) {

  }

  ngOnInit(): void {
    this.id = this.activateRouted.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getItem();
  }

  private getItem(){
    const idParsed = Number.parseInt(this.id);
    this.contactosService.getContacto(idParsed).subscribe(contacto => {
      this.contacto = contacto;
    });
  }
}
