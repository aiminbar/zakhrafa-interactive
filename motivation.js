(()=>{
  let last='', lastAt=0;
  const phrases=['أَحْسَنْتِ!','رَائِعَة!','إِجَابَةٌ صَحِيحَة!']; let pi=0;
  function chime(){try{const AC=window.AudioContext||window.webkitAudioContext;if(!AC)return;const c=new AC(),g=c.createGain();g.connect(c.destination);g.gain.setValueAtTime(.0001,c.currentTime);g.gain.exponentialRampToValueAtTime(.12,c.currentTime+.015);g.gain.exponentialRampToValueAtTime(.0001,c.currentTime+.38);[659.25,783.99].forEach((f,i)=>{const o=c.createOscillator();o.type='sine';o.frequency.value=f;o.connect(g);o.start(c.currentTime+i*.09);o.stop(c.currentTime+.32+i*.09)});setTimeout(()=>c.close(),700)}catch(e){}}
  function speak(){try{if(!('speechSynthesis'in window))return; speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(phrases[pi++%phrases.length]);u.lang='ar-SA';u.rate=.92;u.pitch=1.08;u.volume=.9;speechSynthesis.speak(u)}catch(e){}}
  function reward(txt){const now=Date.now();if(txt===last&&now-lastAt<900)return;last=txt;lastAt=now;chime();setTimeout(speak,120)}
  const scan=()=>document.querySelectorAll('.feedback,#fb,#status,#found').forEach(el=>{const t=(el.textContent||'').trim();if((t.includes('أَحْسَنْتِ')||t.includes('رَائِع')||t.includes('أَبْدَعْتِ'))&&el.dataset.heard!==t){el.dataset.heard=t;reward(t)}});
  new MutationObserver(scan).observe(document.body,{subtree:true,childList:true,characterData:true});
  document.addEventListener('click',()=>setTimeout(scan,20),true);
})();
