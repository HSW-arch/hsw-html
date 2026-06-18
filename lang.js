let lang='en';
function toggleLang(){
  lang=lang==='en'?'zh':'en';
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-en],[data-zh]').forEach(el=>{
    if(el.dataset[lang])el.textContent=el.dataset[lang];
  });
}
