// Mensagem de boas-vindas ao carregar a página
window.addEventListener("load", function () {
  alert("Olá! Seja bem-vindo(a) ao meu currículo online.");
});

// Saudação personalizada ao digitar o nome (usado pelo formulário)
document.getElementById("formContato").addEventListener("submit", function(event){
  event.preventDefault();
  let nome = document.getElementById("nome").value.trim();
  if(nome) {
    alert(`Olá, ${nome}! Obrigado por visitar meu currículo.`);
  } else {
    alert("Por favor, preencha o nome.");
  }
});

// Mostrar/ocultar seção de idiomas (exemplo)
function toggleIdiomas() {
  const idiomasSection = document.getElementById("idiomas");
  if (idiomasSection) {
    idiomasSection.style.display = idiomasSection.style.display === "none" ? "block" : "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const botaoDarkMode = document.getElementById("btn-darkmode");

  // Função para aplicar o tema baseado no localStorage
  function aplicarTema() {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo === "claro") {
      document.body.classList.add("light-mode");
      botaoDarkMode.textContent = "🌙 Modo Escuro";
    } else {
      document.body.classList.remove("light-mode");
      botaoDarkMode.textContent = "☀️ Modo Claro";
    }
  }

  // Aplica o tema assim que carrega a página
  aplicarTema();

  // Evento de clique no botão
  botaoDarkMode.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
      localStorage.setItem("tema", "claro");
      botaoDarkMode.textContent = "🌙 Modo Escuro";
    } else {
      localStorage.setItem("tema", "escuro");
      botaoDarkMode.textContent = "☀️ Modo Claro";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formContato");
  const mensagemSucesso = document.getElementById("mensagem-sucesso");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // previne envio normal (reload da página)

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();

    if (nome === "" || email === "") {
      alert("Por favor, preencha nome e e-mail.");
      return;
    }

    mensagemSucesso.textContent = `Obrigado, ${nome}! Recebemos sua mensagem. Entraremos em contato em breve pelo e-mail ${email}.`;

    form.reset(); // limpa o formulário
  });
});