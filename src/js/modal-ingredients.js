// First card
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-ingredients1-modal-open]"),
    closeModalBtn: document.querySelector("[data-ingredients1-modal-close]"),
    modal: document.querySelector("[data-ingredients1-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
// Second card
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-ingredients2-modal-open]"),
    closeModalBtn: document.querySelector("[data-ingredients2-modal-close]"),
    modal: document.querySelector("[data-ingredients2-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();
// Third card
(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-ingredients3-modal-open]"),
    closeModalBtn: document.querySelector("[data-ingredients3-modal-close]"),
    modal: document.querySelector("[data-ingredients3-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();