import { Account } from '../account/account';
import { AccountService } from '../account/account-service';
import { AccountType } from '../account/account-type';
import { MortgageService } from '../account/mortgage-service';

jest.mock('../account/account-service');

describe('Mortgage Service', () => {
    it('gets mortgage accounts', async () => {
        (AccountService as jest.Mock).mockImplementation(() => {
            return {
                getAccounts: () => {
                    return Promise.resolve([
                        new Account({ accountType: AccountType.Checking }),
                        new Account({ accountType: AccountType.Saving }),
                        new Account({ accountType: AccountType.Mortgage }),
                    ])
                },
            };
        });

        const service = new MortgageService(new AccountService());
        const accounts = await service.getMortgageAccounts();

        expect(accounts).not.toBeNull();
        expect(accounts).toHaveLength(1);
        accounts.forEach((account) => {
            expect(account.accountType).toBe(AccountType.Mortgage);
        });
    });
})
