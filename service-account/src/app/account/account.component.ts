import { Component, Input, inject } from '@angular/core';
import { AccountService } from '../services/account.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // provide tells angular how to create the service
  // providers: [LoggingService],
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;
  private loggingService?: LoggingService;
  private accountService?: AccountService;

  constructor() {
    // inject is an alternative way to create a dependency injection
    // it will work the same as the approach on new-account component
    this.loggingService = inject(LoggingService);
    this.accountService = inject(AccountService);
  }

  onSetTo(status: string): void {
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChanged(status);
    this.accountService.statusUpdated.emit(status);
  }
}
