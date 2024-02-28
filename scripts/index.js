import { Drawing } from "./modules/draw.js";
import { RenderSketch } from "./modules/render.js"

(()=>{

    const container = document.querySelector(`.container`)

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
        let x = xDimension.value;
        let y = yDimension.value;

        e.preventDefault();
        while(container.firstChild){
            container.removeChild(container.firstChild)
        }

        RenderSketch(container, Number(x), Number(y))
        popup.classList.toggle(`nonVisible`);
        
        console.log("Bye");
        Drawing();
    })


    RenderSketch(container, 16, 16);
    Drawing();
})()