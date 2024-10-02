# NgxCustomNotification

A customizable notification library for Angular applications, designed to work seamlessly with Angular 16, Bootstrap 5, and FontAwesome.

## Installation

To install the library, run:

```bash
npm install ngx-custom-notification
```

Then add the following styles:

```scss
@import "~node_modules/bootstrap/dist/css/bootstrap.min.css";
@import "~node_modules/font-awesome/css/font-awesome.min.css";
```

## Usage

Here's a basic example of how to use the library in your Angular project:

```typescript
import { CustomNotificationComponent } from 'ngx-custom-notification';

@NgModule({
  imports: [
    CustomNotificationComponent,
    // other imports
  ],
})
export class AppModule { }
```

In your component:

```typescript
import { Component } from '@angular/core';
import { CustomNotificationService } from 'ngx-custom-notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private notificationService: CustomNotificationService) {}

  showSuccess() {
    this.notificationService.success('This is a success message!', {
      title: 'Success',
      duration: 3000,
      position: 'top-end',
      closeButton: true
    });
  }

  showError() {
    this.notificationService.error('This is an error message!', {
      title: 'Error',
      duration: 3000,
      position: 'top-end',
      closeButton: false
    });
  }
}
```

Include the <ngx-custom-notification> component in your template.

```typescript
<button (click)="showSuccess()" class="btn btn-success">Show Success</button>
<button (click)="showError()" class="btn btn-danger">Show Error</button>

<ngx-custom-notification></ngx-custom-notification>
```

## Customization
You can customize the notification options by passing an options object that includes:
- type: The type of notification (success, warning, error, info).
- title: The title of the notification.
- duration: How long the notification should be visible (in milliseconds).
- position: The position of the notification on the screen.
- closeButton: Boolean indicating whether to show a close button.
