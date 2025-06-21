

export type NotificationType = 'success' | 'error';

export class NotificationService {
  notification: {
    show: boolean,
    message: string,
    type: NotificationType
  };

   showNotification(message: string, type?: NotificationType): void;

  getNotification(): {
    show: boolean;
    message: string;
    type: NotificationType;
  };
}

