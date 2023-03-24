function getBusinessDatesCount() {
  endDate = new Date("2023-05-09 09:00:00");
  startDate = new Date();
  let count = 0;

  let holidays = [];
  holidays.push(new Date("2023-04-07").getTime()); // Långfredagen
  holidays.push(new Date("2023-04-10").getTime()); // Annandag påsk
  holidays.push(new Date("2023-05-01").getTime()); // Första maj

  const curDate = new Date(startDate.getTime());
  while (curDate <= endDate) {
    const dayOfWeek = curDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) count++;
    curDate.setDate(curDate.getDate() + 1);
  }

  const dayCorrection = 24 * 60 * 60 * 1000;

  holidays.forEach((t) => {
    if (t > new Date().getTime() + dayCorrection) count--;
  });
  document.getElementById("Countdown").innerHTML = count;
}
