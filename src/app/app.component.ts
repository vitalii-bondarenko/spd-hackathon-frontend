import { Component } from '@angular/core';

import {SnotifyService, SnotifyPosition, SnotifyToastConfig} from 'ng-snotify';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>' +
    '<ng-snotify></ng-snotify>'
})
export class AppComponent {}
