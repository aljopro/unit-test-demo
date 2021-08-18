import { AccountService } from '../account/account-service';
import { MortgageService } from '../account/mortgage-service';

jest.mock('../account/account-service');

describe('Mortgage Service', () => {
    it('throws an error if account isn\'t found', async () => {
        (AccountService as jest.Mock).mockImplementation(() => {
            return {
                getAccounts: () => {
                    return Promise.reject(new Error('Response 404 Not Found'));
                },
            };
        });

        const service = new MortgageService(new AccountService());

        await expect(() => {
            return service.getMortgageAccounts();
        }).rejects.toThrow();
    });
});
