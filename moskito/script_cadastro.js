document.addEventListener('DOMContentLoaded', () => {
    const bookForm = document.getElementById('bookForm');
    const bookImageInput = document.getElementById('bookImage');
    const imagePreview = document.getElementById('image-preview');
    const messageElement = document.getElementById('message');

    // Função para pré-visualizar a imagem selecionada
    bookImageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                imagePreview.src = event.target.result;
                imagePreview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        } else {
            imagePreview.src = '#';
            imagePreview.style.display = 'none';
        }
    });

    // Função para salvar os dados do formulário
    bookForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // 1. Coleta os dados do formulário
        const bookData = {
            id: Date.now(), // ID único baseado no timestamp
            numero: document.getElementById('numero').value,
            titulo: document.getElementById('titulo').value,
            autor: document.getElementById('autor').value,
            quantidade: document.getElementById('quantidade').value,
            sobrenome: document.getElementById('sobrenome').value,
            categorias: document.getElementById('categorias').value,
            // 2. Salva a imagem como Base64 string (se houver)
            imagemBase64: imagePreview.src !== '#' ? imagePreview.src : null 
        };

        // 3. Recupera os livros existentes ou inicia um novo array
        let books = JSON.parse(localStorage.getItem('booksCatalog')) || [];

        // 4. Adiciona o novo livro ao array
        books.push(bookData);

        // 5. Salva o array atualizado de volta no Local Storage
        try {
            localStorage.setItem('booksCatalog', JSON.stringify(books));
            
            // Sucesso!
            messageElement.textContent = "✅ Livro cadastrado com sucesso!";
            messageElement.style.color = "green";
            bookForm.reset(); // Limpa o formulário

            // Oculta a pré-visualização após salvar
            imagePreview.src = '#';
            imagePreview.style.display = 'none';

        } catch (error) {
            // Em caso de erro (ex: Local Storage lotado)
            messageElement.textContent = `❌ Erro ao salvar o livro: ${error.message}`;
            messageElement.style.color = "red";
        }

        // Limpa a mensagem após 3 segundos
        setTimeout(() => {
            messageElement.textContent = '';
        }, 3000);
    });
});