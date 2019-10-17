
function init() {
  const [loader] = document.querySelectorAll('.loadingpage');

  function timeout(ms) {
    return () => new Promise(resolve => setTimeout(resolve, ms))
  }

  Promise.resolve()
    .then(timeout(2000))  // time until fade out animation begins
    .then(() => loader.classList.add('fadeOut'))
    .then(timeout(3000))  // time until loader removed from DOM allowing app interactiviy
    .then(() => loader.style.display = 'none')
}

init();
