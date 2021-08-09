import { addHours } from './add-hours';
const testDate = new Date('2000/01/01');

// addHours
// =============================================================================
test('return a date with hours added', () => {
    const date = addHours(testDate, 2);
    expect(date.getHours()).toBe(2);
    expect(date.getMinutes()).toBe(0);
    expect(date.getSeconds()).toBe(0);
    expect(date.getMilliseconds()).toBe(0);
});

test('return a date with hours subtracted', () => {
    const date = addHours(testDate, -2);
    expect(date.getHours()).toBe(22);
    expect(date.getMinutes()).toBe(0);
    expect(date.getSeconds()).toBe(0);
    expect(date.getMilliseconds()).toBe(0);
});