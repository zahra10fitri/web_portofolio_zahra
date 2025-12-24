document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".menu a");
    const currentPage = location.pathname.split("/").pop();

    menuLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }

        link.addEventListener("click", () => {
            menuLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });
});
