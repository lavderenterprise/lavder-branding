// ETRURIA RETAIL : shared behaviour
(function(){
  // institutional utility bar (injected once; applies to every page)
  var util=document.createElement('div'); util.className='util';
  util.innerHTML='<a href="#">Area riservata</a><span class="sep">/</span><a href="#">App Etruria</a><span class="sep">/</span><a href="#">IT</a><span class="sep">/</span><a href="punti-vendita.html">Trova un negozio</a>';
  document.body.insertBefore(util, document.body.firstChild);
  var nav=document.getElementById('nav');
  addEventListener('scroll', function(){ var s=scrollY>40; if(nav) nav.classList.toggle('solid', s); document.body.classList.toggle('scrolled', s); }, {passive:true});

  // reveal: IntersectionObserver + failsafe (visible by default if anything fails)
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }); }, {threshold:.12, rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(el){ io.observe(el); });
    setTimeout(function(){ els.forEach(function(el){ el.classList.add('in'); }); }, 2600);
  } else { els.forEach(function(el){ el.classList.add('in'); }); }

  // photos: layer real imagery over the warm panel-gradient (missing file falls back to the gradient, never a broken icon)
  function paint(e, src){
    var base=getComputedStyle(e).backgroundImage;
    e.style.backgroundImage="url('"+src+"')"+(base&&base!=='none'?", "+base:"");
    e.style.backgroundSize="cover"; e.style.backgroundPosition="center"; e.style.backgroundRepeat="no-repeat";
    e.classList.add('has-photo');
  }
  document.querySelectorAll('[data-img]').forEach(function(e){ paint(e, e.dataset.img); });
})();
