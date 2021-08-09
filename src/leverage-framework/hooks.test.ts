describe('scoped block', () => {
    beforeAll(() => console.log('beforeAll'));
    afterAll(() => console.log('afterAll'));
  
    beforeEach(() => console.log('beforeEach'));
    afterEach(() => console.log('afterEach'));
  
    it('runs test 1', () => console.log('test 1'));
    it('runs test 2', () => console.log('test 2'));
  });
  