const body = document.querySelector("body")
const sidebar = document.querySelector(".js-sidebar")
const menu = document.querySelector(".js-menu")
const items = document.querySelectorAll(".js-item")

function openAndCloseSidebar() {
  body.classList.toggle("c-body--sidebar-close")
  sidebar.classList.toggle("c-sidebar--close")

  items.forEach((item) => {
    item.classList.toggle("is-hidden")
  })
}

menu.addEventListener("click", openAndCloseSidebar)

const searchIcon = document.querySelector(".js-search-icon")
const searchInput = document.querySelector(".c-sidebar__search")

searchIcon.addEventListener("click", () => {
  items.forEach((item) => {
    item.classList.contains("is-hidden") ? openAndCloseSidebar() : ""
  })
  searchInput.focus()
})
