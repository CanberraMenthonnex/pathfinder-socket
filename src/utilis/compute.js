export const getDistanceOfTwoPoints = (x1, y1, x2, y2) => {
  const y = x2 - x1;
  const x = y2 - y1;

  return Math.sqrt(x * x + y * y);
}

export const getTimeBySpeedBetweenTwoPoints = (distance, speed) => {
  return distance / speed
}

export const hoursToMinute = (hours) => {
  return hours * 60
}

export const MinuteToHours = (min) => {
  return 60 / min
}

export const calculateTimeToLeave = (rdvTime, distance) => {
  const timeToLeave = ""

  const timeInMinute = hoursToMinute(rdvTime)

  const timeToMake = getTimeBySpeedBetweenTwoPoints(distance, 5)
  //const test = timeInMinute - timeToMake


  console.log(MinuteToHours(timeInMinute));
  console.log(timeToMake);

  return timeToLeave;
}