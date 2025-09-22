// Highlight active menu item on scroll
window.addEventListener("scroll", () => {
  let sections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("nav ul li a");

  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document.querySelector("nav ul li a[href*=" + id + "]").classList.add("active");
      });
    }
  });
});

// Smooth scroll effect
document.querySelectorAll("nav ul li a").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Example: Cart button click action
document.querySelectorAll(".btn-secondary").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Item added to cart 🛒");
  });
});



