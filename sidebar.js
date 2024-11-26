let sidebar = document.querySelector(".sidebar");
let btn_side = document.querySelector("header button:last-child");
let xbtn = document.querySelector(".sidebar button:first-child");

const show = () => {
    sidebar.classList.toggle("show-sidebar");
}

btn_side.addEventListener("click", show);
xbtn.addEventListener("click", show);