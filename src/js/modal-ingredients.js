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
// Second card
(() => {
  const refs = {
    openModalBtn: document.querySelector("[ingredients2-modal-open]"),
    closeModalBtn: document.querySelector("[ingredients2-modal-close]"),
    modal: document.querySelector("[ingredients2-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();
// Third card
(() => {
  const refs = {
    openModalBtn: document.querySelector("[ingredients3-modal-open]"),
    closeModalBtn: document.querySelector("[ingredients3-modal-close]"),
    modal: document.querySelector("[ingredients3-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();