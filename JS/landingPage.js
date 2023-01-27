//main variables
let showList = document.getElementById("showList");
let list = document.getElementById("list");
let hideList = document.getElementById("hideList");
let explore = document.getElementById("explore");



//show/hide list commands
showList.onclick = function () {
    list.style.display = "block";
}
hideList.onclick = function () {
    list.style.display = "none";
}

//scroll to latest articles when user click on explore
explore.onclick = function () {
    document.getElementById("latestArticles").scrollIntoView();
}