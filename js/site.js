// Shared site JS: hamburger + drawer toggle
document.addEventListener('DOMContentLoaded', ()=>{
  const hb = document.querySelectorAll('.hamburger');
  const drawer = document.getElementById('mobileDrawer');
  const closeBtns = document.querySelectorAll('.drawer-close');
  if(!drawer) return;
  hb.forEach(b=>b.addEventListener('click', ()=> drawer.classList.toggle('open')));
  closeBtns.forEach(b=>b.addEventListener('click', ()=> drawer.classList.remove('open')));
  // close when clicking a link inside
  drawer.addEventListener('click', (e)=>{ if(e.target.tagName==='A') drawer.classList.remove('open'); });
});
