// Navigation function
const icon_menu = document.querySelector(".icon_menu");
const left_hand_side = document.querySelector(".left_hand_side");
const back_btn = document.querySelector(".back_btn");

if (icon_menu) {
  icon_menu.onclick = () => {
    icon_menu.classList.toggle("active");
    left_hand_side.classList.toggle("active");
  };
}

if (back_btn) {
  back_btn.onclick = () => {
    icon_menu.classList.toggle("active");
    left_hand_side.classList.toggle("active");
  };
}
