const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');
const play = document.getElementById('play');
const bg = document.getElementById('bg');

// Show modal
open.addEventListener('click', () => modal.classList.add('show-modal'));
  
// Hide modal
close.addEventListener('click', () => modal.classList.remove('show-modal'));

// Hide modal on outside click
window.addEventListener('click', e =>
  e.target == modal ? modal.classList.remove('show-modal') : false
);

play.onclick = function(){
  bg.style.display = 'block';

  if(bg.paused){
    bg.play();
    play.src = 'image/pause.png';
  }
  
  else{
    bg.pause();
    play.src = 'image/play.png';
  }
}

// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 0.9;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});

function hideButton(x){
  x.style.visibility = 'collapse';
}

let navbar = document.querySelector('.nav_list');

  document.querySelector('#menu-btn').onclick = () =>{
  navbar.classList.toggle('active');
}

window.onscroll = () =>{
  navbar.classList.remove('active');
}



// let menuBtn = document.getElementById('menuBtn');
// let sideNav = document.getElementById('sideNav');
// let menu = document.getElementById('menu');

// sideNav.style.right = '-250px';

// menuBtn.onclick = function(){
//   if(sideNav.style.right === '-250px'){
//     sideNav.style.right = '0';
//     menu.src = '/image/close.png';
//   } else {
//     sideNav.style.right = '-250px'
//     menu.src = '/image/menu.png'
//   }
// }