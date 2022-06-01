import { Component, OnInit } from '@angular/core';
import {AppLockServiceService} from '../../services/app-lock-service.service';

@Component({
  selector: 'app-page-lock',
  templateUrl: './page-lock.component.html',
  styleUrls: ['./page-lock.component.scss']
})
export class PageLockComponent implements OnInit {

    pin = '';

  constructor(private appLock: AppLockServiceService) { }

  ngOnInit(): void {
  }

  onPinEnter() {
      this.appLock.unlockPage(this.pin);
  }

}
