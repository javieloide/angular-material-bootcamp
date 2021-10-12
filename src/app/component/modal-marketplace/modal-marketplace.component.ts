import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-marketplace',
  templateUrl: './modal-marketplace.component.html',
  styleUrls: ['./modal-marketplace.component.css']
})
export class ModalMarketplaceComponent implements OnInit {
  @ViewChild("content1", {static:true}) content1!: ElementRef;
  closeResult: string='';
  @Output() resultado: EventEmitter<String> = new EventEmitter<String>();
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open1() {
    this.resultado.emit("Evento Output");
		this.modalService.open(this.content1, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
			this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
	}

  private getDismissReason(reason: ModalDismissReasons): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return  `with: ${reason}`;
		}
	}

}
