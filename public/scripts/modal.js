export default function Modal(){

    const modalWrapper = document.querySelector('.modal-wrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open(){
        //fucionalidade de atribuir a classe active para a modal
        modalWrapper.classList.add("active")
    }
    function close(){
        //funcionalidade de remover a classe active para a modal
        document.querySelector('.modal-wrapper').classList.remove("active")
    }
    return{ 
        open,
        close
    }
}