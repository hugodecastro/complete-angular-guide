import { Injectable } from '@angular/core';

// @Injectable() decorator specifies that Angular can use this class in all components
@Injectable({
  providedIn: 'root', // it means that the Service is visible throughout the application
})
export class LoggingService {
  // This class works the same as the one in logging-old.service.ts
  constructor() {}
  logStatusChanged(status: string): void {
    console.log('A server status changed, new status: ' + status);
  }
}
