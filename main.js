

const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando">';
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado">';

let linhas = '';
// Adcionando um evento ao botão submit,criando uma função para que a página não seja atualizada quando o formulário for submetido;
form = addEventListener('submit', function (e){
    e.preventDefault();

    // Criando duas constantes e referenciando as id's da tag input;
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    // Criando uma variável para a tag tr
    let linha = '<tr>';
    // Concatenando a variável linha com a tag td, podemos fazer essa concatenação de duas formas;
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha = linha + `<td>${inputNotaAtividade.value}</td>`;
    // Operador ternário, if = ?, else = : ; aqui estamos criando uma condicional;
    // Condicional criada para verificar se o aluno foi aprovado ou reprovado na terceira coluna da primeira linha
    linha += `<td>${inputNotaAtividade.value >= 7 ? imgAprovado : imgReprovado }</td>`;
    linha += `</tr>`//Fechando a tag tr

    linhas += linha; 
    // ou linhas = linhas + linha

    const corpoTabela = document.querySelector('tbody');
    // Para inserir um conteúdo dentro de uma tag usamos o atributo innerHTML;
    corpoTabela.innerHTML = linhas;

    // Limpando os campos de atividade e nota;
    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
    

        // .value no final da constante é pra o campo pegar o valor digitado nas tags input;
    // this.alert(`Atividade: ${inputNomeAtividade.value} - Nota: ${inputNotaAtividade.value}`);


});