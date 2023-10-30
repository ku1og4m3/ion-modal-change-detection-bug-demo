import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ModalContentComponent  implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  displayText!: string;

  constructor() { }

  alertDisplayText() {
    alert(this.displayText);
  }

  ngOnInit(): void {
    this.displayText = "onInit"
    // this.alertDisplayText()
  }

  ngAfterContentInit (): void {
    // this.displayText = "afterContentInit"
    // this.alertDisplayText()
  }

  ngAfterContentChecked(): void {
    // this.displayText = "afterContentChecked"
    // this.alertDisplayText()
  }

  ngAfterViewInit() {
    this.displayText = "afterViewInit"
    // this.alertDisplayText()
  }

  ngAfterViewChecked(): void {
    this.displayText = "afterViewChecked"
    // this.alertDisplayText()
  }

  ngOnDestroy(): void {
    this.displayText = "onDestroy"
    this.alertDisplayText()
  }

}
