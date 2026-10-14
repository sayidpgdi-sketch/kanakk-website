
/* Progressive enhancement: reveal on scroll, with reduced-motion support. */
document.addEventListener('DOMContentLoaded',()=>{
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets=document.querySelectorAll('.hero-copy,.hero-visual,.trust-inner,.product-preview-copy,.product-shot-shell,.section-heading,.feature-card,.base-band-inner,.closing-cta,.page-hero,.info-panel,.plan-card');
  revealTargets.forEach((el,index)=>{
    if(!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal','');
    if(el.classList.contains('feature-card')) el.style.transitionDelay=(index%4)*70+'ms';
  });
  if(reduceMotion||!('IntersectionObserver' in window)){
    document.querySelectorAll('[data-reveal]').forEach(el=>el.classList.add('is-visible'));
  }else{
    const observer=new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },{threshold:0.12,rootMargin:'0px 0px -36px 0px'});
    document.querySelectorAll('[data-reveal]').forEach(el=>observer.observe(el));
  }
});

document.addEventListener('DOMContentLoaded',()=>{const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.main-nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Toggle navigation');toggle.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}))}document.querySelectorAll('[data-year]').forEach(el=>el.textContent=String(new Date().getFullYear()))});