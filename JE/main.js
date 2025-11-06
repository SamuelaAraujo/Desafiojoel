// js/scripts.js
document.addEventListener('DOMContentLoaded', function () {
  // Busca simulada
  const searchForm = document.querySelector('.search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Pesquisar: ' + (this.q?.value || ''));
    });
  }

  // ==== Controle do carrossel ====
  const carousels = document.querySelectorAll('.carousel-wrapper');
  carousels.forEach(wrapper => {
    const carousel = wrapper.querySelector('.book-carousel');
    const left = wrapper.querySelector('.arrow.left');
    const right = wrapper.querySelector('.arrow.right');

    right.addEventListener('click', () => {
      carousel.scrollBy({ left: 250, behavior: 'smooth' });
    });
    left.addEventListener('click', () => {
      carousel.scrollBy({ left: -250, behavior: 'smooth' });
    });
  });

  // ==== Adicionar livros extras ao carrossel (se desejar) ====
  // Lista de livros extras - edite/adicione conforme precisar
  const extraBooks = [
    { title: 'Red Queen', author: 'Victoria Aveyard', img: 'https://via.placeholder.com/260x360?text=Red+Queen' },
    { title: 'Fault in Our Stars', author: 'John Green', img: 'https://via.placeholder.com/260x360?text=Fault+in+Our+Stars' },
    { title: 'Pride and Prejudice', author: 'Jane Austen', img: 'https://via.placeholder.com/260x360?text=Pride+and+Prejudice' },
    { title: 'O Alquimista', author: 'Paulo Coelho', img: 'https://via.placeholder.com/260x360?text=O+Alquimista' },
    { title: '1984', author: 'George Orwell', img: 'https://via.placeholder.com/260x360?text=1984' }
  ];

  const carouselContainer = document.querySelector('.book-carousel');
  if (carouselContainer) {
    extraBooks.forEach(b => {
      const card = document.createElement('div');
      card.className = 'book-card';

      const img = document.createElement('img');
      img.src = b.img;
      img.alt = `Capa de ${b.title}`;
      card.appendChild(img);

      const h3 = document.createElement('h3');
      h3.textContent = b.title;
      card.appendChild(h3);

      const p = document.createElement('p');
      p.textContent = b.author;
      card.appendChild(p);

      const a = document.createElement('a');
      a.href = '#';
      a.className = 'book-link';
      a.textContent = 'SAIBA MAIS';
      card.appendChild(a);

      carouselContainer.appendChild(card);
    });
  }
});

