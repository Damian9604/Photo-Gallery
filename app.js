const THUMBNAILS = document.querySelectorAll(".thumbnail img");

THUMBNAILS.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => console.log(thumbnail));
});