const grid = document.getElementById('grid')

function makeGrid(size)
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

document.body.appendChild(grid)