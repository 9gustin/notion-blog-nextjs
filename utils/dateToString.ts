export const dateToString = (date: string | Date) => new Date(date).toLocaleString(
  "en-US",
  {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }
);
