import { Component } from '@angular/core';
import { CustomNotificationService } from 'projects/ngx-custom-notification/src/lib/ngx-custom-notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private notificationService: CustomNotificationService) {}

  showSuccessNotification(message: string) {
    this.notificationService.success(message);
  }

  showErrorNotification(message: string) {
    this.notificationService.error(message);
  }

  showWarningNotification(message: string) {
    this.notificationService.warning(message);
  }

  showInfoNotification(message: string) {
    this.notificationService.info(message);
  }
}
