// REGES : shared behaviour
(function(){
  // nav solid on scroll
  var nav=document.getElementById('nav');
  if(nav){ addEventListener('scroll',function(){ nav.classList.toggle('solid', scrollY>40); }, {passive:true}); }

  // embers: populate each .embers container (deterministic, no Math.random so it is resumable/stable)
  document.querySelectorAll('.embers').forEach(function(box){
    for(var i=0;i<14;i++){ var s=document.createElement('span');
      var left=(i*7+(i*i)%11)%100, dur=6+(i%5)*1.4, delay=-(i*0.8);
      s.style.left=left+'%'; s.style.animationDuration=dur+'s'; s.style.animationDelay=delay+'s';
      s.style.width=s.style.height=(3+(i%3))+'px';
      box.appendChild(s);
    }
  });

  // reveal: IntersectionObserver + failsafe (visible by default if anything fails)
  var els=document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } }); }, {threshold:.12, rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(el){ io.observe(el); });
    setTimeout(function(){ els.forEach(function(el){ el.classList.add('in'); }); }, 2600);
  } else { els.forEach(function(el){ el.classList.add('in'); }); }

  // category / product rails: drag to scroll, and vertical wheel scrolls the PAGE (never trapped)
  document.querySelectorAll('[data-rail]').forEach(function(rail){
    var down=false,x=0,sl=0;
    rail.addEventListener('pointerdown',function(e){ down=true; x=e.pageX; sl=rail.scrollLeft; rail.setPointerCapture(e.pointerId); });
    rail.addEventListener('pointermove',function(e){ if(down) rail.scrollLeft=sl-(e.pageX-x); });
    rail.addEventListener('pointerup',function(){ down=false; });
    rail.addEventListener('wheel',function(e){
      if(Math.abs(e.deltaY) > Math.abs(e.deltaX)){ window.scrollBy({top:e.deltaY}); e.preventDefault(); } // vertical intent -> page
    }, {passive:false});
  });

  // photos: layer generated imagery over the forge-gradient (missing file falls back to the gradient, no broken icon)
  function paint(e, src){
    var base=getComputedStyle(e).backgroundImage;
    e.style.backgroundImage="url('"+src+"')"+(base&&base!=='none'?", "+base:"");
    e.style.backgroundSize="cover"; e.style.backgroundPosition="center"; e.style.backgroundRepeat="no-repeat";
    e.classList.add('has-photo');
  }
  document.querySelectorAll('[data-img]').forEach(function(e){ paint(e, e.dataset.img); });

  // product cards: map every card to its photo by SKU (no per-card markup needed)
  var IMG={ '1004':'prod-tinker','1019':'prod-aldaren','1133':'prod-sicario','2218':'prod-fenrir','3007':'prod-cotta','4101':'prod-custode','5003':'prod-brocchiero','5210':'prod-elmo','6011':'prod-bracciali','6022':'prod-bracciali','7002':'prod-arco','8040':'prod-corvo','9001':'prod-tenda' };
  document.querySelectorAll('.pcard').forEach(function(card){
    var skuEl=card.querySelector('.sku'), img=card.querySelector('.pcard__img');
    if(!skuEl||!img) return;
    var m=(skuEl.textContent.match(/\d+/)||[])[0], name=m&&IMG[m];
    if(name) paint(img, 'img/'+name+'.jpg');
  });
})();
