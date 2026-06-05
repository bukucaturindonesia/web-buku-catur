const whatsappLink =
  "https://wa.me/6281142211188?text=Halo%20kak%2C%20saya%20mau%20beli%20ebook%2064%20Kotak%20Kehidupan";

document.querySelectorAll("[data-whatsapp]").forEach((button) => {
  button.setAttribute("href", whatsappLink);
});

document.querySelectorAll(".faq-item").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    const isOpen = button.getAttribute("aria-expanded") === "true";

    button.setAttribute("aria-expanded", String(!isOpen));
    if (answer) {
      answer.hidden = isOpen;
    }
  });
});

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}
