function navstyle() {
const onfile = location.pathname.split("/").pop();
const items = document.querySelectorAll(".navitem");

// Highlights the active link that matches the current url path
items.forEach((link) => {
  const hreflink = link.getAttribute("href");
  if (hreflink === onfile) {
    link.classList.add("active");
    link.classList.add("title");
  }
});
}

navstyle();