// Mobile Hamburger Dropdown

document
  .querySelector(".js--mobile-hamburger")
  .addEventListener("click", function () {
    const dropDown = document.querySelector(".js--mobile-drop-down");
    const dropDownTriangle = document.querySelector(
      ".js--mobile-drop-down-triangle"
    );

    if (dropDown.classList.contains("notVisible")) {
      dropDownTriangle.classList.add("visible");
      dropDownTriangle.classList.remove("notVisible");
      dropDown.classList.add("visible");
      dropDown.classList.remove("notVisible");
    } else {
      dropDownTriangle.classList.add("notVisible");
      dropDownTriangle.classList.remove("visible");
      dropDown.classList.add("notVisible");
      dropDown.classList.remove("visible");
    }
  });
