function hideSideNav() {
  var sidenav = document.getElementById("sidenav");
  sidenav.classList.add("hidden");
  var topnav = document.getElementById("topnav");
  if (topnav.style.opacity === "0") {
    topnav.style.opacity = "1";
  } else {
    topnav.style.opacity = "1";
  }
}

function showSideNav() {
  var sidenav = document.getElementById("sidenav");
  sidenav.classList.remove("hidden");
  var topnav = document.getElementById("topnav");
  if (topnav.style.opacity === "1") {
    topnav.style.opacity = "0";
  } else {
    topnav.style.opacity = "0";
  }
}
