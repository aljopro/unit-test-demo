import { addMilliseconds } from './add-milliseconds';
const testDate = new Date('2000/01/01');

// addMilliseconds
// =============================================================================
test('return a date with milliseconds added', () => {
    const expected = testDate.getTime() + 100;
    expect(addMilliseconds(testDate, 100).getTime()).toBe(expected);
});

test('return a date with milliseconds subtracted', () => {
    const expected = testDate.getTime() - 100;
    expect(addMilliseconds(testDate, -100).getTime()).toBe(expected);
});
