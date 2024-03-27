// Services are a good way to centralize common used features
// A Service is just a normal TypeScript class
export class LoggingService {
  logStatusChanged(status: string): void {
    console.log('A server status changed, new status: ' + status);
  }
}
