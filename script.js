const whatsappNumber = "6281142211188";
const defaultWhatsappMessage =
  "Halo kak, saya mau beli ebook 64 Kotak Kehidupan";
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultWhatsappMessage)}`;

document.querySelectorAll("[data-whatsapp]").forEach((button) => {
  button.setAttribute("href", whatsappLink);
});

const orderForm = document.querySelector("#orderForm");
if (orderForm) {
  orderForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!orderForm.checkValidity()) {
      orderForm.reportValidity();
      return;
    }

    const name = document.querySelector("#orderName").value.trim();
    const email = document.querySelector("#orderEmail").value.trim();
    const packageName = document.querySelector("#orderPackage").value;
    const notes = document.querySelector("#orderNotes").value.trim();
    const orderMessage = [
      "Halo kak, saya mau order ebook 64 Kotak Kehidupan.",
      "",
      `Nama: ${name}`,
      `Email: ${email}`,
      `Paket: ${packageName}`,
      `Catatan: ${notes || "-"}`,
    ].join("\n");
    const orderLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(orderMessage)}`;
    const whatsappWindow = window.open(orderLink, "_blank", "noopener,noreferrer");

    if (whatsappWindow) {
      whatsappWindow.opener = null;
    }
  });
}

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
