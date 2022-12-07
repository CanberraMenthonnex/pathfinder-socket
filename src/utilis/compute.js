export const getDistanceOfTwoPoints = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = (lat2-lat1) * Math.PI / 180;
  const dLon = (lon2-lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c;
  return Math.round(d*1000)+"m";

}

export const getTime = (distance, speed) => {
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

  const timeToMake = getTime(distance, 5)


  return timeToLeave;
}

export const haversine = () => {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }

  const lat2 = 42.741;
  const lon2 = -71.3161;
  const lat1 = 42.806911;
  const lon1 = -71.290611;

  const R = 6371; // km
//has a problem with the .toRad() method below.
  const x1 = lat2-lat1;
  const dLat = x1.toRad();
  const x2 = lon2-lon1;
  const dLon = x2.toRad();
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1.toRad()) * Math.cos(lat2.toRad()) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c;

  return d;
}