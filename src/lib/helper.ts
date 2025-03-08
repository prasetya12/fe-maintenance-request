import { format } from "date-fns";
import { toZonedTime } from "date-fns-tz";

export function formatDate(timestamp: number) {
    if (!timestamp) return ''
    const zonedDate = toZonedTime(timestamp, 'UTC');
    return format(zonedDate, "dd MMM yyyy HH:mm");
}