import { Component } from '@angular/core';
import { CustomNotificationService } from './ngx-custom-notification.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { trigger, transition, style, animate } from '@angular/animations';

/**
 * Component for displaying custom notifications in the application.
 * This component subscribes to the notification service to receive
 * notifications and display them.
 */
@Component({
  selector: 'ngx-custom-notification',
  templateUrl: './ngx-custom-notification.component.html',
  standalone: true,
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 })) 
      ])
    ])
  ]
})
export class CustomNotificationComponent {

  isVisible = false; // Flag to control visibility of the notification
  message!: string; // Message to display in the notification
  title!: string | any; // Title of the notification (optional)
  type!: 'success' | 'warning' | 'error' | 'info'; // Type of notification for styling
  position: 'top-end' | 'top-start' | 'bottom-end' | 'bottom-start' = 'top-end'; // Position of the notification on the screen
  iconClass!: string; // Class for the icon based on notification type
  positionClass!: string; // Class for positioning based on the specified position
  closeButton!: boolean | any; // Flag to determine if a close button should be displayed

  private notificationTimeout!: any; // Timeout reference for automatic hiding of notifications

  constructor(private service: CustomNotificationService) {}

  ngOnInit() {
    this.service.notification$.subscribe(( { message: msg, options }) => {
      this.isVisible = true;
      this.message = msg;
      this.type = options.type || 'success';
      this.position = options.position || 'top-end';
      this.title = options.title;
      this.iconClass = this.iconClasses[this.type];
      this.positionClass = this.positionClasses[this.position];
      this.closeButton = options.closeButton ?? true;

      if (this.notificationTimeout) {
        clearTimeout(this.notificationTimeout);
      }
  
      // Set a timeout to automatically hide the notification after a specified duration
      this.notificationTimeout = setTimeout(() => {
        this.hide();
      }, options.duration || this.service.defaultOptions().duration); 
    });
  }

  /**
   * Hides the notification.
   */
  hide() {
    this.isVisible = false;
  }

  iconClasses = {
    'success': "fa fa-check-circle text-success",
    'warning': "fa fa-exclamation-circle text-warning",
    'error': "fa fa-times-circle text-danger",
    'info': "fa fa-info-circle text-info",
  }

  positionClasses = {
    'top-end': 'top-0 end-0',
    'top-start': 'top-0 start-0',
    'bottom-end': 'bottom-0 end-0', 
    'bottom-start': 'bottom-0 start-0',
  }
}
