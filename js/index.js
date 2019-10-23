let inputElement = document.getElementById('entrada');
let buttonElement = document.getElementById('botao');
let ulElement = document.getElementById('lista');
//Criando lista
let lista = [];

buttonElement.onclick = function (event) {
    //evitar que a pagina recarregue 
    event.preventDefault();

    let value = inputElement.value;

    if (value !== "") {
        //inserindo o texto na lista
        lista.push(value);
        //apagando a caixa de input
        inputElement.value = "";
        render();
    }else{
        alert("Insira algo")
    }



}

function remove(index) {

    lista.splice(index, 1);
    render();

}

function render() {

    ulElement.innerHTML = "";

    //Função .map para percorrer a lista, precisa receber uma outra funçao dentro; 
    lista.map(function (element, index) {
        //criando o elemento li do html
        let liElement = document.createElement('li');

        //Criando elemento p do html
        let pElement = document.createElement('p');

        //adicionando elementos à variavel 'pElement'
        pElement.appendChild(document.createTextNode(element));

        let btnElement = document.createElement('button');
        btnElement.appendChild(document.createTextNode("Deletar"));
        //setando atributos para o btnElement
        btnElement.setAttribute("type", "button");
        //adicionando Evento
        btnElement.setAttribute("onclick", "remove(" + index + ")");

        liElement.appendChild(pElement);
        liElement.appendChild(btnElement);

        ulElement.appendChild(liElement);
    });
}

render();