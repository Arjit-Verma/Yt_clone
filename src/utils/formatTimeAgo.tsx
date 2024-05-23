const formatter = new Intl.RelativeTimeFormat(undefined, {
  numeric: "auto",
});

const DIVISIONS = [
  { amount: 60, name: "second" },
  { amount: 60, name: "minute" },
  { amount: 24, name: "hour" },
  { amount: 7, name: "day" },
  { amount: 4.34524, name: "week" },
  { amount: 12, name: "month" },
  { amount: Number.POSITIVE_INFINITY, name: "year" },
];

export function formatTimeAgo(date: number | Date) {
  const targetDate = typeof date === "number" ? new Date(date) : date;
  let duration = (targetDate.getTime() - new Date().getTime()) / 1000;

  for (let i = 0; i < DIVISIONS.length; i++) {
    const division = DIVISIONS[i];
    if (Math.abs(duration) < division.amount) {
      return formatter.format(
        Math.round(duration),
        division.name as Intl.RelativeTimeFormatUnit
      );
    }
    duration /= division.amount;
  }
}
