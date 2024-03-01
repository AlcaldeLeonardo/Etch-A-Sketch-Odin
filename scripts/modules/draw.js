let rainbowMode = false;
const checkboxmode = document.querySelector(`#drawMode`)

checkboxmode.addEventListener(`change`, () => {
    rainbowMode = !rainbowMode;
    console.log('Rainbow mode:', rainbowMode);
});

function Draw(pixel, brushMode) {
    if(brushMode === false) {
        console.log(typeof(brushMode))
        try{
            let Alpha
            Alpha = Number((pixel.style.backgroundColor).split(",")[3].split(")")[0].split(" ")[1])
            Alpha = Alpha + 0.1
            pixel.style.backgroundColor = `rgba(0,0,0,${Alpha})`;
            console.log('Alpha :>> ', Alpha);
        }catch(error){
            console.error(`Alpha reached the maximum value`);
        }
    }
    if(brushMode === true) {
        console.log(brushMode)
        try{
            let Alpha
            Alpha = Number((pixel.style.backgroundColor).split(",")[3].split(")")[0].split(" ")[1])
            Alpha = Alpha + 0.1
            pixel.style.backgroundColor = `rgba(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Alpha})`;
            console.log('Alpha :>> ', Alpha);
        }catch(error){
            console.error(`Alpha reached the maximum value`);
        }
    }
}

export function Drawing() {
    const pixels = document.querySelectorAll(".square");
    let isDrawing = false;

    pixels.forEach((pixel) => {
        pixel.addEventListener("mousedown", () => {
            isDrawing = true;
            Draw(pixel, rainbowMode);
        });
        pixel.addEventListener("mouseenter", () => {
            if (isDrawing) Draw(pixel, rainbowMode);
            console.log('rainbowMode :>> ', rainbowMode);
        });
        pixel.addEventListener("mouseup", () => (isDrawing = false));
    });
}
