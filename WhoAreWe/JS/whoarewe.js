//main variables
let showList = document.getElementById("showList");
let list = document.getElementById("list");
let hideList = document.getElementById("hideList");



//show/hide list commands
showList.onclick = function () {
    list.style.display = "block";
}
hideList.onclick = function () {
    list.style.display = "none";
}