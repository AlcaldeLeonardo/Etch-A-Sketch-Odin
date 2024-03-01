import { Drawing } from "./draw.js";
import { RenderSketch } from "./render.js";

export function SetWhiteboardPopup(container){
    const btnSizeConfig = document.querySelector(`#btnSize`);
    const popup = document.querySelector(`.darkness`);
    const btnSetConfirm = document.querySelector(`#btnSizeConfig`)
    const xDimension = document.querySelector("#Xdimension")
    const yDimension = document.querySelector("#Ydimension")

    btnSizeConfig.addEventListener(`click`, (e)=> {
        e.preventDefault();
        popup.classList.toggle(`nonVisible`);
        console.log("Hi, i'm the popup")
    })
    btnSetConfirm.addEventListener(`click`, (e)=> {
        let x = Number(xDimension.value);
        let y = Number(yDimension.value);

        e.preventDefault();

        if(1 <= x && x <= 100 && 1 <= y && y <= 100) {
            while(container.firstChild){
                container.removeChild(container.firstChild)
            }
    
            RenderSketch(container, x, y);
            popup.classList.toggle(`nonVisible`);
            
            console.log("Bye");
            Drawing();
        }

    })
}