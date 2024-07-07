function calculateWindChill(temperature, windSpeed) {
  return (
    13.12 +
    0.6215 * temperature -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temperature * Math.pow(windSpeed, 0.16)
  );
}

document.addEventListener('DOMContentLoaded', function () {
  //   const temperature = parseFloat(
  //     document.getElementById('temperature').textContent
  //   );
  //   const windSpeed = parseFloat(
  //     document.getElementById('windSpeed').textContent
  //   );
  const windChill = calculateWindChill(25, 15).toFixed(1);
  document.getElementById(
    'windChill'
  ).innerHTML = windChill ? `<strong>Wind Chill:</strong> ${windChill}°C` : `<strong>Wind Chill:</strong> N/A`;

  console.log('calculating windChill');
});
