package com.biblioteca.controller;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

// Esta anotação mapeia a URL do formulário para esta classe Servlet
@WebServlet("/cadastrarLivro")
public class CadastrarLivroServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    // O método doPost é chamado quando o formulário usa method="post"
    protected void doPost(HttpServletRequest request, HttpServletResponse response) 
           throws ServletException, IOException {
        
        // 1. Recuperar os dados do formulário usando os atributos 'name' do HTML
        String numeroLivro = request.getParameter("numeroLivro");
        String titulo = request.getParameter("tituloLivro");
        String autor = request.getParameter("nomeAutor");
        String quantidadeStr = request.getParameter("qtdEstoque");
        String sobrenome = request.getParameter("sobrenomeAutor");
        String categorias = request.getParameter("categoriasLivro");
        
        // 2. Converter dados (Exemplo: Quantidade)
        int quantidade = 0;
        try {
            quantidade = Integer.parseInt(quantidadeStr);
        } catch (NumberFormatException e) {
            // Lidar com erro se a quantidade não for um número válido
            System.err.println("Erro ao converter quantidade: " + quantidadeStr);
        }
        
        // 3. (Ação Principal) Aqui você processaria os dados:
        //    - Criar um objeto Livro.
        //    - Chamar a Camada de Serviço/DAO para salvar no Banco de Dados.
        
        System.out.println("--- Dados Recebidos do Formulário ---");
        System.out.println("Número: " + numeroLivro);
        System.out.println("Título: " + titulo);
        System.out.println("Autor: " + autor + " " + sobrenome);
        System.out.println("Quantidade: " + quantidade);
        System.out.println("Categorias: " + categorias);
        
        // 4. Enviar uma Resposta para o Usuário
        response.setContentType("text/html");
        response.getWriter().println("<html><body>");
        response.getWriter().println("<h1>✅ Livro '" + titulo + "' cadastrado com sucesso!</h1>");
        response.getWriter().println("<p>Número do Livro: " + numeroLivro + "</p>");
        response.getWriter().println("<a href='index.html'>Voltar ao Cadastro</a>");
        response.getWriter().println("</body></html>");
    }
}