import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-edith',
  templateUrl: './modal-edith.component.html',
  styleUrls: ['./modal-edith.component.css']
})
export class ModalEdithComponent {
  @Input() idDeuda:number;

  /**
   *
   */
  constructor() {
    this.idDeuda=0;
    
  }
}
