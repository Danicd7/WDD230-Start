
const temp = document.querySelector("#temp").textContent;
const windSpeed = document.querySelector("#windSpeed").textContent;
if (temp <= 10 && windSpeed >= 4.8) {
	const windChill = 35.74 + (0.6215 * temp) - (35.75 * windSpeed ** 0.16) + (0.4275 * temp * windSpeed ** 0.16);
	document.querySelector("#windChill").textContent = Math.round(windChill) + " °C";
}
else {
	document.querySelector("#windChill").textContent = "N/A"
}