$(document).foundation().ready(function(){
	$('.carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 1500,
		arrows: false,
	});
});

// ---------- Top-bar class changing ---------- 

  $(window).scroll(function(){
    var st = $(window).scrollTop()
    if(st > 0){
      $('.header').addClass('menu-on-scroll');
      $('#bcorelogo').attr('src','img/bclogodark.png')
    }else{
      $('.header').removeClass('menu-on-scroll');
      $('#bcorelogo').attr('src','img/bclogo.png')
    }
  });


  $('.burger-menu').click(function() {
    $('.menu-right').toggleClass('active')
  });

// ---------- /Top-bar class changing ----------
// ---------- PC screen blocks filler ----------
var shapeColor = anime({
  targets: '#Group .btm-pc-left-col',
  fill: '#0195a1',
  delay: 2000,
  loop: true
});

var shapeColor2 = anime({
  targets: '#Group .btm-pc-btm-row-right',
  fill: '#addce0',
  delay: 3000,
  loop: true
});

var shapeColor3 = anime({
  targets: '#Group .btm-pc-top-row-mid-col',
  fill: '#2d2040',
  delay: 1500,
  loop: true
});

var shapeColor4 = anime({
  targets: '#Group .btm-pc-circle',
  fill: '#41d8e6',
  delay: 3500,
  loop: true
});

var shapeColor5 = anime({
  targets: '#Group .btm-pc-top-row-left-col',
  fill: '#addce0',
  delay: 2500,
  loop: true
});

var shapeColor6 = anime({
  targets: '#Group .btm-pc-top-row-right-col',
  fill: '#66676d',
  delay: 1000,
  loop: true
});
// ---------- /PC screen blocks filler ----------
// ---------- Right diagram columns animation ----------
var diagramMov1 = anime({
  targets: '.first-diagram-moving',
  translateY: '25',
  scaleY: '0.7',
  easing: 'linear',
  duration: 2000,
  direction: 'alternate',
  loop: true
});
var diagramMov2 = anime({
  targets: '.second-diagram-moving',
  translateY: '23',
  scaleY: '0.7',
  easing: 'linear',
  duration: 3000,
  direction: 'alternate',
  loop: true
});
var diagramMov3 = anime({
  targets: '.third-diagram-moving',
  translateY: '20',
  scaleY: '0.7',
  easing: 'linear',
  duration: 2500,
  direction: 'alternate',
  loop: true
});
var diagramMov4 = anime({
  targets: '.fourth-diagram-moving',
  translateY: '15',
  scaleY: '0.7',
  easing: 'linear',
  duration: 1800,
  direction: 'alternate',
  loop: true
});

// var elems = document.querySelectorAll('.diagram')


// var diagramMove = anime({
//   targets: elems,
//   direction: 'alternate',
//   easing: 'linear',
//   duration: 2500,
//   loop: true,
//   scaleY: '0.65',
  
//   translateY: function(el, i){
//     // console.log(Number( (i + 1) + '5'));
//     return Number( (elems.length - i) + '5');
//   }

  // delay: function(el, i){
  //   var randomDelay = Math.floor(Math.random() * 1000) + 100;
  //   console.log(randomDelay);
  //   console.log(i);
  //   return randomDelay;

  // }
// ---------- /Right diagram columns animation ----------
// ---------- Left graph dots animation ----------
var dot1 = anime({
  targets: '.dot-fill-gr',
  fill: '#0be881',
  direction: 'alternate',
  loop: true,
  duration: 1000,
  delay: 200
});

var dot2 = anime({
  targets: '.dot-fill-red',
  fill: '#ff5e57',
  direction: 'alternate',
  loop: true,
  duration: 1500,
  delay: 200
});
// ---------- /Left graph dots animation ----------
// ---------- Conveyor animation ----------
var lines = document.querySelectorAll('.line-translate');
var strip = anime({
  targets: lines,
  translateX: '-17',
  translateY: '9',
  duration: 500,
  easing: 'linear',
  // direction: 'alternate',
  loop: true
});

var cubes = document.querySelectorAll('.blue-cube');

var path = anime.path('#Path-2');
var path1 = anime.path('#Path-3');
var path2 = anime.path('#Path-4');
var path3 = anime.path('#Path-5');


var controlsProgressEl = document.querySelector('.progress');

var cube1 = anime.timeline({
  easing: 'linear',
  loop: true,
  // update: function(anim) {
  //   controlsProgressEl.value = anim.progress;
  // }
});

cube1.add({
  targets: ".cube",
  opacity: 1,
}).add({
  targets: ".cube",
  translateX: path('x'),
  translateY: path('y'),
  duration: 4500
})
.add({
  targets: '#box-cube',
  opacity: 1,
  translateX: path1('x'),
  translateY: path1('y'),
})
.add({
  targets: '#box-cube',
  opacity: 0,
})
.add({
  targets: '.box-coin',
  opacity: 1,
})

.add({
  targets: '.box-coin',
  delay: 1000,
  translateX: path2('x'),
  translateY: path2('y'),
  opacity: 0,
})
.add({
  targets: '.coin',
  opacity: 1,
})
.add({
  targets: ".coin",
  translateX: path3('x'),
  translateY: path3('y'),
  duration: 9000,
}).add({
  targets: ".coin",
  offset: 18000,
  opacity: 0,
})
// ---------- /Conveyor animation ----------