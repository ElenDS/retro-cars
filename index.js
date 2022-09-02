import { animate } from './animation.js';
import { renderContent } from './render.js';

let objects = document.querySelectorAll('nav ul li');
let select = document.querySelector('select');

for (let object of objects) {
  object.addEventListener('click', function rend(event) {
    animate({
      duration: 900,
      timing: function (timeFraction) {
        return Math.pow(timeFraction, 2);
      },
      retiming: function (timeFraction) {
        return 1 / Math.pow(timeFraction, 2) > 0.1
          ? 1 / Math.pow(timeFraction, 3)
          : 1 / 0;
      },
      draw: function (progress) {
        object.style.left = `${progress * 85}px`;
      },
    });
    
    const car = event.target.closest('li').getAttribute('value');

    renderContent(car);

    select.removeEventListener('change', rend);
    select.addEventListener('change', () => {
      renderContent(car);
    });


  });
}


select.addEventListener('change', () => {
  renderContent('bugatti');
});