// Iniciando as funções apenas quando o documento estiver pronto
// ou seja, a página esta totalmente carregada
$(document).ready(function(){
    // Assim que a tela for 'scrollada' vai executar uma função
    $(window).scroll(() => {
        // Obtendo a distancia da navbar para o topo da tela
        let navDistance = $('#mainNav').offset().top
        // Se a distancia for maior que 72 (tamanho do elemento + margem)
        if (navDistance > 72) {
            
            $('#mainNav').addClass('navbar-scrolled')
        } else {
            $('#mainNav').removeClass('navbar-scrolled')
        }
    })
  });