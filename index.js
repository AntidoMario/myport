let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");

  function opentab(tabName) {
    var isActive = document.getElementById(tabName).classList.contains("active-tab");

    var tabcontents = document.querySelectorAll('.tab-contents');
    var tablinks = document.querySelectorAll('.tab-links');

    for (var i = 0; i < tabcontents.length; i++) {
      tabcontents[i].style.display = "none";
    }

    for (var i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active-link");
    }

    if (!isActive) {
      event.currentTarget.classList.add("active-link");
      document.getElementById(tabName).style.display = "block";
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
