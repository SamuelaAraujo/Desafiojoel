function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const body = document.body;
    sidebar.classList.toggle('open');
    body.classList.toggle('menu-open'); 
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookForm');
    const imageInput = document.getElementById('bookImage');
    const imagePreview = document.getElementById('image-preview');
    const imageText = document.getElementById('image-text');
    const sinopseTextarea = document.getElementById('sinopse');
    const sinopseCharCount = document.getElementById('sinopseCharCount');
    const maxChars = 500;
    
    let imageDataURL = null;
    let bookId = null; 

    // Lógica de Edição: Recupera o ID da URL e o único livro existente
    const urlParams = new URLSearchParams(window.location.search);
    const editId = urlParams.get('editId');
    
    // Recupera a lista de livros (que agora deve ter no máximo 1)
    let books = JSON.parse(localStorage.getItem('books') || '[]');
    
    if (editId) {
        // Se houver um livro, usa o ID dele para o processo de edição/sobrescrita
        if (books.length > 0) {
            const bookToEdit = books[0]; 
            bookId = bookToEdit.id; 
            
            document.querySelector('h1').textContent = 'Editar Livro';
            document.querySelector('.save-button').textContent = 'SALVAR ALTERAÇÕES';
            
            if (bookToEdit) {
                document.getElementById('titulo').value = bookToEdit.title;
                document.getElementById('autor').value = bookToEdit.author;
                document.getElementById('sobrenome').value = bookToEdit.lastName;
                document.getElementById('quantidade').value = bookToEdit.quantity;
                document.getElementById('categorias').value = bookToEdit.categories;
                document.getElementById('sinopse').value = bookToEdit.sinopse;
                
                imageDataURL = bookToEdit.image; // Guarda a imagem antiga
                
                if (imageDataURL && imageDataURL !== 'placeholder') {
                    imagePreview.src = imageDataURL;
                    imagePreview.style.display = 'block';
                    imageText.style.display = 'none';
                }
            }
        }
    } else if (books.length > 0) {
        // Se já houver um livro no catálogo (e não for edição), mantemos o ID 
        // dele para garantir que o novo livro o sobrescreva usando o mesmo ID
        bookId = books[0].id;
    }


    // Lógica do contador de caracteres (Interativa)
    if (sinopseTextarea) {
        sinopseTextarea.addEventListener('input', function() {
            const currentChars = this.value.length;
            sinopseCharCount.textContent = `${currentChars} / ${maxChars} caracteres`;
            
            // Feedback visual no textarea
            sinopseTextarea.classList.remove('warning', 'danger');
            if (currentChars >= maxChars * 0.9) { 
                sinopseCharCount.style.color = '#e74c3c'; // Vermelho
                sinopseTextarea.classList.add('danger');
            } else if (currentChars >= maxChars * 0.7) {
                sinopseCharCount.style.color = '#f39c12'; // Laranja
                sinopseTextarea.classList.add('warning');
            } else {
                sinopseCharCount.style.color = '#777'; // Cinza padrão
            }
        });
        sinopseTextarea.dispatchEvent(new Event('input')); 
    }

    // Lógica do Preview da Imagem
    imageInput.addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imageDataURL = e.target.result; 
                imagePreview.src = imageDataURL;
                imagePreview.style.display = 'block';
                imageText.style.display = 'none';
            };
            reader.readAsDataURL(file);
        }
    });

    // Lógica de salvamento (Mantém APENAS UM LIVRO)
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const isEditing = !!editId; 
        
        const newBookData = {
            // Usa o ID existente ou cria um novo
            id: bookId || Date.now().toString(), 
            title: document.getElementById('titulo').value,
            author: document.getElementById('autor').value,
            lastName: document.getElementById('sobrenome').value,
            quantity: document.getElementById('quantidade').value,
            categories: document.getElementById('categorias').value,
            sinopse: document.getElementById('sinopse').value, 
            image: imageDataURL || 'placeholder' 
        };
        
        // MUDANÇA ESSENCIAL: Zera o array de livros.
        books = []; 
        
        // Marca o novo livro como "novo"
        newBookData.isNew = true; 
        books.push(newBookData); // Adiciona APENAS o livro atual
        

        if (isEditing) {
            alert('Livro atualizado com sucesso! O catálogo agora contém apenas este livro.');
        } else {
            alert('Novo livro cadastrado com sucesso! O livro anterior (se existia) foi removido.');
        }

        // Salva o array contendo apenas 1 livro
        localStorage.setItem('books', JSON.stringify(books));
        window.location.href = 'catalogo.html';
    });
});