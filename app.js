const theme=document.querySelector('#theme');
try{theme.value=localStorage.getItem('portfolio-theme')||'system'}catch{}
function setTheme(){document.documentElement.dataset.theme=theme.value;try{localStorage.setItem('portfolio-theme',theme.value)}catch{}}
setTheme();theme.addEventListener('change',setTheme);
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button))});let count=0;document.querySelectorAll('[data-category]').forEach(p=>{p.hidden=button.dataset.filter!=='all'&&p.dataset.category!==button.dataset.filter;if(!p.hidden)count++});document.querySelector('#filter-status').textContent=`Showing ${count} projects.`}));
