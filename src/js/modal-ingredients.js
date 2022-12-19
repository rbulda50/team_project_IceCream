// First card
(() => {
  const refs = {
    openModalBtn: document.querySelector("[ingredients1-modal-open]"),
    closeModalBtn: document.querySelector("[ingredients1-modal-close]"),
    sendModalBtn: document.querySelector("[ingredients1-modal-send]"),
    modal: document.querySelector("[ingredients1-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.sendModalBtn.addEventListener("click", toggleModal,);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
// Second card
(() => {
  const refs = {
    openModalBtn: document.querySelector("[ingredients2-modal-open]"),
    closeModalBtn: document.querySelector("[ingredients2-modal-close]"),
    sendModalBtn: document.querySelector("[ingredients2-modal-send]"),
    modal: document.querySelector("[ingredients2-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.sendModalBtn.addEventListener("click", toggleModal,);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
// Third card
(() => {
  const refs = {
    openModalBtn: document.querySelector("[ingredients3-modal-open]"),
    closeModalBtn: document.querySelector("[ingredients3-modal-close]"),
    sendModalBtn: document.querySelector("[ingredients3-modal-send]"),
    modal: document.querySelector("[ingredients3-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.sendModalBtn.addEventListener("click", toggleModal,);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();