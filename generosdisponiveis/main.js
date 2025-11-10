// Lista de gêneros literários
const genres = [
    { id: 1, name: "Romance", count: 245, selected: false },
    { id: 2, name: "Suspense", count: 189, selected: false },
    { id: 3, name: "Ficção Científica", count: 156, selected: false },
    { id: 4, name: "Fantasia", count: 203, selected: false },
    { id: 5, name: "Terror", count: 134, selected: false },
    { id: 6, name: "Mistério", count: 178, selected: false },
    { id: 7, name: "Aventura", count: 167, selected: false },
    { id: 8, name: "Biografia", count: 98, selected: false },
    { id: 9, name: "História", count: 112, selected: false },
    { id: 10, name: "Poesia", count: 76, selected: false },
    { id: 11, name: "Autoajuda", count: 143, selected: false },
    { id: 12, name: "Infantil", count: 201, selected: false }
];

const genresGrid = document.getElementById('genresGrid');
const selectedCount = document.getElementById('selectedCount');
const clearBtn = document.getElementById('clearBtn');
const confirmBtn = document.getElementById('confirmBtn');

// Função para renderizar os gêneros
function renderGenres() {
    genresGrid.innerHTML = '';

    genres.forEach(genre => {
        const genreCard = document.createElement('div');
        genreCard.className = 'genre-card';
        if (genre.selected) {
            genreCard.classList.add('selected');
        }

        genreCard.innerHTML = `
            <div class="genre-name">${genre.name}</div>
            <div class="genre-count">${genre.count} livros</div>
        `;

        genreCard.addEventListener('click', () => toggleGenre(genre.id));
        genresGrid.appendChild(genreCard);
    });

    updateSelectedCount();
}

// Função para alternar a seleção de um gênero
function toggleGenre(genreId) {
    const genre = genres.find(g => g.id === genreId);
    genre.selected = !genre.selected;
    renderGenres();
}

// Função para atualizar o contador de selecionados
function updateSelectedCount() {
    const count = genres.filter(g => g.selected).length;

    if (count === 0) {
        selectedCount.textContent = 'Nenhum gênero selecionado';
    } else if (count === 1) {
        selectedCount.textContent = '1 gênero selecionado';
    } else {
        selectedCount.textContent = `${count} gêneros selecionados`;
    }
}

// Função para limpar a seleção
function clearSelection() {
    genres.forEach(genre => {
        genre.selected = false;
    });
    renderGenres();
}

// Função para confirmar a seleção
function confirmSelection() {
    const selectedGenres = genres.filter(g => g.selected);

    if (selectedGenres.length === 0) {
        alert('Por favor, selecione pelo menos um gênero.');
        return;
    }

    const selectedGenreNames = selectedGenres.map(g => g.name);
    alert(`Gêneros selecionados: ${selectedGenreNames.join(', ')}`);
}

// Event listeners
clearBtn.addEventListener('click', clearSelection);
confirmBtn.addEventListener('click', confirmSelection);

// Inicializar a página
renderGenres();