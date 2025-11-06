// js/scripts.js
document.addEventListener('DOMContentLoaded', function () {
    // Busca simulada
    const searchForm = document.querySelector('.search-form');
    if (searchForm) {
        const searchInput = searchForm.querySelector('input[name="q"]');
        const suggestionsEl = document.querySelector('.search-suggestions');

        const STORAGE_KEY = 'mlmb_searches';
        const MAX_SEARCHES = 8;

        function loadSearches() {
            try {
                const raw = localStorage.getItem(STORAGE_KEY);
                return raw ? JSON.parse(raw) : [];
            } catch (err) {
                return [];
            }
        }

        function saveSearch(term) {
            if (!term) return;
            const normalized = term.trim();
            if (!normalized) return;
            const list = loadSearches();
            // remove igual (case-insensitive)
            const filtered = list.filter(t => t.toLowerCase() !== normalized.toLowerCase());
            filtered.unshift(normalized);
            if (filtered.length > MAX_SEARCHES) filtered.length = MAX_SEARCHES;
            localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
            renderSuggestions();
        }

        function escapeHtml(s) {
            return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
        }

        function renderSuggestions(filter = '') {
            if (!suggestionsEl) return;
            const list = loadSearches();
            const items = filter ? list.filter(t => t.toLowerCase().includes(filter.toLowerCase())) : list;
            if (!items || items.length === 0) {
                suggestionsEl.innerHTML = '<li class="empty">Nenhuma pesquisa recente</li>';
                // só mostrar se o input estiver focado
                suggestionsEl.hidden = !(document.activeElement === searchInput);
                return;
            }

            // montar itens com botão de excluir
            suggestionsEl.innerHTML = items.map(t =>
                `<li class="suggestion-item" role="option">
            <span class="suggestion-text">${escapeHtml(t)}</span>
            <button class="del-btn" aria-label="Excluir ${escapeHtml(t)}">×</button>
         </li>`
            ).join('');

            // mostrar somente quando o input estiver em foco
            suggestionsEl.hidden = !(document.activeElement === searchInput);

            // attach click handlers
            Array.from(suggestionsEl.querySelectorAll('.suggestion-item')).forEach(li => {
                const textSpan = li.querySelector('.suggestion-text');
                const delBtn = li.querySelector('.del-btn');

                // clicar no texto seleciona a sugestão
                if (textSpan) {
                    textSpan.addEventListener('click', () => {
                        if (!searchInput) return;
                        searchInput.value = textSpan.textContent;
                        // Save and simulate submit
                        saveSearch(textSpan.textContent);
                        searchForm.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
                    });
                }

                // clicar no botão excluir remove do storage
                if (delBtn) {
                    delBtn.addEventListener('click', (ev) => {
                        ev.stopPropagation();
                        const term = textSpan?.textContent || '';
                        if (!term) return;
                        const current = loadSearches().filter(t => t.toLowerCase() !== term.toLowerCase());
                        localStorage.setItem(STORAGE_KEY, JSON.stringify(current));
                        renderSuggestions(searchInput?.value || '');
                    });
                }
            });
        }

        // submit handler
        searchForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const q = (searchInput?.value || '').trim();
            if (!q) return;
            saveSearch(q);
            // Implement your real search action here. For now keep the alert for feedback.
            alert('Pesquisar: ' + q);
            // hide suggestions after submit
            if (suggestionsEl) suggestionsEl.hidden = true;
        });

        // show/filter suggestions on input
        if (searchInput) {
            searchInput.addEventListener('input', (ev) => {
                renderSuggestions(ev.target.value);
            });
            searchInput.addEventListener('focus', () => renderSuggestions(''));
        }

        // hide suggestions when clicking outside
        document.addEventListener('click', (ev) => {
            if (!suggestionsEl) return;
            const path = ev.composedPath ? ev.composedPath() : (ev.path || []);
            if (!path.includes(suggestionsEl) && !path.includes(searchInput)) {
                suggestionsEl.hidden = true;
            }
        });

        // initial render
        renderSuggestions();
    }

    // ==== Controle do carrossel ====
    const carousels = document.querySelectorAll('.carousel-wrapper');
    carousels.forEach(wrapper => {
        const carousel = wrapper.querySelector('.book-carousel');
        const left = wrapper.querySelector('.arrow.left');
        const right = wrapper.querySelector('.arrow.right');

        // Função para atualizar visibilidade dos botões
        const updateArrowVisibility = () => {
            const scrollLeft = carousel.scrollLeft;
            const maxScroll = carousel.scrollWidth - carousel.clientWidth;

            left.style.opacity = scrollLeft <= 0 ? '0.3' : '1';
            right.style.opacity = scrollLeft >= maxScroll ? '0.3' : '1';

            left.style.cursor = scrollLeft <= 0 ? 'default' : 'pointer';
            right.style.cursor = scrollLeft >= maxScroll ? 'default' : 'pointer';
        };

        // Calcular o tamanho do scroll baseado no card + gap
        const getScrollAmount = () => {
            const card = carousel.querySelector('.book-card');
            if (!card) return 250;
            const cardWidth = card.offsetWidth;
            const gap = 50; // o gap definido no CSS
            return cardWidth + gap;
        };

        right.addEventListener('click', () => {
            const scrollAmount = getScrollAmount();
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        left.addEventListener('click', () => {
            const scrollAmount = getScrollAmount();
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });

        // Atualizar visibilidade dos botões no scroll
        carousel.addEventListener('scroll', updateArrowVisibility);

        // Atualizar no carregamento e quando o tamanho da janela mudar
        window.addEventListener('load', updateArrowVisibility);
        window.addEventListener('resize', updateArrowVisibility);

        // Chamada inicial
        updateArrowVisibility();
    });

    // ==== Adicionar livros extras ao carrossel (se desejar) ====
    // Lista de livros extras - edite/adicione conforme precisar
    const extraBooks = [

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