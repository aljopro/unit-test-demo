import { Account } from './account';

export class AccountService {
    constructor() {

    }

    public getAccounts(): Promise<Account[]> {
        return Promise.resolve([]);
    }
}

