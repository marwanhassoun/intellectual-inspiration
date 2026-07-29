
const btn=document.querySelector('.menu-button');
const nav=document.querySelector('.nav');
if(btn&&nav){btn.addEventListener('click',()=>nav.classList.toggle('open'));}
const y=document.getElementById('year'); if(y)y.textContent=new Date().getFullYear();
