import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

//Pegar todos os botões que existem com a class check

const checkButtons = document.querySelectorAll(".action a.check")

//pegar quando o marcado como lido for clicado

checkButtons.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", handleClick)
})

const deleteButton = document.querySelectorAll(".action a.delete")


deleteButton.forEach(button => {
    //adicionar a escuta
    button.addEventListener("click", (event) => handleClick(event, false))
})

function handleClick(event, check = true){
    event.preventDefault();
    const text = check ? "Marcar como lida" : "Excluir"
    const slug = check ? "check" : "delete"
    const roomId = document.querySelector("#room-id").dataset.id;
    const questionId= event.target.dataset.id;

    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

    modalTitle.innerHTML = `${text} esta pergunta`
    modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
    modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
    check ? modalButton.classList.remove("red") : modalButton.classList.add("red")

    modal.open()
}

// event => {
//     //Abrir modal
//     modalTitle.innerHTML = "Excluir essa pergunta"

//     modal.open()

//     event => {

//         modalTitle.innerHTML = "Marcar como lida"
//         //Abrir modal
//         modal.open()
//     }