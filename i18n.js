(function(){
var DICT={
es:{
nav_carta:"Carta",nav_eventos:"Eventos",nav_opiniones:"Opiniones",nav_contacto:"Contacto",nav_reservar:"Reservar",nav_reservar_mesa:"Reservar mesa",
hero_eyebrow:"Barcelona · Francesc Macià",hero_sub:"Cocina mediterránea, brasa y barra de coctelería en Francesc Macià, Barcelona. Abierto todos los días.",hero_cta_carta:"Ver la carta",
intro_kicker:"Desde 1935",intro_title:"Misma esencia, <em>nueva cocina</em>",
intro_p1:"El restaurante Mery abrió sus puertas por primera vez en 1935, convirtiéndose en un punto de encuentro de la Barcelona de la época durante más de dos décadas.",
intro_p2:"Más de sesenta años después, el local recupera su identidad original y su espíritu acogedor para abrir un nuevo capítulo, manteniendo vivo el legado que dio inicio a esta historia. Una propuesta gastronómica contemporánea que celebra el producto, la sobremesa y el placer de compartir.",
carta_kicker:"La carta",carta_title:"Para disfrutar <em>sin prisa</em>",carta_lede:"El mejor producto de temporada, la brasa protagonista y una bodega pensada para acompañar.",
tab_vermut:"De vermut y tapeo",tab_huerta:"De la huerta",tab_principales:"Principales",tab_asador:"Carbón y asador",tab_postres:"Postres",tab_vinos:"Vinos & Champagne",
carta_note:"Disponemos de una lista detallada de alérgenos presentes en cada uno de nuestros platos, que puede ser consultada a su solicitud.",
coct_kicker:"Coctelería de autor",coct_title:"La barra de <em>Mery</em>",
coct_lede1:"La coctelería forma parte de la experiencia Mery. Desde el aperitivo hasta la última copa de la noche, nuestra barra acompaña cada momento con una selección cuidada de cócteles clásicos, creaciones de temporada y referencias premium de <strong>Pernod Ricard</strong>.",
coct_lede2:"Una propuesta pensada para disfrutar sin prisa, donde cada copa se sirve con la misma atención al detalle que define nuestra cocina.",
coct_collab:"En colaboración con",
opiniones_kicker:"Opiniones",opiniones_label:"Valoración media · 840 reseñas en Google",opiniones_cta:"Leer las reseñas en Google",
insta_kicker:"Síguenos",insta_cta:"Ver en Instagram",
reserva_kicker:"Reservas",reserva_title:"Su mesa le espera en <em style=\"color:var(--gold-soft)\">Mery</em>",reserva_lede:"Para grupos de más de 8 personas o eventos, escríbenos directamente y preparamos una propuesta a medida.",
days_lj:"Lunes – Jueves",days_vs:"Viernes – Sábado",days_dom:"Domingo",
res_fallback:"¿No ves el formulario? <a href=\"https://widget.thefork.com/3af98b5a-dc40-484a-b154-8ffb5dac9d7e/homepage/402f668e-ea92-4009-af01-ae7eb867c0c6\" target=\"_blank\" rel=\"noopener\">Reserva en TheFork</a> · o llama al <a href=\"tel:+34931035424\">+34 931 03 54 24</a>",
contacto_kicker:"Dónde estamos",contacto_title:"Plaça de Francesc Macià",contacto_dir:"Dirección",contacto_tel:"Teléfono",contacto_email:"Email",contacto_horario:"Horario",
contacto_horario_val:"Abierto todos los días<br />Lun–Jue 11:00–1:00 h · Vie–Sáb 11:00–2:00 h · Dom 11:00–1:00 h",
footer_desc:"Cocina mediterránea, brasa y barra de coctelería en Francesc Macià, Barcelona.",footer_nav:"Navega",footer_contacto:"Contacto"
},
ca:{
nav_carta:"Carta",nav_eventos:"Esdeveniments",nav_opiniones:"Opinions",nav_contacto:"Contacte",nav_reservar:"Reservar",nav_reservar_mesa:"Reservar taula",
hero_eyebrow:"Barcelona · Francesc Macià",hero_sub:"Cuina mediterrània, brasa i barra de coctelaria a Francesc Macià, Barcelona. Obert tots els dies.",hero_cta_carta:"Veure la carta",
intro_kicker:"Des de 1935",intro_title:"Mateixa essència, <em>nova cuina</em>",
intro_p1:"El restaurant Mery va obrir les seves portes per primera vegada l'any 1935, convertint-se en un punt de trobada de la Barcelona de l'època durant més de dues dècades.",
intro_p2:"Més de seixanta anys després, el local recupera la seva identitat original i el seu esperit acollidor per obrir un nou capítol, mantenint viu el llegat que va donar inici a aquesta història. Una proposta gastronòmica contemporània que celebra el producte, la sobretaula i el plaer de compartir.",
carta_kicker:"La carta",carta_title:"Per gaudir <em>sense pressa</em>",carta_lede:"El millor producte de temporada, la brasa protagonista i un celler pensat per acompanyar.",
tab_vermut:"De vermut i tapeig",tab_huerta:"De l'hort",tab_principales:"Principals",tab_asador:"Carbó i graella",tab_postres:"Postres",tab_vinos:"Vins & Champagne",
carta_note:"Disposem d'una llista detallada d'al·lèrgens presents a cadascun dels nostres plats, que es pot consultar sota petició.",
coct_kicker:"Coctelaria d'autor",coct_title:"La barra de <em>Mery</em>",
coct_lede1:"La coctelaria forma part de l'experiència Mery. Des de l'aperitiu fins a l'última copa de la nit, la nostra barra acompanya cada moment amb una selecció acurada de còctels clàssics, creacions de temporada i referències premium de <strong>Pernod Ricard</strong>.",
coct_lede2:"Una proposta pensada per gaudir sense pressa, on cada copa es serveix amb la mateixa atenció al detall que defineix la nostra cuina.",
coct_collab:"En col·laboració amb",
opiniones_kicker:"Opinions",opiniones_label:"Valoració mitjana · 840 ressenyes a Google",opiniones_cta:"Llegir les ressenyes a Google",
insta_kicker:"Segueix-nos",insta_cta:"Veure a Instagram",
reserva_kicker:"Reserves",reserva_title:"La teva taula t'espera a <em style=\"color:var(--gold-soft)\">Mery</em>",reserva_lede:"Per a grups de més de 8 persones o esdeveniments, escriu-nos directament i preparem una proposta a mida.",
days_lj:"Dilluns – Dijous",days_vs:"Divendres – Dissabte",days_dom:"Diumenge",
res_fallback:"No veus el formulari? <a href=\"https://widget.thefork.com/3af98b5a-dc40-484a-b154-8ffb5dac9d7e/homepage/402f668e-ea92-4009-af01-ae7eb867c0c6\" target=\"_blank\" rel=\"noopener\">Reserva a TheFork</a> · o truca al <a href=\"tel:+34931035424\">+34 931 03 54 24</a>",
contacto_kicker:"On som",contacto_title:"Plaça de Francesc Macià",contacto_dir:"Adreça",contacto_tel:"Telèfon",contacto_email:"Correu",contacto_horario:"Horari",
contacto_horario_val:"Obert tots els dies<br />Dl–Dj 11:00–1:00 h · Dv–Ds 11:00–2:00 h · Dg 11:00–1:00 h",
footer_desc:"Cuina mediterrània, brasa i barra de coctelaria a Francesc Macià, Barcelona.",footer_nav:"Navega",footer_contacto:"Contacte"
},
en:{
nav_carta:"Menu",nav_eventos:"Events",nav_opiniones:"Reviews",nav_contacto:"Contact",nav_reservar:"Book",nav_reservar_mesa:"Book a table",
hero_eyebrow:"Barcelona · Francesc Macià",hero_sub:"Mediterranean cooking, charcoal grill and a cocktail bar in Francesc Macià, Barcelona. Open every day.",hero_cta_carta:"View the menu",
intro_kicker:"Since 1935",intro_title:"Same soul, <em>new kitchen</em>",
intro_p1:"Restaurante Mery first opened its doors in 1935, becoming a meeting point of Barcelona's social life for over two decades.",
intro_p2:"More than sixty years later, the space recovers its original identity and warm spirit to open a new chapter, keeping alive the legacy that started this story. A contemporary take on cooking that celebrates good produce, long lunches and the pleasure of sharing.",
carta_kicker:"The menu",carta_title:"Take your <em>time</em>",carta_lede:"The best seasonal produce, the charcoal grill front and centre, and a wine list built to match.",
tab_vermut:"Vermouth & tapas",tab_huerta:"From the garden",tab_principales:"Mains",tab_asador:"Charcoal & grill",tab_postres:"Desserts",tab_vinos:"Wine & Champagne",
carta_note:"A detailed allergen list for every dish is available on request.",
coct_kicker:"Signature cocktails",coct_title:"The bar at <em>Mery</em>",
coct_lede1:"Cocktails are part of the Mery experience. From the first aperitivo to the last drink of the night, our bar accompanies every moment with a curated selection of classic cocktails, seasonal creations and premium references from <strong>Pernod Ricard</strong>.",
coct_lede2:"A proposal built for lingering, where every drink is served with the same attention to detail that defines our kitchen.",
coct_collab:"In collaboration with",
opiniones_kicker:"Reviews",opiniones_label:"Average rating · 840 reviews on Google",opiniones_cta:"Read reviews on Google",
insta_kicker:"Follow us",insta_cta:"View on Instagram",
reserva_kicker:"Reservations",reserva_title:"Your table awaits at <em style=\"color:var(--gold-soft)\">Mery</em>",reserva_lede:"For groups of more than 8 or private events, write to us directly and we'll put together a tailored proposal.",
days_lj:"Monday – Thursday",days_vs:"Friday – Saturday",days_dom:"Sunday",
res_fallback:"Can't see the form? <a href=\"https://widget.thefork.com/3af98b5a-dc40-484a-b154-8ffb5dac9d7e/homepage/402f668e-ea92-4009-af01-ae7eb867c0c6\" target=\"_blank\" rel=\"noopener\">Book on TheFork</a> · or call <a href=\"tel:+34931035424\">+34 931 03 54 24</a>",
contacto_kicker:"Find us",contacto_title:"Plaça de Francesc Macià",contacto_dir:"Address",contacto_tel:"Phone",contacto_email:"Email",contacto_horario:"Hours",
contacto_horario_val:"Open every day<br />Mon–Thu 11:00–1:00 · Fri–Sat 11:00–2:00 · Sun 11:00–1:00",
footer_desc:"Mediterranean cooking, charcoal grill and a cocktail bar in Francesc Macià, Barcelona.",footer_nav:"Navigate",footer_contacto:"Contact"
}
};
function apply(lang){
  window.__meryLang=lang;
  var d=DICT[lang]||DICT.es;
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    var k=el.getAttribute('data-i18n');
    if(d[k]!=null) el.textContent=d[k];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(function(el){
    var k=el.getAttribute('data-i18n-html');
    if(d[k]!=null) el.innerHTML=d[k];
  });
  document.documentElement.setAttribute('lang', lang==='ca'?'ca':(lang==='en'?'en':'es'));
  document.querySelectorAll('.lang-switch button').forEach(function(b){
    b.classList.toggle('active', b.getAttribute('data-lang')===lang);
  });
  try{ localStorage.setItem('mery_lang', lang); }catch(e){}
  document.dispatchEvent(new CustomEvent('mery:lang',{detail:lang}));
}
window.merySetTextos=function(t){
  var n={es:{},ca:{},en:{}};
  Object.keys(t).forEach(function(k){ ['es','ca','en'].forEach(function(l){ n[l][k]=(t[k]&&t[k][l])||DICT[l][k]||DICT.es[k]; }); });
  DICT=n; apply(window.__meryLang||'es');
};
function init(){
  var saved='es';
  try{ saved=localStorage.getItem('mery_lang')||'es'; }catch(e){}
  apply(saved);
  document.querySelectorAll('.lang-switch button').forEach(function(b){
    b.addEventListener('click', function(){ apply(b.getAttribute('data-lang')); });
  });
}
if(document.readyState==='loading'){ document.addEventListener('DOMContentLoaded', init); } else { init(); }
})();
