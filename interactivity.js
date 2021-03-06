const grid = document.getElementById('grid')
const clear = document.getElementById('clearGrid')

function makeGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')

        gridElement.style.width = "20px"
        gridElement.style.height = "20px"
        gridElement.style.border = "thin solid black"

        gridElement.addEventListener('mouseover', changeColor)
        gridElement.addEventListener('mousedown', changeColor)

        grid.appendChild(gridElement)
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = '#FF0000'
}

function clearGrid(e) {
    grid.innerHTML = ''
    makeGrid(16)
}

makeGrid(16)
document.body.appendChild(grid)