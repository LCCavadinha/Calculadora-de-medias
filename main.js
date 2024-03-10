

const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando">';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado">';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="aprovado">Aprovado</span>';
const spanReprovado = '<span class="reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima:"));

let linhas = '';
// Adcionando um evento ao botão submit,criando uma função para que a página não seja atualizada quando o formulário for submetido;
form = addEventListener('submit', function (e){
    e.preventDefault();

    // Chamando as funções para dentro do evento;
    adcionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

// Função criada para adcionar linhas a tabela;
function adcionaLinha () {
    // Criando duas constantes e referenciando as id's da tag input;
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    // Condicional criada para verificar se a atividade já existe no array;
    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi adcionada.`)
    } else {
            // Enviando os inputs do usuário para os array's
    atividades.push(inputNomeAtividade.value);
    // parseFloat para as notas por que esse valor está sendo importado com string, e queremos que sejam numbers;
    // Quando pegamos o valor do input no html mesmo ele sendo do tipo number, qunado colocamos .value ele passa pra string, por isso precisamos converter;
    notas.push(parseFloat(inputNotaAtividade.value));

    // Criando uma variável para a tag tr
    let linha = '<tr>';
    // Concatenando a variável linha com a tag td, podemos fazer essa concatenação de duas formas;
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha = linha + `<td>${inputNotaAtividade.value}</td>`;
    // Operador ternário, if = ?, else = : ; aqui estamos criando uma condicional;
    // Condicional criada para verificar se o aluno foi aprovado ou reprovado na terceira coluna da primeira linha
    linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado }</td>`;
    linha += `</tr>`//Fechando a tag tr

    linhas += linha; 
    // ou linhas = linhas + linha
    // Limpando os campos de atividade e nota;
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';

    // .value no final da constante é pra o campo pegar o valor digitado nas tags input;
    // this.alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`);
    }
};

// Função criada para atualizar a tabela;
function atualizaTabela () {
    const corpoTabela = document.querySelector('tbody');
    // Para inserir um conteúdo dentro de uma tag usamos o atributo innerHTML;
    corpoTabela.innerHTML = linhas;
};

function atualizaMediaFinal () {
    const mediaFinal = calculaMediaFinal();

    // Atualizando a média final de acordo com o calculo de médias;
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);//limitando o número de casas décimais com a propriedade toFixed(valor 2 casas decimais);
    // Criando uma condição no operador ternário para definir se o usuário foi aprovado ou reprovado;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
    console.log(medias);
};

function calculaMediaFinal () {
    let somaDasNotas = 0;

    // Laço de repetição para receber todas as notas digitadas pelo usuário;
    for (let i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i];
    };

    // Reroernando o calculo das médias para ser usado em outra função;
    return (somaDasNotas / notas.length);

}