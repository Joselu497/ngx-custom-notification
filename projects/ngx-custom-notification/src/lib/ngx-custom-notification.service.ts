import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { IOptions } from '../interfaces/ioptions';

/**
 * Service for managing custom notifications in the application.
 * This service provides methods to show different types of notifications
 * (success, warning, error, info) and allows for customization of the notification options.
 */
@Injectable({
  providedIn: 'root',
})
export class CustomNotificationService {
  private notificationSubject = new Subject<{ message: string; options: IOptions}>();
  notification$ = this.notificationSubject.asObservable();

  /**
   * Displays a notification with the specified message and options.
   * Clears any existing notifications before showing the new one.
   *
   * @param {string} message - The message to display in the notification.
   * @param {IOptions} [options=this.defaultOptions()] - The options for customizing the notification.
   */
  show(message: string, options: IOptions =  this.defaultOptions()) {
    this.clear();

    this.notificationSubject.next({ 
      message, 
      options,
    });
  }

  /**
   * Displays a success notification.
   *
   * @param {string} message - The message to display in the success notification.
   * @param {IOptions} [options=this.defaultOptions()] - The options for customizing the success notification.
   */
  success(message: string, options: IOptions = this.defaultOptions()) {
    options.type = 'success';
    options.title = options.title ?? 'Success'
    this.show(message, options);
  }

  /**
   * Displays a warning notification.
   *
   * @param {string} message - The message to display in the warning notification.
   * @param {IOptions} [options=this.defaultOptions()] - The options for customizing the warning notification.
   */
  warning(message: string, options: IOptions = this.defaultOptions()) {
    options.type = 'warning';
    options.title = options.title ?? 'Warning'
    this.show(message, options);
  }

  /**
   * Displays an error notification.
   *
   * @param {string} message - The message to display in the error notification.
   * @param {IOptions} [options=this.defaultOptions()] - The options for customizing the error notification.
   */
  error(message: string, options: IOptions = this.defaultOptions()) {
    options.type = 'error';
    options.title = options.title ?? 'Error'
    this.show(message, options);
  }


  /**
   * Displays an info notification.
   *
   * @param {string} message - The message to display in the info notification.
   * @param {IOptions} [options=this.defaultOptions()] - The options for customizing the info notification.
   */
  info(message: string, options: IOptions = this.defaultOptions()) {
    options.type = 'info';
    options.title = options.title ?? 'Info'
    this.show(message, options);
  }

  /**
   * Clears any existing notifications.
   */
  clear() {
    const options = this.defaultOptions();
    return this.notificationSubject.next({ message: '', options });
  }

  /**
   * Provides default options for notifications.
   *
   * @returns {IOptions} - An object containing default values for type, title, duration, and position of notifications.
   */
  defaultOptions(): IOptions {
    return {
      type: 'success',
      title: 'Success',
      duration: 5000,
      position: 'top-end',
      closeButton: true,
    }
  }
}