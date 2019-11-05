function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function showimage()
{
    $("body").css("background-image","url("images11/Anti-static wrist strap.jpg">-')");/ // Onclick of button the background image of body will be test here. Give the image path in url
    $('#clickbutton').hide(); //This will hide the button specified in html
}
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
}
function onClick(element) {
  document.getElementById("img02").src = element.src;
  document.getElementById("modal02").style.display = "block";
}
function onClick(element) {
  document.getElementById("img03").src = element.src;
  document.getElementById("modal03").style.display = "block";
}
function onClick(element) {
  document.getElementById("img04").src = element.src;
  document.getElementById("modal04").style.display = "block";
}
function onClick(element) {
  document.getElementById("img05").src = element.src;
  document.getElementById("modal05").style.display = "block";
}
function onClick(element) {
  document.getElementById("img06").src = element.src;
  document.getElementById("modal06").style.display = "block";
}
function onClick(element) {
  document.getElementById("img07").src = element.src;
  document.getElementById("modal07").style.display = "block";
}
function onClick(element) {
  document.getElementById("img08").src = element.src;
  document.getElementById("modal08").style.display = "block";
}
function onClick(element) {
  document.getElementById("img09").src = element.src;
  document.getElementById("modal09").style.display = "block";
}
function onClick(element) {
  document.getElementById("img10").src = element.src;
  document.getElementById("modal10").style.display = "block";
}
function onClick(element) {
  document.getElementById("img11").src = element.src;
  document.getElementById("modal11").style.display = "block";
}
function onClick(element) {
  document.getElementById("img12").src = element.src;
  document.getElementById("modal12").style.display = "block";
}
var coll = document.getElementsByClassName("collapsible");
var i;
}
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}