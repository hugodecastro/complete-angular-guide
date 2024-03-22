import { Account } from '../shared/account.model';

export class AccountService {
  accounts: Account[] = [
    new Account('Master Account', 'active'),
    new Account('Test Account', 'inactive'),
    new Account('Hidden Account', 'unknown'),
  ];

  addAccount(name: string, status: string): void {
    this.accounts.push(new Account(name, status));
  }

  updateStatus(id: number, newStatus: string): void {
    this.accounts[id].status = newStatus;
  }
}
