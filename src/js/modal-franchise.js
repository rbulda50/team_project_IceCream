(() => {
    const refs = {
      openModalBtn: document.querySelector("[franchise-modal-open]"),
      closeModalBtn: document.querySelector("[franchise-modal-close]"),
      sendModalBtn: document.querySelector("[franchise-modal-send]"),
      modal: document.querySelector("[franchise-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    refs.sendModalBtn.addEventListener("click", toggleModal,);
  
    function toggleModal() {
      document.body.classList.toggle("modal-open");
      refs.modal.classList.toggle("is-hidden");
    }
  })();