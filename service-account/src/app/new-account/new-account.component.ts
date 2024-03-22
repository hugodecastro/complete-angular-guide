import { Component } from '@angular/core';
import { AccountService } from '../services/account.service';
import { LoggingService } from '../services/logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // provide tells angular how to create the service
  providers: [LoggingService],
  /*
  providers: [LoggingService, AccountService],
  by assigning the provider in the child component, a new instance is created (separated from the parent component)
  with this, all changes in the child component service instance won't affect the parent one
  to fix this behavior, we need to remove from provider list and only keep the reference in the constructor
  */
})
export class NewAccountComponent {
  // an service is not used by instantiating an object (although it would work),
  // therefore we need to add it on constructor since it'll automatically injects an instance in the class (dependency injection)
  constructor(
    private loggingService: LoggingService,
    private accountService: AccountService
  ) {}

  onCreateAccount(accountName: string, accountStatus: string): void {
    this.accountService.addAccount(accountName, accountStatus);
    this.loggingService.logStatusChanged(accountStatus);
  }
}
