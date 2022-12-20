function getBusinessDatesCount() {
  endDate = new Date("2023-05-09 09:00:00");
  startDate = new Date();
  let count = 0;
  const curDate = new Date(startDate.getTime());
  while (curDate <= endDate) {
    const dayOfWeek = curDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) count++;
    curDate.setDate(curDate.getDate() + 1);
  }
  document.getElementById("Countdown").innerHTML = count;
}
