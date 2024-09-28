
let board = document.getElementById('board')

//window.alert(window.screen.width);
//window.alert(window.screen.height);

let rows_num = 8;
for(let i = 1; i <= rows_num; i++){
    const cellContainer = document.createElement("div");
    cellContainer.className = "cellContainer";
    for( let j = 0; j<=rows_num; j++ ){
        const cell = document.createElement("div");
        cell.className = "cell";
        cellContainer.append(cell); 
    }

    board.append(cellContainer);
}