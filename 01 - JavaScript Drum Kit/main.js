document.addEventListener('keydown', (e) => {
  let keyCode = e.keyCode;
  let audioElement = document.querySelector(`audio[data-key="${keyCode}"]`);
  let keyElement = document.querySelector(`div.key[data-key="${keyCode}"]`);
  if (audioElement === null) return;

  audioElement.currentTime = 0;
  audioElement.play();
  keyElement.classList.add('playing');
});

const keys = document.querySelectorAll('div.key');
keys.forEach(key => {
  key.addEventListener('transitionend', (e) => {
    key.classList.remove('playing');
  });
});
