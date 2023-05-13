function jogos(jogo) {
    if (jogo == "Tetris") {
        open_modal("https://tetris.com/play-tetris")
    } else if (jogo == "Sudoku") {
        open_modal("https://sudoku.com/pt")
    } else if (jogo == "Candy Crush") {
        open_modal("https://www.king.com/pt_BR/game/candycrush")
    } else if (jogo == "Jogo dos 7 erros") {
        open_modal("https://www.escolagames.com.br/jogos/jogoDos7Erros/")
    }
}
function open_modal(link) {
    var linkjogo = document.getElementById("linkjogo")
    linkjogo.setAttribute("href", `${link}`)
    var modal = document.getElementById("g")
    modal.style.display = "block"
}
function close_modal() {
    var modal = document.getElementById("g")
    modal.style.display = "none"
}
document.getElementById("botao").addEventListener("click", function(){   
    close_modal()
})