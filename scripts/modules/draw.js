function Draw(pixel) {
    let Alpha = Number((pixel.style.backgroundColor).split(",")[3].split(")")[0].split(" ")[1])
    Alpha = Alpha + 0.1
    pixel.style.backgroundColor = `rgba(0,0,0,${Alpha})`;
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
