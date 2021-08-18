import { AccountService } from '../account/account-service';
import { MortgageService } from '../account/mortgage-service';

describe('Mortgage Service', () => {
    it('expects accounts to be called only once', async () => {
        const accountService = new AccountService();
        const service = new MortgageService(accountService);

        //Introduce our spy
        const accountSpy = jest.spyOn(accountService, 'getAccounts');

        await service.getMortgageAccounts();
        expect(accountSpy).toHaveBeenCalledTimes(1);
    });
});
