const openListener = document.querySelector(".nav-hambuger");

openListener.addEventListener("click", openToogle);

const closeListener = document.querySelector(".sidenav-hambuger");

closeListener.addEventListener("click", closeToggle);

function openToogle() {
  const sideNavBartoggler = document.querySelector(".sidebar");
  document.querySelector(".sidebar").style.justifyContent = "space-evenly";
  document.querySelector(".navbar-user-profile").style.display = "block";
  sideNavBartoggler.classList.add("nav-hambuger-open");
}

function closeToggle() {
  const sideNavBartoggler = document.querySelector(".sidebar");
  document.querySelector(".navbar-user-profile").style.display = "none";
  sideNavBartoggler.classList.remove("nav-hambuger-open");
}
