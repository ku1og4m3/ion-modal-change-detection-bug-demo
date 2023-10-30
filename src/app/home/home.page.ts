import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit {

  showModal: BehaviorSubject<boolean>;

  constructor() {
    this.showModal = new BehaviorSubject(false);
  }

  ngOnInit() {
    this.openModal();
  }

  openModal() {
    this.showModal.next(true);
  }

  hideModal() {
    this.showModal.next(false);
  }

}
