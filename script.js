
let board = document.getElementById('board')

//window.alert(window.screen.width);
//window.alert(window.screen.height);

var w = window.innerWidth;
var h = window.innerHeight;

let rows_num = 8;

let field_size = w;
if (w > h) {
    field_size = h;
}

let row_size_str = (field_size / rows_num)  + "px";

for(let i = 1; i <= rows_num; i++){
    const cellContainer = document.createElement("div");
    cellContainer.className = "cellContainer";
    for( let j = 1; j<=rows_num; j++ ){
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.style.width = row_size_str;
        cell.style.height = row_size_str;
        cellContainer.append(cell); 
    }

    board.append(cellContainer);
}
