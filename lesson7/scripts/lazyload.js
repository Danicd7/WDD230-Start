// get all images with data src attribute
const images = document.querySelectorAll("[data-src]")

/*function preLoadImage(img) {
    const src = img.getAttibute("data-src");
    if(!src) {
        return;
    }

    img.src = src;
}*/

// optional parameters being set for the intersectional observer 
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const loadimages = (images) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute("data-src");};
};

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);
    imagesToLoad.forEach((img) => {
        observer.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}


document.querySelector(
	"#lastModified"
).textContent = `Last Update: ${document.lastModified}`;
