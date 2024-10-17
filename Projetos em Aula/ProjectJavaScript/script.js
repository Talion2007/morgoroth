//ToDo: Código de inicialização:
document.getElementById("titulo").innerText = "Referências de JavaScript";
console.log("Hello Narcóticos Achados");

//ToDo: Botão Primário:
let nome = prompt("Qual é o seu Nome?");
let mensagem = `Yamato Kudasai, ${nome} (O~~O)`;
document.getElementById("meuBotao").addEventListener("click", function () {
  document.getElementById("mensagem").innerText = mensagem;
});

//ToDo: Botão Secundário:
let katana = `Talion Elessar, o Matador de Orcs, o Destruidor de Corações, o Caçador de Dragões, o Tirano Ditador, o Implacável Guerreiro, o Faz-Viúvas, o Espectro do Anel, a Sombra Mortal, o Furtivo-Matador, o Arqueiro Certeiro, a Espada Afiada, o Grande Matador`;
document.getElementById("lenda").addEventListener("click", function () {
  document.getElementById("katana").innerText = katana;
});

//ToDo: Botão gerar:
function gerar() {
  var resp = document.getElementById("resp");
  resp.innerHTML = Math.floor(100 * Math.random());
}

//ToDo: Zueira:
// setTimeout(window.location.href = 'https://casasbahia.com.br/', 150);

//! Concatenação: Juntando Strings com o +
// let Mizu = "Kon'nichiwa​";
// let Desu = "Vitor Hugo";
// let OchaUno = Mizu + ", " + Desu + "!";
// console.log(OchaUno);

//? Como Concatenar com Números?
// let sominha = 5 + 10
// let resultado = "Berimbadas: " + sominha;
// console.log(resultado);

//! Template Literals: Uma Forma Moderna e Fácil de Concatenar
// let Gohan = "Sekkusu";
// let OchaDuo = `${Gohan}, ${Desu}? Kudasai? (O~O)`;
// console.log(OchaDuo);

//? Como usar Multiplas Linhas?
// let OchaTri = `Yamato Kudasaiiiiiiiiii... Yamato Kudasaiiiii, ${Desu}... Yamato... Kuda... SAIIIIIIIIII (>O<)`;
// console.log(OchaTri);

//* Exemplo de Template Literals:
// let Sushi = "Arigatou Gozai Masu";
// let OchaQuo = `Awawwww, ${Desu}! ${Sushi}! (^O^)`;
// console.log(OchaQuo);

//* Teste de Var
// var nome = "De dia é Maria";
// console.log(nome);
// if (true) {var nome = "De noite é João";}
// console.log(nome);

//* Teste de Let
// let Var01 = 25;
// console.log(Var01);
// if (true) {let Var01 = 30; console.log(Var01);}
// console.log(Var01);

//* Teste de Const
// const pi = 3.1415;
// console.log(pi);
// pi = 3.14;

//? Quais as Boas Práticas de CamelCase?
// let nomeDoUsuario = "Maria";   // Nome descritivo e claro
// let idadeUsuario = 28;         // Outro exemplo de nome descritivo
// let precoProduto = 59.99;      // Excelente nome para variáveis de preço

//? Quais as Más Práticas de CamelCase?
// let x = "João";  // O que é 'x'? Não sabemos!
// let z = 25;      // 'z' também é misterioso. Melhor evitar.
// let preco$produto = 20.50;  // Cuidado com caracteres especiais como '$'
// let 1idade = 30;  // Não pode começar uma variável com número! Vai dar erro.

//* Exemplo Prático de Var:
// var mensagem = "Oi, tudo bem?";
// console.log(mensagem); // Saída: "Oi, tudo bem?"
// var mensagem = "Olá, mundo!";
// console.log(mensagem); // Saída: "Olá, mundo!" — O valor foi alterado globalmente!

//* Exemplo Prático de Let:
// let nome = "Carlos";
// console.log(nome); // Saída: "Carlos"
// let nome = "Marcos"; // Erro! O `let` não permite redeclaração no mesmo escopo.

//* Exemplo Prático de Const:
// const pi = 3.14;
// console.log(pi); // Saída: 3.14
// pi = 3.14159; // Erro! `const` não permite reatribuir valores.

//? Como Modificar Propriedades internas de Const?
// const pessoa = { nome: "Ana", idade: 25 };
// pessoa.nome = "Maria"; // Permitido, já que estamos mudando uma propriedade interna
// console.log(pessoa.nome); // Saída: "Maria"
// pessoa = {}; // Erro! Não podemos reatribuir o objeto inteiro.

//? Quais as Diferenças entre Var, Let e Const?
// var x = 10;
// var x = 20;
// console.log(x); // Saída: 20 — `var` permite redeclaração
// let y = 10;
// let y = 20; // Erro! `let` não permite redeclarar no mesmo escopo
// const z = 10;
// const z = 20; // Erro! `const` não permite redeclaração ou reatribuição.

//! Tipos Primitivos - Number:
// let idade = 30;            // Um número inteiro
// let altura = 1.75;         // Um número decimal
// console.log(idade);        // Saída: 30
// console.log(altura);       // Saída: 1.75
// let soma = idade + altura; // Operação de soma
// console.log(soma);         // Saída: 31.75

//! Tipos Primitivos - String:
// let nome = "João";         // String com aspas duplas
// let saudacao = 'Oi, tudo bem?';  // String com aspas simples
// let mensagem = `Bem-vindo, ${nome}!`; // Template literal, combinando texto e variáveis
// console.log(nome);         // Saída: "João"
// console.log(saudacao);     // Saída: "Oi, tudo bem?"
// console.log(mensagem);     // Saída: "Bem-vindo, João!"

//! Tipos Primitivos - Boolean:
// let estaChovendo = false;  // Não está chovendo
// let temSol = true;         // Está ensolarado
// console.log(estaChovendo);  // Saída: false
// console.log(temSol);        // Saída: true

//! Tipos Primitivos - Null:
// let resultado = null;  // O resultado ainda não foi calculado
// console.log(resultado);  // Saída: null (nada de propósito)

//! Tipos Primitivos - Undefined:
// let preco;  // Variável declarada, mas sem valor
// console.log(preco);  // Saída: undefined (não há valor atribuído)

//! Tipos Primitivos - Symbol:
// let id = Symbol("id");   // Criando um símbolo
// let id2 = Symbol("id");  // Outro símbolo, mas diferente
// console.log(id === id2);  // Saída: false (são símbolos diferentes)

//! Prompt e Alert
// let salario = prompt("Digite seu Salário")
// let aumento = prompt("Digite seu Aumento")
// let total = parseInt(salario) + (parseInt(salario) / 100 * parseInt(aumento))
// alert("Seu novo salário é " + total)

//* Exercício de Prompt e Alert:
// let dolar = prompt("Digite suas Doletas")
// let reais = parseFloat(dolar) * 5.567
// alert("Seu novo salário é " + reais)

//* Exemplo de Prompt e Alert:
// let homus = prompt("Você é Gay? (0 para não e 1 para sim)")
// let mensagem = (homus <= 0) ? "Para de mentir, Viado Bixinha" : "Lá elu, Bixona se Assumindo";
// alert(mensagem)

//! Operadores Aritiméticos - Adição:
// let soma = 5 + 3;
// console.log(soma);  // Saída: 8

//* Exemplo com String (Atenção):
// let resultado = "5" + 3;
// console.log(resultado);  // Saída: "53"

//! Operadores Aritiméticos - Subtração:
// let subtracao = 8 - 3;
// console.log(subtracao);  // Saída: 5

//! Operadores Aritiméticos - Multiplicação:
// let multiplicacao = 2 * 3;
// console.log(multiplicacao);  // Saída: 6

//! Operadores Aritiméticos - Divisão:
// let divisao = 10/2
// console.log(divisao); // Saída: 5

//? O que acontece quando os resultados são Decimais?
// let divisaoDecimal = 7 / 2;
// console.log(divisaoDecimal);  // Saída: 3.5

//! Operadores Aritiméticos - Módulo:
// let resto = 10 % 3;
// console.log(resto);  // Saída: 1

//? Como saber se um número é Impar ou Par com Módulo?
// let numPar = 20;
// let numImpar = 25;
// let modNumPar = numPar % 2;
// let modNumImpar = numImpar % 2;
// console.log("Resto da divisão de 20 por 2:" + modNumPar); // Saída 0 (Par)
// console.log("Resto da divisão de 25 por 2:" + modNumImpar); // Saída 1 (Ímpar)

//* Exemplo de Ordem de Operação:
// let resultado = 5 + 2 * 3 - 4 / 2;
// console.log(resultado);  // Saída: 9

//* Exemplo com Parênteses:
// let resultado = (5 + 2) * (3 - 4 / 2);
// console.log(resultado);  // Saída: 7

//* Exemplo de Comparação entre Ordem de Operação e Parênteses:
// let parCount = (1+2) * (2-4);
// let semparCount = 1+2 * 2-4;
// console.log("Parentesis: " + parCount);
// console.log("Sem Parentesis: " + semparCount);

//* Execício de Soma:
// let a = 5, b = 3;
// let somaAB = a + b;
// console.log("Soma de " + a + " + " + b + " = " + somaAB);

//* Execício de Subtração:
// let c = 10, d = 4;
// let subCD = c - d;
// console.log("Multiplicação de " + c + " - " + d + " = " + subCD);

//* Execício de Multiplicação:
// let e = 6, f = 7;
// let mulEF = e * f;
// console.log("Multiplicação de " + e + " * " + f + " = " + mulEF);

//* Execício de Divisão:
// let g = 20, h = 4;
// let divGH = g / h;
// console.log("Divisão de " + g + " / " + h + " = " + divGH);

//* Execício de Módulo:
// let i = 15, j = 4;
// let modIJ = i % j;
// console.log("Módulo de " + i + " % " + j + " = " + modIJ);

//ToDo - Atividade 1: Soma de Compras
// let preco1 = 20, preco2 = 15, preco3 = 30;
// let precoTotal = preco1 + preco2 + preco3;
// console.log("Preço total: " + precoTotal);

//ToDo - Atividade 2: Calculando o Troco
// let valorPago = 100, valorProduto = 75;
// let valorTroco = valorPago - valorProduto;
// console.log("Valor do troco: " + valorTroco);

//ToDo - Atividade 3: Multiplicação de Produtos
// let quantidadeProduto = 5, valorUnitario = 10;
// let valorCompra = quantidadeProduto * valorUnitario;
// console.log("Valor da compra: " + valorCompra);

//ToDo - Atividade 4: Calculadora Simples
// let numeroAlfa = 9, numeroBeta = 3;
// let somaAlfaBeta = numeroAlfa + numeroBeta;
// let subtracaoAlfaBeta = numeroAlfa - numeroBeta;
// let multiplicacaoAlfaBeta = numeroAlfa * numeroBeta;
// let divisaoAlfaBeta = numeroAlfa / numeroBeta;
// console.log(`Alfa = ${numeroAlfa} e Beta = ${numeroBeta}:
// Soma = ${somaAlfaBeta},
// Subtração = ${subtracaoAlfaBeta},
// Multiplicação = ${multiplicacaoAlfaBeta},
// Divisão = ${divisaoAlfaBeta}`)

//ToDo - Atividade 5: Divisão Exata
// let numerador = 50, denominador = 5;
// let resultadoDivisao = numerador / denominador
// console.log("Resultado da Divisão: " + resultadoDivisao);

//! Operadores de Comparação - Igualdade Simples:
// let igualdadeSimples = 5 == "5";
// console.log(igualdadeSimples);

//! Operadores de Comparação - Igualdade Estrita:
// let igualdadeEstrita = 5 === "5"
// console.log(igualdadeEstrita);

//! Operadores de Comparação - Diferença Simples:
// let diferencaSimples = 5 != "5";
// console.log(diferencaSimples);

//! Operadores de Comparação - Igualdade Estrita:
// let diferencaEstrita = 5 !== "5"
// console.log(diferencaEstrita);

//! Operadores de Comparação - Maior Que:
// let comparacaoMaior = 5 > 3
// console.log(comparacaoMaior);

//! Operadores de Comparação - Maior ou Igual:
// let maiorIgual = 5 >= 5
// console.log(maiorIgual);

//! Operadores de Comparação - Menor Que:
// let comparacaoMenor = 5 < 7
// console.log(comparacaoMenor);

//! Operadores de Comparação - Menor ou Igual:
// let menorIgual = 5 <= 5
// console.log(menorIgual);

//ToDo - Desafios de Comparação:
// let alturaPessoaOne = 1.75, alturaPessoaDuo = 1.80;
// console.log(`Altura da Pessoa 1 (${alturaPessoaOne}) é igual a Altura da Pessoa 2 (${alturaPessoaDuo})? ${alturaPessoaOne == alturaPessoaDuo}`)
// let appleApple = 'Apple' != 'apple';
// console.log(`Apple é igual a apple? ${appleApple}`);
// let notaMedia = 7, notaFinal = 9;
// console.log(`Nota final (${notaFinal}) é maior que Média (${notaMedia})? ${notaFinal >= notaMedia}`);

//! Operadores Lógicos - And:
// let temCombustivel = true;
// let carroFuncionando = true;
// let guiaViagem = false;
// let possoViajar = temCombustivel && carroFuncionando;
// let consigoChegar = temCombustivel && guiaViagem;
// console.log(`Posso Viajar? ${possoViajar}`);
// console.log(`Consigo Chegar? ${consigoChegar}`);

//! Operadores Lógicos - Or:
// let diaEnsolarado = false;
// let guardaSol = true;
// let praiaGarantida = diaEnsolarado || guardaSol;
// console.log(`A praia está garantida? ${praiaGarantida}`)

//! Operadores Lógicos - Not:
// let estaChovendo = true;
// let naoChove = !estaChovendo;
// console.log(`Não Chove? ${naoChove}`);

//? Como utilizar os três operadorem em uma Questão?
// let diaEnsolarado = false;
// let guardaSol = true;
// let carroFuncionando = true;
// let estaChovendo = false;
// let fazerPiquinique = (diaEnsolarado || guardaSol) && carroFuncionando && !estaChovendo;
// console.log(`Podemos fazer piquinique? ${fazerPiquinique}`);

//ToDo - Atividade 1: Verificar se uma pessoa pode dirigir
// let idadePessoa = 15;
// let possuiCarteira = true;
// console.log(`A pessoa, com idade ${idadePessoa}, com carteira ${possuiCarteira}, pode dirigir? ${(idadePessoa >= 18) && possuiCarteira}`);

//ToDo - Atividade 2: Verificar se o cliente pode participar de Promoção
// let quantidadeCompras = 4;
// let valorCompras = 25;
// console.log(`A pessoa, com ${quantidadeCompras} compras no valor de ${valorCompras} pode participar da promoção? ${(quantidadeCompras >= 3) || (valorCompras >= 300)}`);

//! Estruturas Condicionais - If:
// let number = 10;
// if (number >= 0) {
//   console.log("O número é positivo")
// }

//! Estruturas Condicionais - Else:
// let idade = 14;
// if (idade >= 15) {
//   console.log("Você já é grandinho")
// } else {
//   console.log("Grandinho nem o pintinho")
// }

//! Estruturas Condicionais - Else-If:
// let idadeMina = prompt("Qual a idade da sua Mina?");
// let idadeMano = prompt(`Qual a sua idade, ${nome}?`);
// if (idadeMina < idadeMano) {
//   console.log(`Boa, ${nome}, Seu Pedófilo`);
// } else if (idadeMina > idadeMano) {
//   console.log(`Poxa, ${nome}, A Velha da Porsche`);
// } else {
//   console.log(`Eita, ${nome}, Virou Viado`);
// }

//* Exemplo de If, Else-If e Else:
// let nota = prompt(`Digite sua nota, ${nome}: `)
// if (nota > 10) {
//   alert(`Viado, ${nome}, a maior nota é 10!`);
// } else if (nota >= 7) {
//   alert(`Boa, ${nome}, Você está aprovado!`);
// } else if (nota >= 0) {
//   alert(`Eita, ${nome}, Você está reprovado!`);
// } else {
//   alert(`Ameba, ${nome}, sua nota é menor que 0!`)
// }

//ToDo - Atividade 1: Calculando desconto de produto
// let valorProd = parseFloat(prompt("Insira o preço do produto: "))
// if (valorProd > 100) {
//   let valorDesc = parseFloat(valorProd - (valorProd / 10))
//   alert(`Você tem direito ao desconto, ${nome}! O valor com desconto será: ${valorDesc.toFixed(2)}`)
// } else {
//   alert(`Você não tem direito ao desconto, ${nome}! O valor original é de: ${valorProd.toFixed(2)}`)
// }

//ToDo - Atividade 2: Validando se o número é Par e Positivo
// let numberDelta = prompt("Insira um número par e inteiro: ")
// let numberDeltaMod = numberDelta % 2
// if (numberDeltaMod == 0 && numberDelta >= 0) {
//   alert(`Boa, ${nome}, o número ${numberDelta} é par e inteiro!`)
// } else {
//   alert(`O número ${numberDelta} não atende a condição, ${nome}!`)
// }

//ToDo - Atividade 3: Verificação de uma senha simples
// let senha = prompt("Insira a senha numérica: ");
// let i = 0;
// if (senha == 1507) {
//   alert(`Acesso Liberado, Bem vindo ${nome}!`);
// } else {
//   while (i < 1) {
//     alert(`Acesso negado, ${nome}!!!`);
//   }
// }

//ToDo - Atividade 4: Sistema de cadastro de usuário
// let idade = prompt("Insira sua idade: ");
// if (idade >= 18) {
//   alert(`Acesso Liberado, Vamos continuar seu cadastro, ${nome}!`);
//   let email = prompt("insira sua email: ");
//   let senha = prompt("Insira sua senha: ");
//   if (email == "cagnin.lima.2007@gmail.com" && senha == "TalionElessar2007") {
//     alert(`Cadastro bem sucessedido, ${nome}! Seja bem vindo!!!`);
//   } else {
//     alert(`Falha no Cadastro, ${nome}! Vá embora!!!`);
//   }} else {
//   alert(`Acesso negado, ${nome}! Você é de Menor!!!`);
// }

//ToDo - Atividade 4: Sistema de cadastro de usuário
// let quantIngressos = parseFloat(prompt("Insira a quantidade de Ingressos que deseja: "))
// let valorIngressos = (500 * quantIngressos)
// if (quantIngressos >= 5) {
//   let valorDesc = parseFloat(valorIngressos - (valorIngressos / 10))
//   alert(`Você tem direito ao desconto, ${nome}! O valor com desconto será: ${valorDesc.toFixed(2)}`)
// } else {
//   alert(`Você não tem direito ao desconto, ${nome}! O valor total é de: ${valorProd.toFixed(2)}`)
// }

//! Condicional Avançada - Switch:
// let dia = prompt("Helo");
// switch (dia) {
//   case 1:
//     console.log("Domingo");
//     break;
//   case 2:
//     console.log("Segunda");
//     break;
//   case 3:
//     console.log("Terça");
//     break;
//   case 4:
//     console.log("Quarta");
//     break;
//   case 5:
//     console.log("Quinta");
//     break;
//   case 6:
//     console.log("Sexta");
//     break;
//   case 7:
//     console.log("Sabado");
//     break;
//   case 8:
//     console.log("Vai Cagar, Gay");
//     break;
// }

//! Estruturas de Repetições - For:
// let totalNotas = 0;
// let quantNotas = 4
// for (let i = 1; i <= quantNotas; i++) {
//   let nota = parseFloat(prompt(`Insira a Nota ${i}: `))
//   totalNotas += nota
// } alert(`Média das Notas: ${(totalNotas / quantNotas).toFixed(2)}`)

//! Estruturas de Repetições - While:
// let taxaEnzzoGay = 1;
// while (taxaEnzzoGay < 100000000) {
//   console.log("Enzzo Gay")
// }

//* Exercício 1 com While:
// let multi = 1
// while (multi <= 10) {
//   console.log(multi*5)
//   multi++
// }

//* Exercício 2 com While:
// let num = 1
// while (num <= 20) {
//   if (num % 2 == 0) {
//     console.log(`Número ${num} é par`)
//   } else{
//     console.log(`Número ${num} é impar`)
//   }
//   num++
// }

//* Exercício 3 com While:
// let password = prompt("Digite a senha: ")
// while (password !== "EnzzoGay") {
//   password = prompt("Digite a Senha Correta: ")
// }
// alert("Boa, Gay")

//ToDo - Desafio 1: Cálculo de Fatorial
// let total = 1
// for (let fatorial = parseInt(prompt("Digite um Número: ")); fatorial > 0; fatorial--) {
//   total *= fatorial
// }
// alert(total)

//ToDo - Desafio 2: Números Primos
// let numero = parseInt(prompt("Digite um Número: "));
// let primo = 0;
// for (let cont1 = 1; cont1 <= numero; cont1++) {
//   let divisores = 0;
//   for (let cont2 = 1; cont2 <= cont1; cont2++) {
//     if (cont1 % cont2 == 0) {
//       divisores++;
//     }
//   }
//   if (divisores == 2) {
//     primo++;
//     alert(cont1);
//   }
// }
// alert(`Total de números primos de 1 até ${numero} = ${primo}`);

//ToDo - Desafio 3: Potenciação
// let x = (parseInt(prompt("Digite um Número: ")))
// let n = (parseInt(prompt("Digite o Expoente: ")))
// let resultado = 1, i = 0;
// while (i < n) {
//   resultado *= x;
//   i++
// }
// alert(`Resultado total: ${resultado}`)

// //ToDo - Desafio 4 - A puta que te pariu
// let execucao = "S";
// while (execucao == "S" || execucao == "s") {
//   alert(
//   `  Conversão ºC para ºF - Opção 1
//   Conversão ºF para ºC - Opção 2 
//   Peso Ideal Para Homens - Opção 3 
//   Peso Ideal Para Womens - Opção 4`
//   );
//   let opcao = parseInt(prompt("Insira a Opção Desejada: "));
//   switch (opcao) {
//     case 1:
//       let tempCelciusI = parseFloat(prompt("Temperatura em ºC: "));
//       let tempFireI = (9 * tempCelciusI + 160) / 5;
//       alert(`Temperatura em ºF: ${tempFireI.toFixed(2)}`);
//       break;
//     case 2:
//       let tempFireII = parseFloat(prompt("Temperatura em ºF: "));
//       let tempCelciusII = ((tempFireII - 32) * 5) / 9;
//       alert(`Temperatura em ºC: ${tempCelciusII.toFixed(2)}`);
//       break;
//     case 3:
//       let alturaHomem = parseFloat(prompt("Altura do Macho: "));
//       let pesoHomem = (72.7 * alturaHomem) - 58;
//       alert(`O peso ideal é ${pesoHomem.toFixed(2)}`);
//       break;
//     case 4:
//       let alturaFemea = parseFloat(prompt("Altura da Femea: "));
//       let pesoFemea = (62.1 * alturaFemea) - 44.7;
//       alert(`O peso ideal é ${pesoFemea.toFixed(2)}`);
//       break;
//     default:
//       alert("Opção Inválida!");
//   }
//   execucao = prompt("Deseja Executar Novamente? (S/N): ");
// }
// alert("Valeu!!!");

//! Arrays:
// let frutas = ["Banana" , "Melão" , "Melancia", "Pitaya"]
// console.log(frutas[0])
// console.log(frutas[1])
// console.log(frutas[2])
// console.log(frutas[3])

//? Como saber a Quantidade de Itens no Array?
// let gandalf = ["Mithrandir" , "The Gray" , "The White"]
// console.log(`Nomes conhecidos de Gandalf: ${gandalf.length}`)

//? Como adicionar itens no Array?
// let tolkienBooks = ["Hobbit" , "O Senhor dos Anéis: A Companhia do Anel" , "O Senhor dos Anéis: As Duas Torres"]
// console.log(`Livros do Tolkien: ${tolkienBooks}`)
// tolkienBooks[3] = "O Senhor dos Anéis: O Retorno do Rei"
// tolkienBooks[4] = "O Silmarillion"
// console.log(`Livros do Tolkien: ${tolkienBooks}`)

//? Como Concatenar Arrays?
// let deserticas = ["Cactos","Suculentas"]
// let frutiferas = ["Abacateiro","Cajueiro"]
// let plantas = deserticas.concat(frutiferas)
// console.log(`Plantas: ${plantas}`)

//? Como mostrar os Itens Individualmente?
// let frutas = ["Maça","Pêra","Banana","Abacaxi","Ameixa"]
// frutas.forEach(function(fruta) {
//   console.log(fruta)
// })

//? Como fazer para mostras Os Índices dos Itens Individuais?
// let notas = [8,3,7,5,10,8,6,7,4,1]
// let aprovados = 0, reprovados = 0
// notas.forEach(function(nota,aluno) {
//   console.log(`A Nota do Aluno ${aluno} é ${nota}`)
//   if (nota > 7) {
//     aprovados++
//   } else {
//     reprovados++
//   }
// })
// console.log(`Alunos Aprovados: ${aprovados}`)
// console.log(`Alunos Reprovados: ${reprovados}`)

//? Como Adicionar Algo aos Itens?
// let frutas = ["Maça","Pêra","Banana","Abacaxi","Ameixa"]
// let frutasDelicia = frutas.map(function(fruta.) {
//   return "Delícia de " + fruta
// })
// console.log(frutasDelicia)

//* Exercício 1 - Deixar os Itens em Maíusculo:
// let frutas = ["Maça","Pêra","Banana","Abacaxi","Ameixa"]
// let frutasMaiusculo = frutas.map(function(fruta){
// return fruta.toLocaleUpperCase()
// })
// console.log(frutasMaiusculo)

//* Exercício 2 - Calculando 10% de Desconto:
// let produtos = ["Picanha","Sal","Carvão"]
// let precos = [100,15,40]
// let churrasquinhoComDesconto = precos.map(function(preco){
//   return preco * 0.9
// })
// console.log(`Produtos: ${produtos}`)
// console.log(`Preços Originais: ${precos}`)
// console.log(`Preços Descontados: ${churrasquinhoComDesconto}`)