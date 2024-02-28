export function RenderSketch(x, y){
    const container = document.querySelector(`.container`)
    for (let i = 0; i < y; i++) {
        const column = document.createElement(`div`)
        column.className = `column`
        container.appendChild(column);
        for (let j = 0; j < x; j++){
            const square = document.createElement(`div`)
            square.className = `square`
            column.appendChild(square);
        }
        
    }
}