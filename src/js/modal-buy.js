(() => {
  const refs = {
    openModalBtn: document.querySelector("[buy-modal-open]"),
    openModalBuySecondBtn: document.querySelector("[buy-second-modal-open]"),
    closeModalBtn: document.querySelector("[buy-modal-close]"),
    modal: document.querySelector("[buy-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBuySecondBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
