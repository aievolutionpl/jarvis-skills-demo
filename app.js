
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
$$('.rv').forEach(e=>io.observe(e));
$$('.t-acc-head').forEach(h=>h.addEventListener('click',()=>{const a=h.closest('.t-acc');const o=a.dataset.open==='true';a.dataset.open=!o;h.setAttribute('aria-expanded',!o)}));
const m=$('.t-modal'),sc=$('.scrim');
function openM(){if(!m)return;sc.classList.add('on');m.classList.remove('is-closing');m.classList.add('is-open')}
function closeM(){if(!m)return;m.classList.remove('is-open');m.classList.add('is-closing');sc.classList.remove('on');setTimeout(()=>m.classList.remove('is-closing'),150)}
$$('[data-open-modal]').forEach(b=>b.addEventListener('click',openM));$$('[data-close-modal]').forEach(b=>b.addEventListener('click',closeM));
if(sc)sc.addEventListener('click',e=>{if(e.target===sc)closeM()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeM()});
const t=$('.t-toast');let tt;$$('[data-toast]').forEach(b=>b.addEventListener('click',()=>{t.textContent=b.dataset.toast;t.classList.add('is-open');clearTimeout(tt);tt=setTimeout(()=>t.classList.remove('is-open'),2600)}));
$$('.tabs').forEach(tb=>{const pill=tb.querySelector('.pill'),bs=[...tb.querySelectorAll('button')];function mv(b){pill.style.width=b.offsetWidth+'px';pill.style.transform=`translateX(${b.offsetLeft-5}px)`;bs.forEach(x=>x.classList.toggle('on',x===b));const id=b.dataset.tab;$$('[data-panel]').forEach(p=>p.hidden=p.dataset.panel!==id)}bs.forEach(b=>b.addEventListener('click',()=>mv(b)));requestAnimationFrame(()=>mv(bs[0]));addEventListener('resize',()=>mv(tb.querySelector('.on')||bs[0]))});
$$('.like').forEach(b=>b.addEventListener('click',()=>{b.classList.toggle('on');const n=b.querySelector('.n');n.textContent=+n.textContent+(b.classList.contains('on')?1:-1)}));
$$('[data-count]').forEach(el=>{const to=+el.dataset.count;const o=new IntersectionObserver(([e])=>{if(!e.isIntersecting)return;o.disconnect();const s=performance.now();(function f(n){const p=Math.min(1,(n-s)/1200);el.textContent=Math.round(to*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(s)});o.observe(el)});
