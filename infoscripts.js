window.onresize = function(){ location.reload(); }

var tl1 = new TimelineMax();

tl1
.to ('.infoinfo', 1, {opacity:0})
.to ('.infoartists', 1, {opacity:1})

var controller = new ScrollMagic.Controller();

var scene1 = new ScrollMagic.Scene({
  triggerElement: '.artists',
  triggerHook: "onEnter",
  duration: "100%",
  offset: "0px",
  reverse: true,
})
.setTween(tl1)
.addTo(controller);


var tl2 = new TimelineMax();

tl2
.to ('.infoartists', 1, {opacity:0})
.to ('.infoexhibition', 1, {opacity:1})

var controller = new ScrollMagic.Controller();

var scene2 = new ScrollMagic.Scene({
  triggerElement: '.exhibition',
  triggerHook: "onEnter",
  duration: "100%",
  offset: "0px",
  reverse: true,
})
.setTween(tl2)
.addTo(controller);


var tl3 = new TimelineMax();

tl3
.to ('.infoexhibition', 1, {opacity:0})
.to ('.infocolophon', 1, {opacity:1})
.to ('.arrowcontainer', 1, {opacity:0})

var controller = new ScrollMagic.Controller();

var scene3 = new ScrollMagic.Scene({
  triggerElement: '.colophon',
  triggerHook: "onEnter",
  duration: "100%",
  offset: "0px",
  reverse: true,
})
.setTween(tl3)
.addTo(controller);
