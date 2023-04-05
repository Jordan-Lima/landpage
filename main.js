const menuItems = document.querySelectorAll('nav ul li a');

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    menuItems.forEach(item => {
      item.classList.remove('active');
    });
    item.classList.add('active');
  });
});

window.onload = function() {
  // Seleciona o elemento da imagem e define a imagem a ser exibida
  const imagem = document.getElementById("imagem");
  imagem.src = "https://images.pexels.com/photos/3197556/pexels-photo-3197556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  // Seleciona o elemento do texto e define o texto a ser exibido
  const texto = document.getElementById("texto");
  texto.innerHTML = "Essa é uma imagem de um belo pôr do sol na praia. As cores quentes do céu contrastam com as sombras dos coqueiros na areia. É uma cena incrível para apreciar e relaxar.";
}

function typeWrite(elemento){
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = ' ';
  textoArray.forEach(function(letra, i){   
    
  setTimeout(function(){
      elemento.innerHTML += letra;
  }, 75 * i)

});
}
const titulo = document.querySelector('.titulo-principal');
typeWrite(titulo);

