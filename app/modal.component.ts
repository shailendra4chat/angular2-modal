import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { trigger } from '@angular/animations';

@Component({
  selector: 'app-modal',
  templateUrl: 'app/modal.component.html',
  styleUrls: ['app/modal.component.css'],
  animations: [
    trigger('modal', [])
  ]
})
export class ModalComponent {
  @Input() visible: boolean;
  
  constructor(ele: ElementRef) {
    //console.log(ele.nativeElement.select("#firstname"))
  }
  
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  


  send() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    
  }
  
  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  
  
}