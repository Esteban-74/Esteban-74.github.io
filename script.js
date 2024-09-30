
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

let row_size = field_size / rows_num;
let row_size_str = row_size + "px";
let checker_size_str = (row_size * 9)/10 + "px"

let tg = window.Telegram.WebApp;

for(let i = 1; i <= rows_num; i++){
    const cellContainer = document.createElement("div");
    cellContainer.className = "cellContainer";
    for( let j = 1; j<=rows_num; j++ ){
        const cell = document.createElement("div");
        cell.style.width = row_size_str;
        cell.style.height = row_size_str;

        if ( ((i+j)%2) ===0 ) {
            cell.className = "cell_white";
        } else {
            if (i>5) {
                cell.className = "cell_black with_pawn_white";
            } else if (i<4){
                cell.className = "cell_black with_pawn_black";
            }else {
                cell.className = "cell_black";
            }
            
            cell.addEventListener("click", function (){
                data_str = `string: ${i}, ${j}`;
                if (cell.className === "cell_black with_pawn_white"){
                    cell.className = "cell_black with_pawn_white_selected";
                } else if (cell.className === "cell_black with_pawn_white_selected"){
                    cell.className = "cell_black with_pawn_white";
                } else if (cell.className === "cell_black with_pawn_black") {
                    cell.className = "cell_black with_pawn_black_selected";
                } else if (cell.className === "cell_black with_pawn_black_selected"){
                    cell.className = "cell_black with_pawn_black";
                }
                window.alert(data_str)

                tg.sendData(data_str);
            });
        }
        cellContainer.append(cell); 


    }
    board.append(cellContainer);
}

tg.expand();
