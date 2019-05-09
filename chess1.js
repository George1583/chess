$(document).ready(function () {
    console.log('document ready')
    $('#board-container').html(renderBoard())
//  $('.black.cell').click(toggle)
//  $('.black.cell').click(selectChecker) 
    renderPieces()   
//    $(`.checker`).click(selectChecker)
//    $(`.cell`).click(moveSelectedCheckerHere)
})

function toggle() {
    let piece = $(this).children().first()
    piece.toggle()
    if(!piece.is(":visible")){
        switchColor(piece);
    }
}

/*function switchColor(piece) {
    if (piece.hasClass('black-piece')) {
        piece.removeClass('black-piece')
        piece.addClass('white-piece')
    } else {
        piece.addClass('black-piece')
        piece.removeClass('white-piece')
    }
}*/

function renderBoard() {
    return `
        ${renderRow(1)}
        ${renderRow(2)}
        ${renderRow(3)}
        ${renderRow(4)}
        ${renderRow(5)}
        ${renderRow(6)}
        ${renderRow(7)}
        ${renderRow(8)}
    `
}

function renderRow(rowNum) {
    return `
        <div id="row-${rowNum}" class="row">
            ${renderCell(rowNum, 1)}
            ${renderCell(rowNum, 2)}
            ${renderCell(rowNum, 3)}
            ${renderCell(rowNum, 4)}
            ${renderCell(rowNum, 5)}
            ${renderCell(rowNum, 6)}
            ${renderCell(rowNum, 7)}
            ${renderCell(rowNum, 8)}
        </div>
    `
}

function renderCell(rowNum, cellNum) {
        if (cellColor(cellNum, rowNum) === 'black') { 
        return `<div id="cell-${rowNum}-${cellNum}" class="cell black"></div>`
} else
        return `<div id="cell-${rowNum}-${cellNum}" class="cell white"></div>`
}

/*** Helper Methods ***/
function parity(num) {
    return (num % 2 == 0) ? 'even' : 'odd'
}

function cellColor(cellNum, rowNum) {
    return parity(cellNum) == parity(rowNum) ? 'white' : 'black'
}    

function moveSelectedPieceHere() {
console.log('things')
if(selectedPiece) {
console.log('move piece here')
let cell = $(this)
console.log(`cell: `, cell)
let id= cell.attr('id')
console.log(`id: `, id)
let idParts = id.split('-')
console.log(`idParts = `, idParts)

selectedPiece.row = Number(idParts[1])
selectedPiece.cell = Number(idParts[2])

console.log(`The piece`)
if (selectedPiece.type == `pawn` && selectedPiece.color == `black` && selectedPiece.row == 8) {
    console.log(`I am moving a black piece to the white home row.`)
selectedPiece.type = `queen`

} else if (selectedPiece.type == `pawn` && selectedPiece.color == `white` && selectedPiece.row == 1) {
selectedPiece.type = `queen`
}

selectedPiece = undefined
renderPieces()
}
}

function clearBoard() {
$(`.cell`).html(``)
$(`.cell`).unbind('click')
$(`.out-of-play`).html(``)
}

/* function chesspieces() {
    if (id="blackpawn")
    img="images/chessblackpawn.png"
    console.log('img is equal to', `img`)
} */
       