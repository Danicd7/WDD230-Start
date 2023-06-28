// toggle menu
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
	document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

// dates
function transformDate(dateSource) {
	const fulldate = new Date(dateSource);
	const daynames = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday"
	];
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
	const dayName = daynames[fulldate.getDay()];
	const day = fulldate.getDate();
	const monthName = months[fulldate.getMonth()];
	const year = fulldate.getFullYear();
	return `${dayName}, ${day} ${monthName} ${year}`;
}
function transformDateHour(dateSource) {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December"
	];
	const fulldate = new Date(dateSource);
	const day = fulldate.getDate();
	const month = months[fulldate.getMonth()];
	const year = fulldate.getFullYear();
	const hour = fulldate.getHours();
	const minute = String(fulldate.getMinutes()).padStart(2, "0");
	return `${day} ${month} ${year} ${hour}:${minute}`;
}

const d = new Date();

// today header
document.querySelector(".today").textContent = transformDate(d);

	
// TEMPORAL BANNER
const currentDate = new Date();
const currentDay = currentDate.getDay();

// Check if it's Monday '1' or Tuesday '2'
if (currentDay === 1 || currentDay === 2) {
	//Show the banner
	document.getElementsById('banner').style.display ='block';
}

// lastModified	
document.querySelector(
	"#lastModified"
).textContent = `Last Update: ${document.lastModified}`;