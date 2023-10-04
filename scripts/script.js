const button1 = document.getElementsByClassName("button1")[0];
function showfio(){
    document.getElementsByTagName("div")[3].innerText = "артем";
    document.getElementsByTagName("div")[4].innerText = "биксалин";
    document.getElementsByTagName("div")[5].innerText = "ильнурович";
}
button1.addEventListener("click", showfio);

const button2 = document.getElementsByClassName("button2")[0]
function byEnglish(){
    document.getElementsByTagName("div")[3].innerText = "Kirill";
    document.getElementsByTagName("div")[4].innerText = "Verendeev";
    document.getElementsByTagName("div")[5].innerText = "Artyomovich";
}
button2.addEventListener("click", byEnglish);

const button3 = document.getElementsByClassName("button3")[0]
function changePhoto(){
    document.getElementById("myImg").src = "images/pudge.jpg";
}
button3.addEventListener("click", changePhoto);