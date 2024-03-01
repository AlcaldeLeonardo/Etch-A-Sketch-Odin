import { Drawing } from "./modules/draw.js";
import { RenderSketch } from "./modules/render.js"
import { SetWhiteboardPopup } from "./modules/setWhiteboard.js";

(()=>{

    const container = document.querySelector(`.container`)
    const btnClear = document.querySelector(`#btnClear`)

    
    RenderSketch(container, 16, 16);
    SetWhiteboardPopup(container);
    Drawing();
    
    btnClear.addEventListener(`click`, ()=>{
    
        while(container.firstChild){
            container.removeChild(container.firstChild)
        }
        RenderSketch(container, 16,16)
        Drawing();
    })
})()