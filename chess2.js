var selectedPiece = undefined
var pieces = [
    {row: 1, cell: 1, color: 'black', type: "rook"},
    {row: 1, cell: 2, color: 'black', type: "knight"},
    {row: 1, cell: 3, color: 'black', type: "bishop"},
    {row: 1, cell: 4, color: 'black', type: "queen"},
    {row: 1, cell: 5, color: 'black', type: "king"},
    {row: 1, cell: 6, color: 'black', type: "bishop"},
    {row: 1, cell: 7, color: 'black', type: "knight"},
    {row: 1, cell: 8, color: 'black', type: "rook"},    
    {row: 2, cell: 1, color: 'black', type: "pawn"},
    {row: 2, cell: 2, color: 'black', type: "pawn"},
    {row: 2, cell: 3, color: 'black', type: "pawn"},
    {row: 2, cell: 4, color: 'black', type: "pawn"},
    {row: 2, cell: 5, color: 'black', type: "pawn"},
    {row: 2, cell: 6, color: 'black', type: "pawn"},
    {row: 2, cell: 7, color: 'black', type: "pawn"},
    {row: 2, cell: 8, color: 'black', type: "pawn"},
    {row: 7, cell: 1, color: 'white', type: "pawn"},
    {row: 7, cell: 2, color: 'white', type: "pawn"},
    {row: 7, cell: 3, color: 'white', type: "pawn"},
    {row: 7, cell: 4, color: 'white', type: "pawn"},
    {row: 7, cell: 5, color: 'white', type: "pawn"},
    {row: 7, cell: 6, color: 'white', type: "pawn"},
    {row: 7, cell: 7, color: 'white', type: "pawn"},
    {row: 7, cell: 8, color: 'white', type: "pawn"},
    {row: 8, cell: 1, color: 'white', type: "rook"},
    {row: 8, cell: 2, color: 'white', type: "knight"},
    {row: 8, cell: 3, color: 'white', type: "bishop"},
    {row: 8, cell: 4, color: 'white', type: "queen"},
    {row: 8, cell: 5, color: 'white', type: "king"},
    {row: 8, cell: 6, color: 'white', type: "bishop"},
    {row: 8, cell: 7, color: 'white', type: "knight"},
    {row: 8, cell: 8, color: 'white', type: "rook"},
]

function renderPieces() {
console.log('rendering chess pieces')
clearBoard()
$(`.cell`).click(moveSelectedPieceHere)    
for(let i=0; i<pieces.length; i++) {
        let piece = pieces[i];
        console.log(piece)
        if (piece.row && piece.cell) {
        $(`#cell-${piece.row}-${piece.cell}`).html(renderPiece(i, piece.color))
        $(`#cell-${piece.row}-${piece.cell}`).unbind('click')
    } else {
        console.log(`put `, piece, ` into out of play`)
    $(`#out-of-play-${piece.color}`).append(`<div class="cell">${renderPiece(i, piece.color)}</div>`)
    }
}
$('.piece').click(selectPiece)
}

function renderPiece(i, color) {
return `<div id="piece-${i}" class="piece ${color}-piece" bacon="${i}">
<img src="images/chess-${pieces[i].type}.png" width="50px" height="50px"></img>
</div>`
}

function selectPiece() {
let piece = $(this)
if(piece.hasClass(`selected`))  {
console.log(`this piece was already selected`)
remove()
return
}

$(`.selected`).removeClass(`selected`)

let pieceIndex = piece.attr('bacon')
console.log(`checkerIndex ==`, pieceIndex)

selectedPiece = pieces[pieceIndex]
console.log(`Finished selecting piece: `, selectedPiece)

piece.addClass(`selected`)
}

function remove() {
console.log(`removing this..`, selectedPiece)
selectedPiece.row = undefined
selectedPiece.cell = undefined
selectedPiece = undefined
renderPieces()
}

/*function chesspieces() {
    if (id="blackpawn")
    img="images/chessblackpawn.png"
    console.log('img is equal to', `img`)
} */