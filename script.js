const body = document.querySelector("body")
const sidebar = document.querySelector(".js-sidebar")
const menu = document.querySelector(".js-menu")
const items = document.querySelectorAll(".js-item")

menu.addEventListener("click", () => {
  body.classList.toggle("c-body--sidebar-close")
  sidebar.classList.toggle("c-sidebar--close")

  items.forEach((item) => {
    item.classList.toggle("is-hidden")
  })
})
