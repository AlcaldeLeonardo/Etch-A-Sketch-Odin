import { Drawing } from "./modules/draw.js";
import { RenderSketch } from "./modules/render.js"
import { SetWhiteboardPopup } from "./modules/setWhiteboard.js";

(()=>{

    const container = document.querySelector(`.container`)

    RenderSketch(container, 16, 16);
    SetWhiteboardPopup(container);
    Drawing();
})()