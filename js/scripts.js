function hideSideNav() {
  var sidenav = document.getElementById("sidenav");
  sidenav.classList.add("hidden");
  var topnav = document.getElementById("topnav");
  if (topnav.style.display === "none") {
    topnav.style.display = "block";
  } else {
    topnav.style.display = "block";
  }
}

function showSideNav() {
  var sidenav = document.getElementById("sidenav");
  sidenav.classList.remove("hidden");
  var topnav = document.getElementById("topnav");
  if (topnav.style.display === "block") {
    topnav.style.display = "none";
  } else {
    topnav.style.display = "none";
  }
}
