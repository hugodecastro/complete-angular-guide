import { EventEmitter, Injectable } from '@angular/core';
import { Account } from '../shared/account.model';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountService {
  accounts: Account[] = [
    new Account('Master Account', 'active'),
    new Account('Test Account', 'inactive'),
    new Account('Hidden Account', 'unknown'),
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {} // since is provided in app.module than can be used anywhere

  addAccount(name: string, status: string): void {
    this.accounts.push(new Account(name, status));
    this.loggingService.logStatusChanged(status);
  }

  updateStatus(id: number, newStatus: string): void {
    this.accounts[id].status = newStatus;
    this.loggingService.logStatusChanged(newStatus);
  }
}
