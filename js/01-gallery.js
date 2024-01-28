import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

for (const item of galleryItems){
    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery__item");

    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link");
    galleryLink.href = item.original;

    const galleryImage = document.createElement("img");
    galleryImage.classList.add("gallery__image");
    galleryImage.src = item.preview;
    galleryImage.dataset.src = item.original;
    galleryImage.alt = item.description;

    galleryLink.append(galleryImage);
    galleryItem.append(galleryLink);
    gallery.append(galleryItem);
}

let animation;

gallery.addEventListener("click", (event) => {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

    animation = basicLightbox.create(`
    <img src= "${event.target.dataset.src} "width="800" height="600">
    `,
    {
    onShow: (animation) => window.addEventListener("keydown", onEscape),
    onClose: (animation) => window.removeEventListener("keydown", onEscape)
    }
    );

    animation.show();
});

function onEscape(event) {
    if (event.key === "Escape") {
        animation.close();
    }
}

console.log(galleryItems);

