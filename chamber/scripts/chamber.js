
// toggle menu
function toggleMenu() {
    document.getElementById("menuNav").classList.toggle("open");
    document.getElementById("menuButton").classList.toggle("open");
}

const x = document.getElementById("menuButton");
x.onclick = toggleMenu;

// Dates and last modified
document.querySelector(
	"#lastModified"
).textContent = `Last Update: ${document.lastModified}`;


// today header
const fulldate = `${dayName}, ${day} ${monthName} ${year}`;
document.getElementById("today").textContent = fulldate;
