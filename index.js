let myNum = document.getElementById('initiallNum'.innerHTML);
function increas() {
  myNum += 1;
  document.getElementById('initiallNum').innerHTML = myNum;
}
function decreas() {
  myNum -= 1;
  document.getElementById('initiallNum').innerHTML = myNum;
} function reset() {
  myNum = 0;
  document.getElementById('initiallNum').innerHTML = myNum;
}
increas();
decreas();
reset();