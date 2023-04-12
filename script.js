function setSidebarMenuBehavior() {
  const body = document.querySelector("body")
  const sidebar = document.querySelector(".js-sidebar")
  const menu = document.querySelector(".js-menu")
  const searchIcon = document.querySelector(".js-search-icon")
  const searchInput = document.querySelector(".c-sidebar__search")
  const items = document.querySelectorAll(".js-item")

  function openAndCloseSidebarDesktop() {
    body.classList.toggle("c-body--sidebar-close")
    sidebar.classList.toggle("c-sidebar--close")

    items.forEach((item) => {
      item.classList.toggle("is-hidden")
    })
  }

  function openAndCloseMenuMobile() {
    const list = document.querySelector(".js-list")
    list.classList.toggle("is-active")
  }

  function setInputOnIconClickDesktop() {
    items.forEach((item) => {
      item.classList.contains("is-hidden") ? openAndCloseSidebarDesktop() : ""
    })
    searchInput.focus()
  }

  function setInputOnIconClickMobile() {
    searchInput.focus()
  }

  function detectScreenSize() {
    const mediaQuery = window.matchMedia("(min-width: 690px)")
    return mediaQuery.matches
  }

  if (detectScreenSize()) {
    menu.addEventListener("click", openAndCloseSidebarDesktop)
    searchIcon.addEventListener("click", setInputOnIconClickDesktop)
  } else {
    menu.addEventListener("click", openAndCloseMenuMobile)
    searchIcon.addEventListener("click", setInputOnIconClickMobile)
  }
}

setSidebarMenuBehavior()
