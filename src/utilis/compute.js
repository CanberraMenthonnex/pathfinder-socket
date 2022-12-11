import {travelSpeed} from "../const";

export const getDistanceOfTwoPoints = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = (lat2-lat1) * Math.PI / 180;
  const dLon = (lon2-lon1) * Math.PI / 180;
  const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180 ) * Math.cos(lat2 * Math.PI / 180 ) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  const d = R * c;
  return Math.round(d*1000);

}

export const getTime = (distance, speed) => {
  return distance / speed
}


export const toHoursAndMinutes = (totalMinutes, round = false) => {
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  if(round){
    return `${padTo2Digits(hours)}:${Math.round(minutes)}`;
  }
  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}`;
}

const padTo2Digits = (num) => {
  return num.toString().padStart(2, '0');
}

export const haversine = () => {
  Number.prototype.toRad = function() {
    return this * Math.PI / 180;
  }

  const lat2 = 42.741;
  const lon2 = -71.3161;
  const lat1 = 42.806911;
  const lon1 = -71.290611;

  const R = 6371;

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


export const timeConvert = (n) =>  {
  const num = n;
  const hours = (num / 60);
  const rhours = Math.floor(hours);
  const minutes = (hours - rhours) * 60;
  const rminutes = Math.round(minutes);
  return rhours + " hour(s) and " + rminutes + " minute(s).";
}


export const calculateTimeFrom = (x, y, i, j) => {

  const distance = getDistanceOfTwoPoints(x, y, i, j);
  const timeInHour =  (getTime(distance / 1000, travelSpeed))
  const timeTravel = timeConvert(timeInHour * 60)


  return timeTravel;
}