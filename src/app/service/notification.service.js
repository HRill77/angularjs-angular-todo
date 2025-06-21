
// export class NotificationService {
//   notification = {
//     show: false,
//     message: '',
//     type: 'success'
//   };

//   showNotification(message, type = 'success') {
//     this.notification.message = message;
//     this.notification.type = type;
//     this.notification.show = true;

//     setTimeout(() => {
//       this.notification.show = false;
//     }, 3000);
//   }

//   getNotification() {
//     return this.notification;
//   }
// }
// notification.service.js
(function () {
  'use strict';

  angular.module('todoApp')
    .service('NotificationService', NotificationService);

  NotificationService.$inject = [];

  function NotificationService() {
    this.success = function(message) {
      window.alert('Success: ' + message);
    };

    this.error = function(message) {
      window.alert('Error: ' + message);
    };

    this.info = function(message) {
      window.alert('Info: ' + message);
    };

    this.warn = function(message) {
      window.alert('Warning: ' + message);
    };
  }
})();
