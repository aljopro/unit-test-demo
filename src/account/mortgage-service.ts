import { Account } from './account';
import { AccountService } from './account-service';
import { AccountType } from './account-type';

export class MortgageService {
    public service: AccountService;

    constructor( service: AccountService) {
        this.service = service;
    }

    public async getMortgageAccounts(): Promise<Account[]> {
        return (await this.service.getAccounts())
            .filter((account) => account.accountType === AccountType.Mortgage);
    }
}
