var cliente = {
    nome: "",
    rg: "",
    cpf: "",
    email: "",
    total: 0,
    notas: [],
    media: 0,
    situacao: "",

    construtor : function (nome, rg, cpf, email) {
        cliente.nome = nome;
        cliente.rg = rg;
        cliente.cpf = cpf;
        cliente.email = email;
    },

    adicionarNotas: function (nota) {
        cliente.notas.push(nota);
        cliente.total += nota;
    },

    calcularMedia: function () {
        cliente.adicionarNotas(Number(document.getElementById("notas1").value));
        cliente.adicionarNotas(Number(document.getElementById("notas2").value));
        cliente.adicionarNotas(Number(document.getElementById("notas3").value));

        cliente.media = cliente.total / cliente.notas.length;

        return document.getElementById("media").value = (cliente.media);
    },

    situacao: function () {
        cliente.construtor(document.getElementById("n1").value, document.getElementById("n2").value,
            document.getElementById("n3").value, document.getElementById("n4").value);

        cliente.calcularMedia();
        document.getElementById("media").value = cliente.media;

        if (cliente.calcularMedia() <= 5) {
            cliente.situacao = "Reprovado";
        } else if (cliente.calcularMedia() > 7) {
            cliente.situacao = "Aprovado";
        } else {
            cliente.situacao = "Recuperação";
        }

        return document.getElementById("situacao").value = cliente.situacao;
    },

    relatorio: function () {
        document.getElementById("n").innerHTML = cliente.nome;
        document.getElementById("r").innerHTML = cliente.rg;
        document.getElementById("c").innerHTML = cliente.cpf;
        document.getElementById("e").innerHTML = cliente.email;
        document.getElementById("m").innerHTML = cliente.media;
        document.getElementById("s").innerHTML = cliente.situacao;
    }



}