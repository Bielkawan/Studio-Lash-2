const hamburguer = document.querySelector("#hamburguer");
const navMenu = document.querySelector("#menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-list").forEach((n) =>
    n.addEventListener("click", () => {
        hamburguer.classList.remove("active");
        navMenu.classList.remove("active");
    }))


    
    const intersectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log(entry)
            entry.target.classList.toggle("show", entry.isIntersecting)
        })
    })
    
    const elements = document.querySelectorAll(".box")
    
    elements.forEach(el => intersectObserver.observe(el))

