const menu=document.querySelector('#menu'),nav=document.querySelector('#nav');menu&&menu.addEventListener('click',()=>nav.classList.toggle('open'));nav&&nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));document.querySelector('#year').textContent=new Date().getFullYear();

const resumeModal=document.getElementById('resumeModal');
const resumeButton=document.getElementById('resumeButton');
const closeResumeModalButton=document.getElementById('closeResumeModal');

function openResumeModal(){
  if(!resumeModal)return;
  resumeModal.classList.add('open');
  resumeModal.setAttribute('aria-hidden','false');
  document.body.classList.add('body-no-scroll');
  const firstFocusable=resumeModal.querySelector('a, button, [tabindex]:not([tabindex="-1"])');
  if(firstFocusable)firstFocusable.focus();
}

function closeResumeModal(){
  if(!resumeModal)return;
  resumeModal.classList.remove('open');
  resumeModal.setAttribute('aria-hidden','true');
  document.body.classList.remove('body-no-scroll');
  resumeButton&&resumeButton.focus();
}

resumeButton&&resumeButton.addEventListener('click',openResumeModal);
closeResumeModalButton&&closeResumeModalButton.addEventListener('click',closeResumeModal);
resumeModal&&resumeModal.addEventListener('click',(event)=>{
  if(event.target===resumeModal)closeResumeModal();
});
document.addEventListener('keydown',(event)=>{
  if(event.key==='Escape'&&resumeModal&&resumeModal.classList.contains('open'))closeResumeModal();
});