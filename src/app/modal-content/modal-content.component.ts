import { AfterViewChecked, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ModalContentComponent  implements OnInit, AfterViewChecked {

  displayText!: string;

  constructor() { }

  ngOnInit() {
    this.displayText = "onInit";
  }

  ngAfterViewChecked(): void {
    this.displayText = "afterViewChecked";
  }

}
