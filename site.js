// Minimal JS: mobile menu toggle only. Site works without it.
(function(){
  var btn=document.querySelector('.menu-btn'), nav=document.getElementById('site-nav');
  if(!btn||!nav) return;
  btn.addEventListener('click',function(){
    var open=nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',open?'true':'false');
  });
})();
