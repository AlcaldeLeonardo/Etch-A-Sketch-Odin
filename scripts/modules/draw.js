function Draw(pixel) {
    pixel.style.backgroundColor = "black";
}

export function Drawing() {
    const pixels = document.querySelectorAll(".square");
    let isDrawing = false;

    pixels.forEach((pixel) => {
        pixel.addEventListener("mousedown", () => {
            isDrawing = true;
            Draw(pixel);
        });
        pixel.addEventListener("mouseenter", () => {
            if (isDrawing) Draw(pixel);
        });
        pixel.addEventListener("mouseup", () => (isDrawing = false));
    });
}
