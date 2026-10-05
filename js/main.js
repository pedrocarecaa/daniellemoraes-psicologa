// ===== Configuração central (edite aqui) =====
const professional={name:"Danielle Moraes",profession:"Psicóloga",crp:"CRP 06/197740",city:"Peruíbe - SP",
 WHATSAPP_NUMBER:"5511992182174",instagram:"https://www.instagram.com/psi.daniellemoraes/",hours:"Segunda a sexta, das 9h às 17h",
 message:"Olá, Danielle! Encontrei seu site e gostaria de saber mais sobre o atendimento psicológico."};
const waLink=()=>`https://wa.me/${professional.WHATSAPP_NUMBER}?text=${encodeURIComponent(professional.message)}`;
document.querySelectorAll('[data-wa]').forEach(a=>{a.href=waLink();a.target="_blank";a.rel="noopener noreferrer"});
document.getElementById('ig').href=professional.instagram;
// menu
const bg=document.getElementById('bg'),menu=document.getElementById('menu');
bg.onclick=()=>{const o=menu.classList.toggle('open');bg.setAttribute('aria-expanded',o);bg.setAttribute('aria-label',o?'Fechar menu':'Abrir menu')};
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');bg.setAttribute('aria-expanded',false)}));
// header + barra mobile
const hd=document.getElementById('hd'),bar=document.getElementById('bar');
const onS=()=>{hd.classList.toggle('s',scrollY>10);bar.classList.toggle('show',scrollY>500)};
addEventListener('scroll',onS,{passive:true});onS();
// fade-in
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
