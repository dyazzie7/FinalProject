// ===== HOME PAGE BUTTON =====
function showMessage() {
    document.getElementById("homeMessage").textContent =
        "GreenTech Solutions is committed to a sustainable future!";
}


// ===== PRODUCTS SEARCH FILTER =====
let searchInput = document.getElementById("search");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        let value = this.value.toLowerCase();
        let items = document.querySelectorAll(".item");

        items.forEach(function (item) {
            item.style.display =
                item.textContent.toLowerCase().includes(value)
                    ? "block"
                    : "none";
        });
    });
}


// ===== CONTACT FORM MESSAGE =====
let form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        document.getElementById("formMessage").textContent =
            "Thank you! Your message has been sent.";
    });
}