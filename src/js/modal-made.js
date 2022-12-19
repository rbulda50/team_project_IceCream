(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-made-modal-open]"),
    closeModalBtn: document.querySelector("[data-made-modal-close]"),
    modal: document.querySelector("[data-made-modal]"),

  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();

function onYouTubePlayerAPIReady() {
  player = new YT.Player('Youtube', {
    events: {'onReady': onPlayerReady}
  });
}
function onPlayerReady(event) {
  document.getElementById("playYoutube").addEventListener("click", function() {player.playVideo();});
  document.getElementById("pauseYoutube").addEventListener("click", function() {player.pauseVideo();});
}
