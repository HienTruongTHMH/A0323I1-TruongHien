var arr = new Array(15);
for (let i = 0; i < arr.length-5; i++) {
    arr[i] = new Array(15);
    for (let j = 0; j < arr[i].length-5; j++) {
        arr[i][j] = '';
    }
}
var checkTicked = true;
display();

function display() {
    let tableStr = '<table border="1" >';
    for (let i = 0; i < arr.length-5; i++) {
        tableStr += '<tr>';
        for (let j = 0; j < arr[i].length-5; j++) {
            tableStr += '<td onclick="tick(' + i + ',' + j + ')" style="width: 30px; height: 30px">' + arr[i][j] + '</td>'
        }
        tableStr += '</tr>'
    }
    document.getElementById('result').innerHTML = tableStr;
}

function tick(i, j) {
    if (checkTicked && alreadyTick(i, j)) {
        arr[i][j] = 'X';
        checkTicked = false;
        if (theWinner(i, j) === true) {
            alert("người X chiến thắng");
        }
    } else if (!checkTicked && alreadyTick(i, j)) {
        arr[i][j] = 'O';
        checkTicked = true;
        if(theWinner(i,j) === true) {
            alert("người O đã chiến thắng");
        }
    }
    display(); // duyệt lại mảng và y lại giá trị;
}

function alreadyTick(i, j) {
    if (arr[i][j] == '') {
        return true;
    } else {
        alert('Ô này đã chọn rồi chọn ô khác đi');
        return false;
    }
}

function theWinner(i, j) {
    for (let i = 0; i < arr.length-5; i++) {
        for (let j = 0; j < arr[i].length-5; j++) {
            if (arr[i][j] == "X") {
                if (arr[i][j + 1] == "X" && arr[i][j + 2] == "X") {
                    return true;
                }
                if (arr[i + 1][j] == "X" && arr[i + 2][j] == "X") {
                    return true;
                }
                if (arr[i + 1][j + 1] == "X" && arr[i + 2][j + 2] == "X") {
                    return true;
                }
                if (arr[i + 1][j - 1] == "X" && arr[i + 2][j - 2] == "X") {
                    return true;
                }
            } else if (arr[i][j] == "O") {
                if(arr[i][j+1] == 'O' && arr[i][j+2]){
                    return true;
                }
                if(arr[i+1][j+1] == 'O' && arr[i+2][j+2]){
                    return true;
                }
                if(arr[i+1][j] == 'O' && arr[i+2][j]){
                    return true;
                }
                if(arr[i+1][j-1] == 'O' && arr[i+2][j-2]){
                    return true;
                }
            }
        }
    }
}