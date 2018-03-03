// 2.3.3 기존 배열을 이용해 새 배열 만들기

var cisDept = ["Mike", "Clayton", "Terrill", "Danny", "Jennifer"];
var dmpDept = ["Raymond", "Cynthia", "Bryan"];
var itDiv = cisDept.concat(dmpDept);
print(itDiv);
itDiv = dmpDept.concat(cisDept);
print(itDiv);

// Mike,Clayton,Terrill,Danny,Jennifer,Raymond,Cynthia,Bryan
// Raymond,Cynthia,Bryan,Mike,Clayton,Terrill,Danny,Jennifer


var itDiv = ["Mike","Clayton","Terrill","Raymond","Cynthia","Danny","Jennifer"];
var dmpDept = itDiv.splice(3,3);
var cisDept = itDiv;
print(dmpDept); // Raymond,Cynthia,Danny
print(cisDept); // Mike,Clayton,Terrill,Jennifer
