export function RenderSketch(container, x, y) {
    for (let i = 0; i < y; i++) {
        const column = document.createElement(`div`);
        column.style.width = `calc(100%/${y})`;
        column.className = `column`;
        container.appendChild(column);
        for (let j = 0; j < x; j++) {
            const square = document.createElement(`div`);
            square.className = `square`;
            square.style.height = `calc(100%/${x})`;
            square.style.backgroundColor = `rgba(0,0,0,0)`;
            column.appendChild(square);
        }
    }
}
