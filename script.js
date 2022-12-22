let $shape = document.querySelectorAll('.title-cover');
let $text = document.querySelectorAll('.title-text');
let $circle = document.querySelector('.circle');

let tl = new TimelineMax({ paused: 'true' });

tl.staggerTo($shape, .5, {
  scaleX: 1,
  delay: 1,
  ease: Power3.easeInOut 
},0.15);

tl.to($text, 0, {
  autoAlpha: 1 
});


tl.staggerTo($shape, .4, {
  transformOrigin: '0 100%',
  y: 5,
  scaleY: 0.1,
  ease: Power3.easeIn 
},0.15, '=-0.1');

tl.to($circle, .3, {
  scale: 1,
  ease: Back.easeOut 
});


tl.restart();

setTimeout(function () {
  tl.reverse();
}, 4000);