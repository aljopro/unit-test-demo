import { Account } from '../account/account';
import { AccountService } from '../account/account-service';
import { AccountType } from '../account/account-type';
import { MortgageService } from '../account/mortgage-service';

jest.mock('../account/account-service');

describe('Mortgage Service', () => {
    describe.each([
        { ats: [AccountType.Checking], expected: 0 },
        { ats: [AccountType.Checking, AccountType.Saving, AccountType.Mortgage], expected: 1 },
        { ats: [AccountType.Mortgage, AccountType.Mortgage, AccountType.Mortgage], expected: 3 }
    ])('Get Mortgage Accounts', ({ ats, expected }) => {
        it(`gets ${expected} mortgage accounts`, async () => {
            (AccountService as jest.Mock).mockImplementation(() => {
                return {
                    getAccounts: () => {
                        return Promise.resolve(
                            ats.map((accountType) => {
                                return new Account({ accountType })
                            }));
                    },
                };
            });
            const service = new MortgageService(new AccountService());
            const accounts = await service.getMortgageAccounts();

            expect(accounts).not.toBeNull();
            expect(accounts).toHaveLength(expected);
        });
    });
});