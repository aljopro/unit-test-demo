import { addMilliseconds } from './add-milliseconds';

export function addHours(dirtyDate: Date, hours: number): Date {
    return addMilliseconds(dirtyDate, hours * 3600000);
}