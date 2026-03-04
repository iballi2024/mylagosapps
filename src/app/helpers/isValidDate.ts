import { log } from './logInConsole';
export function isValidDateString(dateStr: string): boolean {
    // Ensure format YYYY-MM-DD
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateStr)) return false;

    const date = new Date(dateStr);

    // Check if Date object is valid
    if (isNaN(date.getTime())) return false;

    // Extra check to prevent JS auto-correction (e.g. 2026-02-31)
    const [year, month, day] = dateStr.split("-").map(Number);

    return (
        date.getUTCFullYear() === year &&
        date.getUTCMonth() + 1 === month &&
        date.getUTCDate() === day
    );
}

// Usage
log(isValidDateString("2026-02-04")); // true
log(isValidDateString("2026-02-31")); // false
