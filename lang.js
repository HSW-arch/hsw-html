let lang=localStorage.getItem('hsw-lang')||'en';
function applyLang(){
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-en],[data-zh]').forEach(el=>{
    if(el.dataset[lang])el.textContent=el.dataset[lang];
  });
}
function toggleLang(){
  lang=lang==='en'?'zh':'en';
  localStorage.setItem('hsw-lang',lang);
  applyLang();
}
document.addEventListener('DOMContentLoaded',applyLang);
