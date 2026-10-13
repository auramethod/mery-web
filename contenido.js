(function(){
  function esc(s){return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
  function get(url){return fetch(url,{cache:'no-store'}).then(function(r){if(!r.ok)throw 0;return r.json();});}
  var carta=null;
  function lang(){return window.__meryLang||'es';}
  function renderCarta(){
    if(!carta||!carta.categorias||!carta.categorias.length)return;
    var tabsEl=document.getElementById('menuTabs');
    if(!tabsEl)return;
    var activeId=(document.querySelector('.menu-tab.active')||{}).getAttribute?document.querySelector('.menu-tab.active').getAttribute('data-tab'):null;
    if(!carta.categorias.some(function(c){return c.id===activeId;}))activeId=carta.categorias[0].id;
    var l=lang();
    tabsEl.innerHTML=carta.categorias.map(function(c){
      var n=c['nombre_'+l]||c.nombre_es;
      return '<button class="menu-tab'+(c.id===activeId?' active':'')+'" data-tab="'+esc(c.id)+'">'+esc(n)+'</button>';
    }).join('');
    var parent=tabsEl.parentNode;
    parent.querySelectorAll('.menu-panel').forEach(function(p){p.remove();});
    var anchor=tabsEl.nextSibling;
    carta.categorias.forEach(function(c){
      var div=document.createElement('div');
      div.className='menu-panel'+(c.id===activeId?' active':'');
      div.setAttribute('data-panel',c.id);
      div.innerHTML='<div class="menu-grid">'+(c.platos||[]).map(function(p){
        if(p.subtitulo)return '<div class="menu-sub">'+esc(p.nombre)+'</div>';
        return '<div class="dish"><div class="dish__top"><span class="dish__name">'+esc(p.nombre)+'</span><span class="dish__dots"></span><span class="dish__price">'+esc(p.precio)+'</span></div>'+(p.descripcion?'<p class="dish__desc">'+esc(p.descripcion)+'</p>':'')+'</div>';
      }).join('')+'</div>';
      parent.insertBefore(div,anchor);
    });
  }
  function renderFotos(f){
    var hero=document.getElementById('heroSlides');
    if(hero&&f.hero&&f.hero.length){
      hero.innerHTML=f.hero.map(function(x,i){return '<img class="hero__slide'+(i===0?' active':'')+'" src="'+esc(x.imagen)+'" alt="'+esc(x.alt)+'" />';}).join('');
    }
    var grid=document.querySelector('.insta-grid');
    if(grid&&f.instagram&&f.instagram.length){
      grid.innerHTML=f.instagram.map(function(x){return '<a class="insta-cell" href="https://www.instagram.com/restaurante.mery/" target="_blank" rel="noopener"><img src="'+esc(x.imagen)+'" alt="'+esc(x.alt)+'" /></a>';}).join('');
    }
  }
  get('content/textos.json').then(function(t){if(window.merySetTextos)window.merySetTextos(t);}).catch(function(){});
  get('content/carta.json').then(function(c){carta=c;renderCarta();}).catch(function(){});
  get('content/fotos.json').then(renderFotos).catch(function(){});
  document.addEventListener('mery:lang',renderCarta);
})();
