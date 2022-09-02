export function animate({ timing, draw, duration, retiming }) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {

    let timeFraction = (time - start) / duration;    
   
    let progress = timeFraction < 1 ? timing(timeFraction) : retiming(timeFraction);

    draw(progress);

    if ( progress > 0) {
      requestAnimationFrame(animate);
    }
  });
}
