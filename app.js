const btnModal = document.querySelectorAll('#btn-modal')
const modals = document.querySelectorAll('.modal')

btnModal.forEach(btn => {
    btn.addEventListener('click', function() {
        let idModal = this.dataset.id
        openModal(idModal)
    }) 
})

function openModal(idModal) {
    let modal = document.getElementById(idModal)
    modal.style.display = 'block'
    modal.addEventListener('click', function() {
        modal.style.display = 'none'
    })
}