let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabName) {
  
  var isActive = document.getElementById(tabName).classList.contains("active-tab");

  for (var i = 0; i < tabcontents.length; i++) {
    tabcontents[i].classList.remove("active-tab");
  }

  for (var i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active-link");
  }

  if (!isActive) {
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
  }
}


let sideMenu = document.getElementById("sidemenu");
function openmenu() {
  sidemenu.style.right = "0";
}
function closemenu() {
  sidemenu.style.right = "-200px";
}
var position = document.documentElement;
position.addEventListener("mousemove", (e) => {
  position.style.setProperty("--x", e.clientX + "px");
  position.style.setProperty("--y", e.clientY + "px");
});
