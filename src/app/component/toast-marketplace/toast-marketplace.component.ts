import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast/toast.service';

@Component({
  selector: 'app-toast-marketplace',
  templateUrl: './toast-marketplace.component.html',
  styleUrls: ['./toast-marketplace.component.css']
})
export class ToastMarketplaceComponent implements OnInit {

  constructor(private toastService: ToastService) { }

  ngOnInit(): void {
  }


  showStandard() {
    this.toastService.show('I am a standard toast');
  }

  showSuccess() {
    this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });
  }

}
