document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById(
    "menu-toggle"
  ) as HTMLButtonElement;
  const dropdownMenu = document.getElementById(
    "dropdown-menu"
  ) as HTMLDivElement;
  const menuIcon = document.getElementById("menu-icon");

  let isMenuOpen = false;

  menuToggle.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    dropdownMenu.classList.toggle("hidden");

    menuIcon.src = isMenuOpen
      ? "./images/icon-hamburger.svg"
      : "./images/icon-close.svg";
  });
});
