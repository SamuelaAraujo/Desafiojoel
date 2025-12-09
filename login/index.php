<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Login</title>

</head>

<body>
<div class="site-header">
    <img src="fotos/IMG-20250513-WA0005.jpg" alt="Foto escola" class="school-photo">
    <span class="site-title">Biblioteca <br>André de Carvalho</span>
</div>

<div class="box">
    <div class="photo-row">
        <img src="fotos/IMG-20250818-WA0003.jpg" alt="Foto autor" class="circle-photo">
    </div>
    <h2>Login</h2>

    <form action="">
        <div class="inputBox">
            <input type="text" name="Email" autocomplete="off" autofocus required>
            <label>Email</label>
        </div>

        <div class="inputBox">
            <input type="password" id="senha" name="senha" autocomplete="off" required>
            <label>Senha</label>
            <button type="button" onclick="mostrarSenha()" aria-label="Mostrar Senha">👁</button>
        </div>

        <input type="submit" value="Entrar">
        <a href="Cadastro.php" class="CA">Cadastrar</a>
    </form>
</div>

<script>
    function mostrarSenha() {
        const campo = document.getElementById('senha');
        campo.type = campo.type === 'password' ? 'text' : 'password';
    }
</script>
</body>
</html>