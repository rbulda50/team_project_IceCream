(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-buy-modal-open]"),
    openModalBuySecondBtn: document.querySelector("[data-buy-second-modal-open]"),
    closeModalBtn: document.querySelector("[data-buy-modal-close]"),
    modal: document.querySelector("[data-buy-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBuySecondBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
