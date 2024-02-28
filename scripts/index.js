import { Drawing } from "./modules/draw.js";
import { RenderSketch } from "./modules/render.js"

(()=>{

    const btnSizeConfig = document.querySelector(`#btnSize`);
    const popup = document.querySelector(`.darkness`);
    const btnSetConfirm = document.querySelector(`#btnSizeConfig`)

    btnSizeConfig.addEventListener(`click`, ()=> {
        popup.classList.toggle(`nonVisible`);
        console.log("Hi, i'm the popup")
    })
    btnSetConfirm.addEventListener(`click`, ()=> {
        popup.classList.toggle(`nonVisible`);
        console.log("Bye");
    })

    
    RenderSketch(16, 16);
    Drawing();
})()