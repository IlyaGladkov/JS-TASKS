let animation = document.querySelector('.animation')

let start = Date.now()

animation.addEventListener('click', () => {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      animation.style.marginLeft = timePassed / 5 + 'px';

      if (timePassed > 2000) clearInterval(timer);

    }, 10);
})