// First card
(() => {
  const refs = {
    openModalBtn: document.querySelector("[ingredients1-modal-open]"),
    closeModalBtn: document.querySelector("[ingredients1-modal-close]"),
    modal: document.querySelector("[ingredients1-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();