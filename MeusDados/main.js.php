// Aguarda o documento HTML estar completamente carregado
document.addEventListener('DOMContentLoaded', function() {

    // --- Dados de Exemplo ---
    // (Em um site real, isso viria de um banco de dados)
    const userData = {
        email: "maria.luiza@escola.com",
        id: "EMMLB-123456",
        password: "senha_super_secreta_123"
    };

    // --- Seleciona os elementos da página ---
    const emailEl = document.getElementById('user-email');
    const idEl = document.getElementById('user-id');
    const passwordDisplayEl = document.getElementById('user-password-display');
    const toggleButton = document.getElementById('toggle-password');
    const passwordIcon = document.getElementById('password-icon');

    // Variável para controlar o estado da senha (visível ou oculta)
    let isPasswordVisible = false;

    // --- Funções ---

    // 1. Função para preencher os dados na página
    function preencherDados() {
        emailEl.textContent = userData.email;
        idEl.textContent = userData.id;
        passwordDisplayEl.textContent = "••••••••••"; // Começa oculta
    }

    // 2. Função para alternar a visibilidade da senha
    function alternarSenha(event) {
        // Previne o comportamento padrão do link (que é rolar para o topo)
        event.preventDefault();

        // Inverte o estado
        isPasswordVisible = !isPasswordVisible;

        if (isPasswordVisible) {
            // Se for para MOSTRAR
            passwordDisplayEl.textContent = userData.password;
            passwordIcon.textContent = "visibility_off"; // Ícone de "olho fechado"
        } else {
            // Se for para OCULTAR
            passwordDisplayEl.textContent = "••••••••••";
            passwordIcon.textContent = "visibility"; // Ícone de "olho aberto"
        }
    }

    // --- Execução ---

    // 1. Preenche os dados quando a página carrega
    preencherDados();

    // 2. Adiciona o "ouvinte de clique" ao botão do olho
    toggleButton.addEventListener('click', alternarSenha);

});