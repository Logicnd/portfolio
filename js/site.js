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
  // Reveal/copy obfuscated burner email when requested from About page
  const revealBtn = document.getElementById('revealEmailBtn');
  if(revealBtn){
    revealBtn.addEventListener('click', ()=>{
      const ob = 'moc.liamg@3irikretcatnoc'.split('').reverse().join(''); // contactkiri3@gmail.com
      const msg = document.getElementById('revealMsg');
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(ob).then(()=>{
          if(msg) msg.textContent = 'Burner email copied to clipboard.';
          revealBtn.disabled = true;
        }).catch(()=>{ if(msg) msg.textContent = ob; revealBtn.disabled = true; });
      } else { if(msg) msg.textContent = ob; revealBtn.disabled = true; }
    });
  }
  
});
