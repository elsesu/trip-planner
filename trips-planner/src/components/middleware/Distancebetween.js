//function to handle calculations of distance and time taken
export const DistanceBetween = (coords1, coords2) => {
  function toRad(x) {
    return x * Math.PI / 180;
  }

  const R = 6371; // km
  const dLat = toRad(coords2.lat - coords1.lat);
  const dLon = toRad(coords2.lng - coords1.lng);
  const lat1 = toRad(coords1.lat);
  const lat2 = toRad(coords2.lat);

  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // distance in km

  const timeInMinutes = distance * 10; // 1 km = 10 minutes

  return { distance, timeInMinutes };
}

