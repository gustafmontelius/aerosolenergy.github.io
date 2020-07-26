$( document ).ready(function() {
window.onresize = function(){ location.reload(); }
console.clear();

const $ = (a) => document.querySelectorAll(a).length == 1 ? document.querySelector(a) : document.querySelectorAll(a);

$('.header__indicator').addEventListener('click', (e) => {
	const
	clickPoint = e.layerX,
	totalWidth = parseInt(getComputedStyle(e.target).width),
	clickPerc = clickPoint / totalWidth,
	scrollToPoint = (document.documentElement.scrollHeight - innerHeight) * clickPerc;

	// not quite scrolling to the right point toward the end ..¯\_(ツ)_/¯
	scrollTo({
		top: scrollToPoint,
		behavior: 'smooth'
	});
});


	// set scroll indicator
	$('.header__indicator').style.setProperty('--scroll-perc', '${scrollPerc * 100}%');

  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};

  function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
  }


  //Intro, former, namn
  var tl1 = new TimelineMax();

  tl1
  .from ('.smallsquare', 1, {opacity:0})
  .from ('.trigger2', 3, {opacity:1})

  var controller = new ScrollMagic.Controller();

  var scene1 = new ScrollMagic.Scene({
    triggerElement: '.trigger1',
    triggerHook: "onLeave",
    duration: "200%",
    reverse: true,
  })
  .setPin('.trigger1')
  .setTween(tl1)
  .addTo(controller);

  //Sara Andreasson
  var tl3 = new TimelineMax();

  tl3
  .from ('.sara1', 3, {autoAlpha:0}, "-=0")
  .from ('.btsara1', 3, {autoAlpha:0}, "-=3")
  .from ('.sara2', 3, {autoAlpha:0}, "-=0")
  .to ('.btsara1', 3, {autoAlpha:0}, "-=0")

  .from ('.sara3', 3, {autoAlpha:0}, "-=3")
  .from ('.btsara2', 3, {autoAlpha:0}, "-=2")
  .to ('.btsara2', 3, {autoAlpha:0}, "-=0")

  .from ('.sara4', 3, {autoAlpha:0}, "-=3")
  .from ('.btsara3', 3, {autoAlpha:0}, "-=2")
  .to ('.btsara3', 3, {autoAlpha:0}, "-=0")

  .from ('.sara5', 3, {autoAlpha:0}, "-=3")
  .from ('.btsara4', 3, {autoAlpha:0}, "-=2")
  .from ('.sara6', 3, {autoAlpha:0}, "-=0")
  .to ('.btsara4', 3, {autoAlpha:0}, "-=0")

  .from ('.sara7', 3, {autoAlpha:0}, "-=3")
  .from ('.btsara5', 3, {autoAlpha:0}, "-=2")
  .to ('.btsara5', 3, {autoAlpha:0}, "-=0")

  .from ('.sara8', 3, {autoAlpha:0}, "-=3")
  .from ('.btsara6', 3, {autoAlpha:0}, "-=2")
  .from ('.sara9', 3, {autoAlpha:0}, "-=0")
  .to ('.btsara6', 3, {autoAlpha:0}, "+=0")

  var controller = new ScrollMagic.Controller();

  var scene3 = new ScrollMagic.Scene

  ({
    triggerElement: '.saraandreasson',
    triggerHook: "onLeave",
    duration: "2500%",
    reverse: true,
  })

  .setPin('.saraandreasson')
  .setTween(tl3)
  .addTo(controller);


  //Hanna Antonsson
  var tl4 = new TimelineMax();

  tl4
  .from ('.hanna1', 3, {opacity:0}, "-=0")
  .from ('.bthanna1', 3, {autoAlpha:0}, "-=3")
  .from ('.hanna2', 3, {opacity:0}, "-=0")
  .to ('.bthanna1', 3, {autoAlpha:0}, "-=0")

  .from ('.hanna3', 3, {opacity:0}, "-=3")
  .from ('.bthanna2', 3, {autoAlpha:0}, "-=2")
  .to ('.bthanna2', 3, {autoAlpha:0}, "-=0")

  .from ('.bthanna3', 3, {autoAlpha:0}, "-=3")
  .from ('.hanna4', 3, {opacity:0}, "-=2")
  .to ('.bthanna3', 3, {autoAlpha:0}, "-=0")

  var controller = new ScrollMagic.Controller();

  var scene4 = new ScrollMagic.Scene({
    triggerElement: '.hannaantonsson',
    triggerHook: "onLeave",
    duration: "2500%",
    reverse: true,
  })
  .setPin('.hannaantonsson')
  .setTween(tl4)
  .addTo(controller);


  //Björn Engberg
  var tl5 = new TimelineMax();

  tl5
  .from ('.bjorn1', 3, {opacity:0}, "-=0")
  .from ('.btbjorn1', 3, {autoAlpha:0}, "-=3")
  .from ('.bjorn2', 3, {opacity:0}, "-=0")
  .from ('.bjorn3', 3, {opacity:0}, "-=0")
  .to ('.btbjorn1', 3, {opacity:0}, "-=0")

  .from ('.btbjorn2', 3, {opacity:0}, "-=3")
  .from ('.bjorn4', 3, {opacity:0}, "-=2")
  .from ('.bjorn5', 3, {opacity:0}, "-=0")
  .from ('.bjorn6', 3, {opacity:0}, "-=0")
  .to ('.btbjorn2', 3, {opacity:0}, "-=0")

  var controller = new ScrollMagic.Controller();

  var scene5 = new ScrollMagic.Scene({
    triggerElement: '.bjornengberg',
    triggerHook: "onLeave",
    duration: "2500%",
    reverse: true,
  })
  .setPin('.bjornengberg')
  .setTween(tl5)
  .addTo(controller);


  //Adam Haugbak
  var tl6 = new TimelineMax();

  tl6
  .from ('.adam1', 3, {opacity:0}, "-=0")
  .from ('.btadam1', 3, {autoAlpha:0}, "-=3")
  .from ('.adam2', 3, {opacity:0}, "-=0")
  .to ('.btadam1', 3, {autoAlpha:0}, "-=0")

  .from ('.btadam2', 3, {autoAlpha:0}, "-=3")
  .from ('.adam3', 3, {opacity:0}, "-=2")
  .to ('.btadam2', 3, {autoAlpha:0}, "-=0")

  var controller = new ScrollMagic.Controller();

  var scene6 = new ScrollMagic.Scene({
    triggerElement: '.adamhaugbak',
    triggerHook: "onLeave",
    duration: "2500%",
    reverse: true,
  })
  .setPin('.adamhaugbak')
  .setTween(tl6)
  .addTo(controller);


  //Oscar Häggström
  var tl7 = new TimelineMax();

  tl7
  .from ('.oscar1', 3, {opacity:0}, "-=0")
  .from ('.btoscar1', 3, {autoAlpha:0}, "-=3")
  .from ('.oscar2', 3, {opacity:0}, "-=0")
  .from ('.oscar3', 3, {opacity:0}, "-=0")
  .from ('.oscar4', 3, {opacity:0}, "-=0")
  .to ('.btoscar1', 3, {autoAlpha:0}, "-=0")

  var controller = new ScrollMagic.Controller();

  var scene7 = new ScrollMagic.Scene({
    triggerElement: '.oscarhaggstrom',
    triggerHook: "onLeave",
    duration: "2500%",
    reverse: true,
  })
  .setPin('.oscarhaggstrom')
  .setTween(tl7)
  .addTo(controller);

  //Jenny Johansson
  var tl8 = new TimelineMax();

  tl8
  .from ('.jenny1', 3, {opacity:0}, "-=0")
  .from ('.btjenny1', 3, {autoAlpha:0}, "-=3")
  .from ('.jenny2', 3, {opacity:0}, "-=0")
  .from ('.jenny3', 3, {opacity:0}, "-=0")
  .from ('.jenny4', 3, {opacity:0}, "-=0")
  .from ('.jenny5', 3, {opacity:0}, "-=0")
  .from ('.jenny6', 3, {opacity:0}, "-=0")
  .from ('.jenny7', 3, {opacity:0}, "-=0")
  .to ('.btjenny1', 3, {autoAlpha:0}, "-=0")

  var controller = new ScrollMagic.Controller();

  var scene8 = new ScrollMagic.Scene({
    triggerElement: '.jennyjohansson',
    triggerHook: "onLeave",
    duration: "2500%",
    reverse: true,
  })
  .setPin('.jennyjohansson')
  .setTween(tl8)
  .addTo(controller);


  //Andreas Sandberg
  var tl9 = new TimelineMax();

  tl9
  .from ('.andreas1', 3, {opacity:0}, "-=0")
  .from ('.btandreas1', 3, {autoAlpha:0}, "-=3")
  .from ('.andreas2', 3, {opacity:0}, "-=0")
  .to ('.btandreas1', 3, {autoAlpha:0}, "-=0")

  .from ('.andreas3', 3, {opacity:0}, "-=3")
  .from ('.btandreas2', 3, {autoAlpha:0}, "-=2")
  .to ('.btandreas2', 3, {autoAlpha:0}, "-=0")

  .from ('.andreas4', 3, {opacity:0}, "-=3")
  .from ('.btandreas3', 3, {autoAlpha:0}, "-=2")
  .from ('.andreas5', 3, {opacity:0}, "-=0")
  .from ('.andreas6', 3, {opacity:0}, "-=0")
  .to ('.btandreas3', 3, {autoAlpha:0}, "-=0")

  var controller = new ScrollMagic.Controller();

  var scene9 = new ScrollMagic.Scene({
    triggerElement: '.andreassandberg',
    triggerHook: "onLeave",
    duration: "2500%",
    reverse: true,
  })
  .setPin('.andreassandberg')
  .setTween(tl9)
  .addTo(controller);


  //Karin Ström
  var tl10 = new TimelineMax();

  tl10
  .from ('.karin1', 3, {opacity:0}, "-=0")
  .from ('.btkarin1', 3, {autoAlpha:0}, "-=3")
  .from ('.karin2', 3, {opacity:0}, "-=0")
  .to ('.btkarin1', 3, {autoAlpha:0}, "-=0")

  .from ('.karin3', 3, {opacity:0}, "-=3")
  .from ('.btkarin2', 3, {autoAlpha:0}, "-=2")
  .from ('.karin4', 3, {opacity:0}, "-=0")
  .to ('.btkarin2', 3, {autoAlpha:0}, "-=0")

  var controller = new ScrollMagic.Controller();

  var scene10 = new ScrollMagic.Scene({
    triggerElement: '.karinstrom',
    triggerHook: "onLeave",
    duration: "2500%",
    reverse: true,
  })
  .setPin('.karinstrom')
  .setTween(tl10)
  .addTo(controller);

});
