function toggleMenu() {
  document.getElementById("menu").classList.toggle("active");
}

function scrollToContato() {
  document.getElementById("contato").scrollIntoView({
    behavior: "smooth"
  });
}

function abrirWhatsApp() {
  window.open("https://wa.me/5599999999999", "_blank");
}