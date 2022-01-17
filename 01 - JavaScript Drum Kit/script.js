// asociamos el manejador de teclado
document.addEventListener('keydown', keyEventHandler);

// Maneja el teclado.
function keyEventHandler(e) {
    const key = e.key;
    const keys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    if (keys.includes(key)) {
        playSoundByKey(key);
    }
}

// reproduce el audio y se encarga de mostrar en la interface que se 
// esta reproduciendo un sonido
function playSoundByKey(key) {
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    if (!audio) {
        return;
    }
    audio.currentTime = 0;
    audio.addEventListener('ended', audioStopHandler);
    const keyBox = document.querySelector(`.key[data-key="${key}"]`)
    keyBox.classList.add('playing');
    audio.play();
}

// maneja que sucede cuando se termina de reproducir un sonido.
function audioStopHandler(e) {
    const key = e.target.dataset.key;
    const keyBox = document.querySelector(`.key[data-key="${key}"]`)
    keyBox.classList.remove('playing');
}