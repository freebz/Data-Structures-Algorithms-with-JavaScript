// 3.4 리스트 기반 애플리케이션

// 3.4.1 텍스트 파일 읽기

const fs = require('fs');
const read = function(file) {
    return fs.readFileSync(file, "utf8");
}

var movies = read("films.txt").split("\n");


function createArr(file) {
    var arr = read(file).split("\n");
    for (var i = 0; i < arr.length; ++i) {
	arr[i] = arr[i].trim();
    }
    return arr;
}
