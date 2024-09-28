
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
        cell.className = "cell";
        cell.style.width = row_size_str;
        cell.style.height = row_size_str;

        cell.style.backgroundColor = "white";
        if ( ((i+j)%2) > 0 ) {
            cell.style.backgroundColor = "black";
        }
    
        if ((i<4) && (((i+j)%2) > 0)){
            const checker = document.createElement("div");
            checker.className = "checker";
            checker.style.width = checker_size_str;
            checker.style.height = checker_size_str;
            checker.style.backgroundColor = "green";

            //checker.onclick = `updateColor(${i}, ${j})`;
            //checker.onclick = "'updateColor(" + i + "," + j +")'";
            //checker.onclick = "updateColor();";

            //checker.addEventListener("click", updateColor(i,j));
            checker.addEventListener("click", function (){
                data_str = `string: ${i}, ${j}`;
                //window.alert(data_str);
                tg.sendData(data_str);
            });

            cell.append(checker);

        }
    
        cellContainer.append(cell); 


    }

    board.append(cellContainer);
}

