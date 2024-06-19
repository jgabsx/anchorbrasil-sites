// Inicializa o Swiper passando o seletor CSS '.swiper' como o elemento contêiner
var swiper = new Swiper(".swiper", {
    // Configura o efeito de transição para 'coverflow'
    effect: "coverflow",
    // Habilita o cursor de pegar ('grab') ao passar o mouse sobre os slides
    grabCursor: true,
    // Centraliza os slides ativos
    centeredSlides: true,
    // Configura as opções específicas para o efeito 'coverflow'
    coverflowEffect: {
      // Configura a rotação dos slides
      rotate: 0,
      // Configura o alongamento dos slides
      stretch: 0,
      // Configura a profundidade do efeito 'coverflow'
      depth: 100,
      // Configura o modificador do efeito 'coverflow'
      modifier: 2.5
    },
    // Habilita a navegação com o teclado
    keyboard: {
      enabled: true
    },
    // Configurações para o uso da roda do mouse
    mousewheel: {
      enabled: true, // Habilita o uso da roda do mouse para rolar os slides
      sensitivity: 2 // Ajusta a sensibilidade do scroll
    },
    // Define o espaçamento entre os slides
    spaceBetween: 30,
    // Desabilita o looping dos slides
    loop: false,
    // Configurações de pontos de interrupção responsivos
    breakpoints: {
      // Para largura de tela igual ou superior a 640 pixels
      640: {
        // Define o número de slides visíveis como 2
        slidesPerView: 2
      },
      // Para largura de tela igual ou superior a 1024 pixels
      1024: {
        // Define o número de slides visíveis como 3
        slidesPerView: 3
      }
    }
  });

// Navega para o segundo slide (índice 1) sem animação
swiper.slideTo(1, false, false);
