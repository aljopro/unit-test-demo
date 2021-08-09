export function addMilliseconds(dirtyDate: Date, milliseconds: number): Date {
    const date = new Date(dirtyDate);
    date.setMilliseconds(date.getMilliseconds() + milliseconds);
    return date;
}