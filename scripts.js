class Livro {
    constructor(titulo, autor, totalDePaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.totalDePaginas = totalDePaginas;
        this.paginasLidas = '0%';

    }

    // Método de atualização de página
    paginaAtual(pagina) {
        let porcentagem = (pagina/this.totalDePaginas) * 100
        let int = Math.round(porcentagem)
        this.paginasLidas = `${int}%`;
    }
}

// Vetor principal e exemplos
var livros = [];
livros[0] = new Livro("Harry Potter e a Pedra Filosofal", "JK Rolling", 230);
livros[1] = new Livro("Sherlock Holmes", "Arthur Conan Dyle", 230);

function listar() {
    var i;
    const divListar = document.getElementById("listar");
    var conteudo = "<table class='table table-bordered'>";
    conteudo += "<tr><th>Livro</th><th>Autor</th><th>Total de Páginas</th><th>Páginas Lidas</th></tr>";

    // Percorrer o vetor inteiro 
    for(i = 0 ; i < livros.length ; i++) {
        conteudo += "<tr><td>" + livros[i].titulo + "</td>";
        conteudo += "<td>" + livros[i].autor + "</td>";
        conteudo += "<td>" + livros[i].totalDePaginas + "</td>";
        conteudo += "<td>" + livros[i].paginasLidas + "</td></tr>";
    }

    conteudo += "</table>";
    divListar.innerHTML = conteudo; // Listar todos os dados
}

function cadastrar() {
    const titulo = document.getElementById("titulo");
    const autor = document.getElementById("autor");
    const totalDePaginas = document.getElementById("totalDePaginas");

    // cadastrar e depois zerar os inpunts e retornar o novo listar
    var e = new Livro(titulo.value, autor.value, totalDePaginas.value);
    livros.push(e);
    alert("livro cadastrado");
    titulo.value = "";
    autor.value = "";
    totalDePaginas.value = "";
    listar()
}

function update() {
    const paginasLidas = document.getElementById("paginasLidas");
    const titulo = document.getElementById("titulo2");
    const livro = titulo.value;

    var controle = 0; // controlador caso nao ache um titulo válido a pesquisa

    // busca sequencial do titulo do livro
    for(let i = 0; i < livros.length; i++) {
        if(livros[i].titulo === livro) {
            livros[i].paginaAtual(paginasLidas.value); // chamar método de atualização
            controle = 1; // mudar o controlador para encontrado
        }
    }

    if (controle === 0 ) {
        alert("Livro nao cadastrado");
    } // erro

    // zerar atributos
    titulo.value = "";
    paginasLidas.value = "";

    listar() // atualizar a listagem
}

listar()
