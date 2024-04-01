const form = document.getElementById('form-contato');
const Telefones = [];

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha(){
    const inputNome = document.getElementById('nome-contato');
    const inputTelefone = document.getElementById('telefone-contato');

    if (Telefones.includes(inputTelefone.value)) {
        alert(`O telefone ${inputTelefone.value} já está salvo.`);
    } else {
        Telefones.push(inputTelefone.value);

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
}

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela(){
    const compoTabela = document.querySelector('tbody');
    compoTabela.innerHTML = linhas;
}