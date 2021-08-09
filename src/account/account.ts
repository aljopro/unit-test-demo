import { AccountType } from './account-type';

export class Account {
    public accountType;

    constructor(parameters: { accountType: AccountType}) {
        const { accountType } = parameters;

        this.accountType = accountType;
    }
}
