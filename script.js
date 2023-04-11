function detectScreenSize() {
  const mediaQuery = window.matchMedia("(min-width: 690px)")

  const menu = document.querySelector(".js-menu")
  const searchIcon = document.querySelector(".js-search-icon")
  const searchInput = document.querySelector(".c-sidebar__search")

  if (mediaQuery.matches) {
    const body = document.querySelector("body")
    const sidebar = document.querySelector(".js-sidebar")
    const items = document.querySelectorAll(".js-item")

    function openAndCloseSidebarDesktop() {
      body.classList.toggle("c-body--sidebar-close")
      sidebar.classList.toggle("c-sidebar--close")

      items.forEach((item) => {
        item.classList.toggle("is-hidden")
      })
    }

    menu.addEventListener("click", openAndCloseSidebarDesktop)
    searchIcon.addEventListener("click", () => {
      items.forEach((item) => {
        item.classList.contains("is-hidden") ? openAndCloseSidebarDesktop() : ""
      })
      searchInput.focus()
    })
  } else {
    const list = document.querySelector(".js-list")
    list.classList.add("is-hidden")

    function openAndCloseMenuMobile() {
      list.classList.toggle("is-hidden")
    }

    menu.addEventListener("click", openAndCloseMenuMobile)
    searchIcon.addEventListener("click", () => searchInput.focus())
  }
}

detectScreenSize()
