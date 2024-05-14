document.addEventListener("DOMContentLoaded", function () {
    const whatsappBtn = document.querySelector(".whatsapp-btn");
    const whatsappForm = document.getElementById("whatsapp-form");
    const cancelBtn = document.querySelector(".btn-cancel");

    cancelBtn.addEventListener("click", function () {
      whatsappForm.style.display =
        whatsappForm.style.display === "block" ? "none" : "block";
    });

    whatsappBtn.addEventListener("click", function () {
      whatsappForm.style.display =
        whatsappForm.style.display === "block" ? "none" : "block";
    });

    whatsappForm.addEventListener("submit", function (event) {
      event.preventDefault();
      redirectToWhatsApp();
    });

    function redirectToWhatsApp() {
      const nome = document.getElementById("nome").value;
      const msg = document.getElementById("msg").value;

      const mensagem = `Olá, meu nome é ${nome}. ${msg}.`;
      const numero = "553199999999";
      const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(
        mensagem
      )}`;

      window.open(url, "_blank");
    }
  });