function stars(n,total=3){return Array.from({length:total},(_,i)=>`<span class="${i<n?'on':''}">★</span>`).join('')}
function say(id,msg,ok){const e=document.getElementById(id);e.textContent=msg;e.style.color=ok?'#08765f':'#b5544d'}
