import books from './books.js';

document.addEventListener('DOMContentLoaded', () => {
    const profileIcon = document.getElementById('profile-icon');
    const sideMenu = document.getElementById('side-menu');
    const closeMenu = document.getElementById('close-menu');
    const overlay = document.getElementById('overlay');
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');

    profileIcon.addEventListener('click', () => {
        sideMenu.classList.add('active');
        overlay.classList.add('active');
    });

    closeMenu.addEventListener('click', () => {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', () => {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
    });

    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        if (searchTerm.length > 0) {
            const filteredBooks = books.filter(book => 
                book.title.toLowerCase().includes(searchTerm) || 
                book.author.toLowerCase().includes(searchTerm)
            );
            displayResults(filteredBooks);
        } else {
            searchResults.style.display = 'none';
        }
    });

    function displayResults(results) {
        if (results.length > 0) {
            searchResults.innerHTML = results.map(book => `
                <div class="search-result-item">
                    <img src="${book.image}" alt="Capa do livro ${book.title}">
                    <div>
                        <p><strong>${book.title}</strong></p>
                        <p>${book.author}</p>
                    </div>
                </div>
            `).join('');
            searchResults.style.display = 'block';
        } else {
            searchResults.style.display = 'none';
        }
    }
});
