const menuButton = document.getElementById("menuToggle");
const navigation = document.getElementById("mainNav");

menuButton.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("hidden") === false;

    menuButton.setAttribute("aria-expanded", String(isOpen));

    menuButton.textContent = isOpen ? "×" : "☰";

});

navigation.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.add("hidden");

        menuButton.setAttribute("aria-expanded", "false");

        menuButton.textContent = "☰";

    });

});
