const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const subjectInput = document.querySelector('#subject');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Aqui você pode adicionar código para enviar o formulário
  // utilizando a API fetch ou um serviço de terceiros, como o EmailJS

  // Exemplo de alerta de sucesso:
  alert('Mensagem enviada com sucesso!');
});

form.addEventListener('reset', () => {
  nameInput.value = '';
  emailInput.value = '';
  subjectInput.value = '';
  messageInput.value = '';
});

const limparBotao = document.querySelector('button[type="reset"]');

limparBotao.onclick = function() {
  if (confirm("Tem certeza de que deseja limpar todas as informações?")) {
    // Se o usuário confirmar, limpa os campos do formulário
    document.querySelector('form').reset();
  } else {
    // Se o usuário cancelar, não faz nada
    return false;
  }
}