document.querySelector('.menu')?.addEventListener('click',()=>document.querySelector('.links').classList.toggle('open'));
document.querySelector('.form')?.addEventListener('submit',(e)=>{e.preventDefault();document.querySelector('.notice').style.display='block';e.target.reset()});
