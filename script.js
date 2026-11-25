const chapters=window.CHAPTERS;
const codes=['DGD','DGA','AFX','IGD','DEN'];
const names={DGD:'นักสร้างอัตลักษณ์แห่งธานี',DGA:'นักรังสรรค์จินตนาการ',AFX:'ผู้มอบชีวิตแด่ภาพ',IGD:'นักสร้างเป้าหมายแห่งเกม',DEN:'ผู้รวมใจให้เป็นหนึ่ง'};
const degrees={DGD:'Digital Graphic Design',DGA:'Digital Arts',AFX:'Computer Animation and Visual Effects',IGD:'Interactive and Game Design',DEN:'Digital Entertainment'};
const endings={DGA:'ภาพวาดของเธอคือสีแรกที่ย้อมเมืองให้กลับมามีชีวิต ทุกคนเงยหน้ามองแล้วพูดตรงกันว่า “นี่แหละโลกที่เราเคยฝันถึง”',DGD:'ภาพลักษณ์ใหม่ที่เธอออกแบบทำให้ทั้งเมืองมีหน้าตาเป็นของตัวเอง ไม่มีใครสับสนอีกแล้วว่าที่นี่คือที่ไหน',IGD:'ทั้งเมืองกลายเป็นสนามเล่นของเธอ ทุกคนหัวเราะ ตื่นเต้น และไม่มีใครอยากให้เกมจบ',AFX:'ภาพเคลื่อนไหวของเธอทำให้ท้องฟ้าสว่างวาบ ไม่มีใครเชื่อว่าทั้งหมดนี้เป็นฝีมือคนคนเดียว',DEN:'เธอไม่ได้ขึ้นเวทีคนเดียว เธอทำให้ทั้งเมืองได้ขึ้นเวทีไปพร้อมกัน'};
const jobs={DGA:['Character Designer','Concept Artist / Background Artist','Webtoon / Comic / Storyboard Artist','Illustrator / Art Toy / Sticker Creator'],DGD:['Brand Identity Designer','UI Designer','Packaging Designer','Art Director / Key Visual Designer'],IGD:['Game Designer / Level Designer','Game Artist','VR / AR Designer','Game Producer'],AFX:['3D Animator / Rigging Artist','3D Modeler / Texture Artist','VFX Artist','Compositor'],DEN:['Content Creator / Scriptwriter','Event / Show Producer','Virtual Talent / Streaming Producer','Entertainment Marketer / Community Manager']};
const districts={DGA:{title:'ย่านศิลป์ · ตรอกจินตนาการ',story:'ศิลปินสูงวัยคนหนึ่งยื่นขวดสีวิเศษให้เธอ',q:'เธออยากเป็นคนแบบไหนในเมืองนี้?',options:['คนที่สร้างตัวละครให้ทั้งโลกจำได้','คนที่วาดโลกและฉากหลังให้เรื่องเล่ามีชีวิต','คนที่เล่าเรื่องด้วยภาพหลายช่อง','คนที่ทำให้ภาพวาดกลายเป็นสินค้าหรือของสะสม']},DGD:{title:'ย่านดีไซน์ · ถนนเอกลักษณ์',story:'นักออกแบบยืนอยู่หน้าร้านที่ป้ายยังว่างเปล่า',q:'ถ้าได้ฝากลายเซ็นไว้ที่ไหนสักแห่งในเมืองนี้ เธออยากให้เป็นที่ไหน?',options:['ป้ายและโลโก้ที่ทุกคนเห็นทุกวัน','หน้าจอแอปและเว็บไซต์ของเมือง','กล่องและแพ็กเกจที่ใคร ๆ ก็อยากเก็บไว้','โปสเตอร์ใหญ่กลางเมืองที่คนเดินผ่านต้องหันมอง']},IGD:{title:'ย่านเกม · สนามแห่งการเล่น',story:'หัวหน้าสนามเกมเดินมาหาเธอ',q:'เกมของเธอจะเริ่มจากอะไร?',options:['คิดกติกาและระบบให้คนเล่นแล้วติดใจ','ออกแบบฉากและตัวละครในเกม','สร้างโลกเสมือนที่เดินเข้าไปได้จริง','ดูแลทีมให้เกมไปถึงมือผู้เล่นได้']},AFX:{title:'ย่านภาพยนตร์ · กำแพงแห่งเรื่องราว',story:'ผู้กำกับลึกลับยื่นสคริปต์มาให้เธอ',q:'เธออยากคุมฉากไหนของหนังเรื่องนี้?',options:['ตัวละครที่ขยับเหมือนมีชีวิตจริง','ของและตัวละครที่ปั้นขึ้นมาจากความว่างเปล่า','ฉากระเบิด ไฟ น้ำ ควัน ที่ทำให้คนดูตกใจ','การรวมทุกชั้นภาพให้ดูเหมือนถ่ายจริงชิ้นเดียว']},DEN:{title:'ย่านบันเทิง · เวทีแห่งตัวตน',story:'พิธีกรประจำเมืองยื่นไมโครโฟนมาให้',q:'บทบาทไหนทำให้เธอใจเต้นแรงที่สุด?',options:['คนคิดรายการและคอนเทนต์ที่ทุกคนรอดู','คนจัดงานที่ทำให้คนนับพันได้ประสบการณ์เดียวกัน','คนเบื้องหลังตัวตนเสมือนและสตรีมเมอร์','คนที่ทำให้ชุมชนแฟนคลับเติบโต']}};
const $=id=>document.getElementById(id),content=$('content'),next=$('next'),overlay=$('transition'),scene=$('scene'),illumination=$('cityIllumination');
const answers=Array(chapters.length).fill(null),districtAnswers={};let route=[],position=0,busy=false,motion=!matchMedia('(prefers-reduced-motion: reduce)').matches;
function score(part=answers){let s=Object.fromEntries(codes.map(c=>[c,0]));part.forEach(a=>{if(a)s[a]++});return s}
function ranking(s){return codes.slice().sort((a,b)=>s[b]-s[a]||codes.indexOf(a)-codes.indexOf(b))}
function buildRoute(){const s=score(answers.slice(0,6)),r=ranking(s);route=[r[0]];if(s[r[0]]-s[r[1]]<=1)route.push(r[1]);}
const travelerQuestions=[
['nickname','ข้าชื่อ Lumin เป็นประกายแสงของเมืองแห่งนี้ แล้วเธอล่ะ ชื่ออะไรเหรอ?'],
['province','แล้วเธอเดินทางมาจากจังหวัดไหนกันนะ?'],
...[['level','ระดับชั้น',['ม.4','ม.5','ม.6','ปวช.','ปวส.','อื่น ๆ']],['track','สายการเรียน',['ศิลป์-คำนวณ','ศิลป์-ภาษา','วิทย์-คณิต','สายอาชีพ','อื่น ๆ']],['source','รู้จักคณะจากที่ไหน',['Facebook','Instagram','TikTok','เพื่อนหรือรุ่นพี่','ครูแนะแนว','งานกิจกรรม','อื่น ๆ']],['status','ขั้นตอนการเลือกคณะ',['เพิ่งเริ่มหาข้อมูล','กำลังเปรียบเทียบหลายที่','ตั้งใจสมัครแล้ว','รอผลสอบที่อื่นก่อน']],['experience','ประสบการณ์สร้างสรรค์',['วาดรูป','ออกแบบ','ตัดต่อวิดีโอ','ทำเกม','จัดกิจกรรม','ถ่ายคอนเทนต์','ยังไม่เคยเลย']],['contact','ช่องทางรับข่าวสาร',['LINE','อีเมล','Facebook','Instagram','โทรศัพท์']]].map(([key,label,options])=>[key,({level:'ตอนนี้เธอกำลังเรียนอยู่ระดับไหนเหรอ?',track:'แล้วเธอเรียนสายอะไรอยู่ล่ะ?',source:'ว่าแต่ เธอรู้จักคณะดิจิทัลมีเดียจากที่ไหนเหรอ?',status:'ตอนนี้เธอเดินทางมาถึงขั้นไหนของการเลือกคณะแล้ว?',experience:'ก่อนมาถึงเมืองนี้ เธอเคยลองสร้างสรรค์อะไรบ้างไหม?',contact:'ถ้ามีข่าวสารจากคณะ เธออยากรับรู้ผ่านช่องทางไหน?'})[key],options]),
['factors','สุดท้ายนี้ อะไรสำคัญที่สุดสำหรับเธอในการเลือกคณะ? เลือกได้ไม่เกินสองอย่างนะ',['ค่าเทอม','ทุนการศึกษา','ชื่อเสียงมหาวิทยาลัย','อาชีพหลังเรียนจบ','ผลงานรุ่นพี่','การเดินทาง','ความชอบของตัวเอง','ผู้ปกครองสนับสนุน']]];
const travelerAnswers={};
function travelerReply(i){if(i===0)return '';const prev=travelerAnswers[travelerQuestions[i-1][0]];if(!prev||!prev.length)return '';if(i===1)return 'เราเดินทางมาด้วยกันไกลแล้วนะ '+prev+'!';return ['','', 'ขอบคุณที่เล่าให้ข้าฟังนะ','เข้าใจแล้วล่ะ','น่าสนใจจัง','ค่อย ๆ ค้นหาไปด้วยกันนะ','ทุกคนเริ่มต้นได้เสมอ','ขอบคุณที่แบ่งปันนะ','อีกนิดเดียวก็ถึงปลายทางแล้ว'][i];}

function steps(){const a=[{type:'cover'}];chapters.forEach((c,i)=>{if(i===6){route.forEach(code=>{a.push({type:'districtStory',code},{type:'districtQuestion',code})})}a.push({type:'story',i});if(i===0)a.push({type:'form',i:0},{type:'greeting'});a.push({type:'question',i})});travelerQuestions.forEach((_,i)=>{if(i>0)a.push({type:'form',i})});a.push({type:'result'});return a}
function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function shuffle(a){return a.map(v=>({v,k:Math.random()})).sort((a,b)=>a.k-b.k).map(x=>x.v)}
const orders=chapters.map(c=>shuffle(c.choices));
function updateLight(){const stageIndex=chapters.findIndex(c=>c.title==='ชวนขึ้นเวที');const timeline=steps();const stageQuestion=timeline.findIndex(st=>st.type==='question'&&st.i===stageIndex);const restored=stageQuestion>=0&&position>stageQuestion;const level=restored?1:0;scene.style.setProperty('--light-progress',String(level));scene.classList.toggle('city-awakening',restored);scene.classList.toggle('city-restored',restored);illumination.setAttribute('aria-label',restored?'เมืองกลับมามีสีสัน':'เมืองไร้สี');}
// V28: progress follows the story, including either district route.
function updateStoryProgress(st){
  const total=chapters.length;
  const routeSlots=4;
  const finish=2*total+routeSlots+2;
  let unit=0, label='บทนำ', title='คืนที่เมืองเริ่มมืดลง';
  if(st.type==='story'||st.type==='question'){
    unit=1+2*st.i+(st.type==='question'?1:0)+(st.i>=6?routeSlots:0);
    label=`บทที่ ${st.i+1} / ${total}`; title=chapters[st.i].title;
  }else if(st.type==='districtStory'||st.type==='districtQuestion'){
    unit=13+(2*route.indexOf(st.code)+(st.type==='districtQuestion'?1:0))*routeSlots/(2*route.length);
    label=`สำรวจย่าน ${route.indexOf(st.code)+1} / ${route.length}`;title=districts[st.code].title;
  }else if(st.type==='greeting'||(st.type==='form'&&st.i===0)){unit=1.5;label='บทนำ';title='ทำความรู้จัก Lumin';}else if(st.type==='form'){unit=finish-2+(st.i+1)/travelerQuestions.length;label='บทส่งท้าย';title='บัตรผ่านนักเดินทาง';}
  else if(st.type==='result'){unit=finish;label='จบบริบูรณ์';title='สีสันกลับมาแล้ว';}
  const percent=Math.round(100*unit/finish);
  const track=$('progressTrack');track.style.setProperty('--story-progress',percent+'%');track.setAttribute('aria-valuenow',percent);track.setAttribute('aria-valuetext',`${label} ${percent}%`);
}
const luminColors=['yellow','pink','purple','blue','red'],luminNames=['เหลือง','ชมพู','ม่วง','ฟ้า','แดง'];
const luminSlot=$('luminSlot'),lumin=$('lumin'),luminImage=$('luminImage');let luminColor=0;
luminColors.forEach(c=>{const img=new Image();img.src='assets/lumin-'+c+'.png'});
function setLuminColor(i){luminColor=i;luminImage.src='assets/lumin-'+luminColors[i]+'.png';lumin.setAttribute('aria-label','Lumin สี'+luminNames[i]+' กดเพื่อเปลี่ยนสี');}
lumin.addEventListener('click',()=>{setLuminColor((luminColor+1)%luminColors.length);luminImage.classList.remove('lumin-pulse');void luminImage.offsetWidth;luminImage.classList.add('lumin-pulse')});
let luminLastPosition=-1, luminPlace=0, luminTimer;
function updateLumin(st){
 const debut=steps().findIndex(step=>step.type==='form'&&step.i===0);
 const visible=debut>=0&&position>=debut&&st.type!=='result';
 if(position===0){clearTimeout(luminTimer);setLuminColor(0);luminLastPosition=-1;luminPlace=0;luminSlot.dataset.place='0';}
 if(!visible){clearTimeout(luminTimer);luminSlot.hidden=true;luminSlot.classList.remove('debut','teleport');}
 else if(luminSlot.hidden){luminSlot.hidden=false;luminSlot.classList.add('debut');clearTimeout(luminTimer);luminTimer=setTimeout(()=>luminSlot.classList.remove('debut'),4300);}
 else if(position!==luminLastPosition && (st.type==='story'||st.type==='districtStory') && position%3!==0){
  clearTimeout(luminTimer);luminSlot.classList.remove('debut','teleport');
  const arrive=()=>{luminPlace=(luminPlace+1)%4;luminSlot.dataset.place=String(luminPlace);setLuminColor((luminColor+1)%luminColors.length);luminSlot.classList.remove('teleport');};
  if(motion&&!matchMedia('(prefers-reduced-motion: reduce)').matches){luminSlot.classList.add('teleport');luminTimer=setTimeout(arrive,650);}else arrive();
 }
 luminLastPosition=position;scene.classList.toggle('has-lumin',visible);
}
function render(){const st=steps()[position];updateLumin(st);scene.classList.toggle('is-stage',(st.type==='story'||st.type==='question')&&chapters[st.i].title==='ชวนขึ้นเวที');updateStoryProgress(st);let html='';next.disabled=false;
if(st.type==='cover'){html='<h1 class="opening-story-title">คืนที่เมืองเริ่มมืดลง</h1><p>คืนนี้ สีสันของเมืองกำลังเลือนหาย...</p><p>Lumi ภูตแสงตัวน้อยชวนเธอออกเดินทาง<br>เพื่อช่วยเมืองก่อนรุ่งสาง</p>';next.innerHTML='เริ่มการเดินทาง →'}
else if(st.type==='story'){const c=chapters[st.i];html='<h1>'+esc(c.title)+'</h1>'+c.paragraphs.map(t=>'<p>'+esc(t)+'</p>').join('');next.innerHTML='เดินทางต่อ →'}
else if(st.type==='question'){const c=chapters[st.i];const isObjectChoice=c.title==='ของติดตัว';html='<h1>'+esc(c.quote)+'</h1><div class="choices'+(isObjectChoice?' object-choices':'')+'">'+orders[st.i].map(([code,label])=>'<button class="choice '+(isObjectChoice?'object-choice ':'')+(answers[st.i]===code?'selected':'')+'" data-code="'+code+'" aria-label="'+esc(label)+'">'+(isObjectChoice?'<img src="assets/choice-'+code.toLowerCase()+'.png" alt="'+esc(label)+'" draggable="false">':esc(label))+'</button>').join('')+'</div>';next.disabled=!answers[st.i];next.innerHTML='เลือกแล้วเดินทางต่อ →'}
else if(st.type==='districtStory'){const d=districts[st.code];html='<h1>'+esc(d.title)+'</h1><p>Lumi พาเธอเข้ามายังย่านที่ใกล้กับความสนใจของเธอ</p><p>'+esc(d.story)+'</p>';next.innerHTML='เดินทางต่อ →'}
else if(st.type==='districtQuestion'){const d=districts[st.code];html='<h1>'+esc(d.q)+'</h1><div class="choices">'+d.options.map((o,i)=>'<button class="choice '+(districtAnswers[st.code]===i?'selected':'')+'" data-job="'+i+'">'+esc(o)+'</button>').join('')+'</div>';next.disabled=districtAnswers[st.code]===undefined;next.innerHTML='เลือกแล้วเดินทางต่อ →'}
else if(st.type==='greeting'){html='<section class="traveler-dialogue"><p class="dialogue-speaker">✦ Lumin</p><h1>'+esc(travelerAnswers.nickname?'ยินดีที่ได้รู้จักนะ '+travelerAnswers.nickname+'!':'ยินดีที่ได้รู้จักนะ!')+'</h1><p>ไปออกเดินทางด้วยกันเถอะ!</p></section>';next.innerHTML='เดินทางต่อ →'}
else if(st.type==='form'){
 const [key,question,options]=travelerQuestions[st.i], value=travelerAnswers[key];
 html='<section class="traveler-dialogue"><p class="dialogue-speaker">✦ Lumin</p>'+ (st.i&&travelerReply(st.i)?'<p class="dialogue-reply">'+esc(travelerReply(st.i))+'</p>':'')+'<h1>'+esc(question)+'</h1>';
 if(!options)html+='<input class="dialogue-input" data-traveler-input aria-label="'+esc(key==='nickname'?'ชื่อเล่น':'จังหวัด')+'" placeholder="'+(key==='nickname'?'ชื่อเล่นของเธอ...':'จังหวัดของเธอ...')+'" maxlength="80" value="'+esc(value||'')+'">';
 else html+='<div class="choices dialogue-choices">'+options.map(o=>'<button type="button" class="choice '+((key==='factors'?(value||[]).includes(o):value===o)?'selected':'')+'" data-traveler-choice="'+esc(o)+'">'+esc(o)+'</button>').join('')+'</div>';
 html+='<button type="button" class="dialogue-skip" data-traveler-skip>ข้ามคำถามนี้</button></section>';next.innerHTML=st.i===travelerQuestions.length-1?'เปิดเผยผลลัพธ์ →':'คุยต่อ →';next.disabled=!value||!value.length;
}
else{const s=score(),r=ranking(s);let first=r[0],second=r[1];if(s[first]===s[second]&&[first,second].includes(answers[10]))first=answers[10],second=r.find(c=>c!==first);const mixed=s[first]-s[second]<=1;html='<div class="result-character-lead"><img src="assets/character-'+first.toLowerCase()+'.png" alt="ภูตประจำสาขา '+esc(degrees[first])+'" draggable="false"></div><h1>สีสันกลับมาแล้ว</h1><p>การเดินทางของเธอทำให้ Imagine City ส่องสว่างอีกครั้ง</p>'+[first,...(mixed?[second]:[])].map((code,i)=>'<div class="result-character-entry">'+(i?'<img class="result-character-secondary" src="assets/character-'+code.toLowerCase()+'.png" alt="ภูตประจำสาขา '+esc(degrees[code])+'" draggable="false">':'')+'</div><p class="quote">'+esc(names[code])+'</p><p>'+esc(endings[code])+'</p><p>เรียนได้ที่: '+esc(degrees[code])+'</p><p class="result-jobs">อาชีพที่เกี่ยวข้อง: '+esc([...(districtAnswers[code]===undefined?[]:[jobs[code][districtAnswers[code]]]),...jobs[code].filter((j,i)=>i!==districtAnswers[code])].join(' · '))+'</p>').join('')+'<p>นี่เป็นแนวทางค้นพบความสนใจ ไม่ใช่คำตัดสินความสามารถของเธอ</p><p>เมืองนี้ยังมีที่ว่างรออยู่เสมอ</p>';html+='<div class="result-actions"><button type="button" data-share-result>↗ แชร์ผลลัพธ์</button><button type="button" data-save-result>↓ บันทึกภาพ</button></div><p class="result-status" role="status"></p>';next.innerHTML='เริ่มเรื่องอีกครั้ง ↻'}
scene.classList.toggle('is-cover',st.type==='cover');updateLight();content.classList.toggle('scroll-page',st.type==='cover'||st.type==='story'||st.type==='districtStory');content.classList.toggle('scroll-cover',st.type==='cover');content.classList.toggle('result-page',st.type==='result');if(['cover','story','districtStory'].includes(st.type))html='<div class="scroll-reveal"><img class="scroll-art" src="assets/winter-scroll.png" alt="กรอบนิทาน"><div class="scroll-copy">'+html+'</div></div>';if(st.type==='result')html='<div class="result-scroll-reveal"><img class="result-scroll-art" src="assets/result-scroll.png" alt="กรอบผลลัพธ์"><div class="result-scroll-copy">'+html+'</div></div>';content.classList.toggle('dialogue-page',st.type==='form'||st.type==='greeting');content.innerHTML=html; if(st.type==='result') bindResultActions(); document.dispatchEvent(new CustomEvent('imagine:scene',{detail:st.type}));
if(st.type==='form'){
 const key=travelerQuestions[st.i][0];const input=content.querySelector('[data-traveler-input]');
 if(input){input.oninput=()=>{travelerAnswers[key]=input.value.trim();next.disabled=!travelerAnswers[key];};input.onkeydown=e=>{if(e.key==='Enter'&&!next.disabled)move();};}
 const buttons=[...content.querySelectorAll('[data-traveler-choice]')];buttons.forEach(btn=>btn.onclick=()=>{const v=btn.dataset.travelerChoice;if(key==='factors'){const a=travelerAnswers[key]||[];if(a.includes(v))travelerAnswers[key]=a.filter(x=>x!==v);else if(a.length<2)travelerAnswers[key]=[...a,v];}else travelerAnswers[key]=v;buttons.forEach(x=>{const selected=key==='factors'?(travelerAnswers[key]||[]).includes(x.dataset.travelerChoice):travelerAnswers[key]===x.dataset.travelerChoice;x.classList.toggle('selected',selected);x.setAttribute('aria-pressed',String(selected));});next.disabled=!travelerAnswers[key]?.length;});
 content.querySelector('[data-traveler-skip]').onclick=()=>{delete travelerAnswers[key];move();};
}
content.querySelectorAll('[data-code]').forEach(el=>el.onclick=()=>{answers[st.i]=el.dataset.code;content.querySelectorAll('[data-code]').forEach(b=>b.classList.toggle('selected',b===el));next.disabled=false;updateLight()});content.querySelectorAll('[data-job]').forEach(el=>el.onclick=()=>{districtAnswers[st.code]=Number(el.dataset.job);content.querySelectorAll('[data-job]').forEach(b=>b.classList.toggle('selected',b===el));next.disabled=false});content.querySelectorAll('[data-factor]').forEach(el=>el.onchange=()=>{const selected=[...content.querySelectorAll('[data-factor]:checked')];if(selected.length>2)el.checked=false})}
function move(){if(busy)return;const st=steps()[position];if((st.type==='question'&&!answers[st.i])||(st.type==='districtQuestion'&&districtAnswers[st.code]===undefined))return;if(['question','districtQuestion','form'].includes(st.type))document.dispatchEvent(new Event('imagine:answer'));const action=()=>{if(st.type==='result'){answers.fill(null);Object.keys(travelerAnswers).forEach(k=>delete travelerAnswers[k]);route=[];Object.keys(districtAnswers).forEach(k=>delete districtAnswers[k]);position=0;showOpening()}else{if(st.type==='question'&&st.i===5)buildRoute();position++}render();scene.classList.remove('enter');void scene.offsetWidth;scene.classList.add('enter')};if(!motion){action();return}busy=true;scene.classList.add('leaving');content.inert=true;next.inert=true;overlay.classList.remove('active');void overlay.offsetWidth;overlay.classList.add('active');setTimeout(()=>{scene.classList.remove('leaving');action()},420);setTimeout(()=>{overlay.classList.remove('active');content.inert=false;next.inert=false;busy=false},1050)}
next.addEventListener('click',move);$('motion').addEventListener('click',()=>{motion=!motion;scene.classList.toggle('motion-off',!motion);$('motion').textContent=motion?'✧ Motion เปิด':'✧ Motion ปิด';$('motion').setAttribute('aria-pressed',String(motion))});const snow=$('snow');for(let i=0;i<40;i++){const f=document.createElement('i');f.className='flake star-particle';f.style.cssText=`--x:${(i*73.7)%100}%;--s:${9+i%10}px;--o:${.68+(i%6)*.06};--d:${17+i%15}s;--delay:-${(i*1.97)%24}s;--wind:${(i%2?1:-1)*(25+i%70)}px`;snow.appendChild(f)}render();

// V14: separate cinematic opening title, then automatically reveal the first story.
const openingScreen = document.getElementById('openingScreen');
let openingTimer;
function finishOpening(){
  if(!openingScreen || openingScreen.classList.contains('opening-exit'))return;
  clearTimeout(openingTimer);
  openingScreen.classList.add('opening-exit');
  openingScreen.addEventListener('transitionend',e=>{if(e.target===openingScreen)openingScreen.hidden=true},{once:true});
  setTimeout(()=>{openingScreen.hidden=true},1200);
}
function showOpening(){
  if(!openingScreen)return;
  clearTimeout(openingTimer);
  openingScreen.hidden=false;
  openingScreen.classList.remove('opening-exit');
  openingTimer=setTimeout(finishOpening,matchMedia('(prefers-reduced-motion: reduce)').matches?500:3200);
}
showOpening();

// Background music: user-gesture start, gentle fade, looping and accessible toggle.
(() => {
  const audio = document.getElementById('backgroundMusic');
  const toggle = document.getElementById('musicToggle');
  if (!audio || !toggle) return;
  const targetVolume = 0.32;
  const shine = document.getElementById('resultShine');
  let onResult = false;
  let shining = false;
  shine.volume = 0.8;
  function restoreMusic(){shining=false;if(enabled && started)fadeTo(targetVolume,650);}
  shine.addEventListener('ended',restoreMusic);
  shine.addEventListener('error',restoreMusic);
  document.addEventListener('imagine:scene',e=>{
    const result=e.detail==='result';
    if(result===onResult)return;
    onResult=result;
    if(!result){shine.pause();shine.currentTime=0;restoreMusic();return;}
    if(!enabled)return;
    shining=true;
    fadeTo(0.09,180);
    shine.currentTime=0;
    shine.play().catch(restoreMusic);
  });
  let enabled = true;
  const answerSoundUrl = 'assets/answer-interface.mp3';
  const answerSounds = [];
  let clickContext = null;
  function ensureClickContext(){
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if(!AudioContextClass)return null;
    if(!clickContext)clickContext = new AudioContextClass();
    if(clickContext.state==='suspended')clickContext.resume().catch(()=>{});
    return clickContext;
  }
  function playClickTone(){
    const context = ensureClickContext();
    if(!context)return;
    const now = context.currentTime;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(620, now);
    oscillator.frequency.exponentialRampToValueAtTime(410, now + 0.045);
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.055, now + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.065);
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.07);
  }
  function playAnswer(){
    if(!enabled)return;
    playClickTone();
    const sound = answerSounds.pop() || new Audio(answerSoundUrl);
    sound.volume = 0.15;
    sound.currentTime = 0;
    sound.play().catch(()=>{});
    sound.onended = () => {
      sound.onended = null;
      if(answerSounds.length < 6)answerSounds.push(sound);
    };
  }
  document.addEventListener('click',e=>{
    const button=e.target.closest('button');
    if(button&&!button.disabled)playAnswer();
  },true);
  document.addEventListener('imagine:scene',e=>{
    if(e.detail==='result')answerSounds.forEach(sound=>{sound.pause();sound.currentTime=0});
  });

  let started = false;
  let fadeFrame = null;
  audio.volume = 0;
  function sync() {
    toggle.textContent = enabled ? '♫ ปิดเพลง' : '♫ เปิดเพลง';
    toggle.setAttribute('aria-pressed', String(enabled));
    toggle.setAttribute('aria-label', enabled ? 'ปิดเพลงประกอบ' : 'เปิดเพลงประกอบ');
  }
  function fadeTo(goal, duration = 1000, after) {
    if (fadeFrame !== null) cancelAnimationFrame(fadeFrame);
    const initial = audio.volume;
    const start = performance.now();
    const tick = now => {
      const t = Math.min(1, (now - start) / duration);
      const ease = t * t * (3 - 2 * t);
      audio.volume = Math.max(0, Math.min(1, initial + (goal - initial) * ease));
      if (t < 1) fadeFrame = requestAnimationFrame(tick);
      else { fadeFrame = null; if (after) after(); }
    };
    fadeFrame = requestAnimationFrame(tick);
  }
  async function start() {
    if (!enabled) return;
    try {
      await audio.play();
      started = true;
      fadeTo(shining ? 0.09 : targetVolume, 1700);
    } catch (e) {
      // Browsers may require an additional deliberate tap.
      started = false;
      toggle.textContent = '♫ แตะเพื่อเปิดเพลง';
    }
  }
  function firstGesture(e) {
    if (e.target.closest && e.target.closest('#musicToggle')) return;
    if (!started && enabled) start();
  }
  document.addEventListener('pointerdown', firstGesture, { passive: true });
  document.addEventListener('keydown', firstGesture);
  toggle.addEventListener('click', () => {
    enabled = !enabled;
    sync();
    if (enabled) start();
    else {answerSounds.forEach(sound=>{sound.pause();sound.currentTime=0});shine.pause();shine.currentTime=0;shining=false;fadeTo(0, 450, () => audio.pause());}
  });
  sync();
})();

// V40: local PNG result card and native sharing with a download fallback.
function resultCodes(){const s=score(),r=ranking(s);let a=r[0],b=r[1];if(s[a]===s[b]&&[a,b].includes(answers[10])){a=answers[10];b=r.find(c=>c!==a)}return [a,...(s[a]-s[b]<=1?[b]:[])];}
async function resultCard(code){
 const palette={DGD:['#f6d78d','#a76b29'],DGA:['#f5c2d4','#a04c70'],AFX:['#d9c8f2','#70509e'],IGD:['#c1e4f4','#39789c'],DEN:['#f4b8b0','#a54b48']}[code];
 await document.fonts?.ready;
 const img=new Image();img.src='assets/character-'+code.toLowerCase()+'.png';await img.decode();
 const c=document.createElement('canvas');c.width=1080;c.height=1350;const g=c.getContext('2d');
 const rounded=(x,y,w,h,r)=>{g.beginPath();g.roundRect(x,y,w,h,r)};
 rounded(0,0,1080,1350,64);g.clip();const grad=g.createLinearGradient(0,0,1080,1350);grad.addColorStop(0,'#fff8e9');grad.addColorStop(.62,palette[0]);grad.addColorStop(1,palette[1]);g.fillStyle=grad;g.fillRect(0,0,1080,1350);
 let seed=17;const rand=()=>{seed=(seed*16807)%2147483647;return seed/2147483647};for(let i=0;i<24000;i++){g.fillStyle=i%2?'#ffffff18':'#513b3510';g.fillRect(rand()*1080,rand()*1350,2,2)}
 rounded(35,35,1010,1280,46);g.strokeStyle='#fff8e8';g.lineWidth=3;g.stroke();
 g.textAlign='center';g.textBaseline='middle';const text=(t,y,size,color='#49334a',font='Prompt')=>{g.font=`600 ${size}px "${font}", sans-serif`;g.fillStyle=color;g.fillText(t,540,y,920)};
 const wrap=(t,y,size,max=840)=>{g.font=`400 ${size}px Prompt, sans-serif`;g.fillStyle='#49334a';const seg=typeof Intl.Segmenter==='function'?[...new Intl.Segmenter('th',{granularity:'word'}).segment(t)].map(x=>x.segment):Array.from(t);let line='';for(const w of seg){if(line&&g.measureText(line+w).width>max){g.fillText(line.trim(),540,y);y+=size*1.55;line=w}else line+=w}if(line)g.fillText(line.trim(),540,y);return y;};
 text('IMAGINE CITY',100,48);text('✦  THE COLOR OF YOUR STORY  ✦',159,23);
 g.fillStyle='#fff8e87a';g.beginPath();g.ellipse(540,454,270,270,0,0,Math.PI*2);g.fill();
 for(const [x,y,z] of [[190,300,36],[850,370,48],[220,580,25],[815,620,28],[110,470,19],[950,245,20]]){g.fillStyle='#fff8e8';g.beginPath();g.moveTo(x,y-z);g.quadraticCurveTo(x+4,y-4,x+z,y);g.quadraticCurveTo(x+4,y+4,x,y+z);g.quadraticCurveTo(x-4,y+4,x-z,y);g.quadraticCurveTo(x-4,y-4,x,y-z);g.fill()}
 const scale=Math.min(540/img.width,510/img.height);g.drawImage(img,540-img.width*scale/2,455-img.height*scale/2,img.width*scale,img.height*scale);
 text(travelerAnswers.nickname?'ประกายของ '+travelerAnswers.nickname:'ประกายของนักเดินทาง',748,30);text(names[code],813,49);text(code+' · '+degrees[code],880,30);
 wrap(endings[code],955,29);
 text('DIGITAL MEDIA  /  SRIPATUM UNIVERSITY',1250,24,'#fff9ee');
 return new Promise((resolve,reject)=>c.toBlob(b=>b?resolve(b):reject(new Error('PNG export failed')),'image/png'));
}
// V41: preview every result card before saving; ZIP avoids blocked multiple downloads.
function saveResultBlob(blob,name){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000)}
async function cardZip(cards){
 const chunks=[],central=[];let offset=0;const enc=new TextEncoder();
 const crc32=bytes=>{let c=0xffffffff;for(const b of bytes){c^=b;for(let j=0;j<8;j++)c=(c>>>1)^((c&1)?0xedb88320:0)}return (c^0xffffffff)>>>0};
 for(const card of cards){const data=new Uint8Array(await card.blob.arrayBuffer()),name=enc.encode(card.name),crc=crc32(data);const h=new Uint8Array(30+name.length),v=new DataView(h.buffer);v.setUint32(0,0x04034b50,true);v.setUint16(4,20,true);v.setUint32(14,crc,true);v.setUint32(18,data.length,true);v.setUint32(22,data.length,true);v.setUint16(26,name.length,true);h.set(name,30);chunks.push(h,data);const ch=new Uint8Array(46+name.length),cv=new DataView(ch.buffer);cv.setUint32(0,0x02014b50,true);cv.setUint16(4,20,true);cv.setUint16(6,20,true);cv.setUint32(16,crc,true);cv.setUint32(20,data.length,true);cv.setUint32(24,data.length,true);cv.setUint16(28,name.length,true);cv.setUint32(42,offset,true);ch.set(name,46);central.push(ch);offset+=h.length+data.length;}
 const end=new Uint8Array(22),ev=new DataView(end.buffer);ev.setUint32(0,0x06054b50,true);ev.setUint16(8,cards.length,true);ev.setUint16(10,cards.length,true);ev.setUint32(12,central.reduce((n,x)=>n+x.length,0),true);ev.setUint32(16,offset,true);return new Blob([...chunks,...central,end],{type:'application/zip'});
}
function bindResultActions(){
 const save=content.querySelector('[data-save-result]'),share=content.querySelector('[data-share-result]'),status=content.querySelector('.result-status');
 const codes=resultCodes();let cards=null,archive=null,pending=null;
 const prepare=()=>pending||(pending=Promise.all(codes.map(async code=>({code,name:'Imagine-City-'+code+'.png',blob:await resultCard(code)}))).then(async list=>{archive=list.length>1?await cardZip(list):null;cards=list;return list}).catch(e=>{pending=null;throw e}));
 prepare().catch(()=>{});
 const preview=async mode=>{
  if(document.querySelector('.card-preview-dialog'))return;
  const dialog=document.createElement('dialog');dialog.className='card-preview-dialog';dialog.setAttribute('aria-label','ตัวอย่างการ์ดผลลัพธ์');dialog.innerHTML='<div class="preview-head"><div><h2>ประกายของเธอ</h2><p>ตัวอย่างการ์ดก่อนบันทึก · '+codes.length+' ใบ</p></div><button type="button" class="preview-close" aria-label="ปิด">×</button></div><div class="preview-gallery" aria-live="polite">กำลังสร้างการ์ด...</div><div class="preview-footer"></div><p class="preview-status" role="status"></p>';document.body.append(dialog);const urls=[];dialog.addEventListener('close',()=>{urls.forEach(u=>URL.revokeObjectURL(u));dialog.remove();(mode==='share'?share:save).focus()},{once:true});dialog.querySelector('.preview-close').onclick=()=>dialog.close();dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});dialog.showModal();
  try{const list=cards||await prepare();if(!dialog.open)return;const gallery=dialog.querySelector('.preview-gallery'),footer=dialog.querySelector('.preview-footer'),msg=dialog.querySelector('.preview-status');gallery.replaceChildren();for(const card of list){const item=document.createElement('div');item.className='preview-item';const img=document.createElement('img');const url=URL.createObjectURL(card.blob);urls.push(url);img.src=url;img.alt='การ์ด '+card.code;const button=document.createElement('button');button.type='button';button.textContent='บันทึก '+card.code;button.onclick=()=>{saveResultBlob(card.blob,card.name);msg.textContent='ส่งคำขอบันทึก '+card.code+' แล้ว'};item.append(img,button);gallery.append(item)}
  const all=document.createElement('button');all.type='button';all.textContent=list.length>1?'บันทึกทั้งหมด (ZIP)':'บันทึกภาพ PNG';all.onclick=()=>{saveResultBlob(archive||list[0].blob,archive?'Imagine-City-All-Results.zip':list[0].name);msg.textContent='ส่งคำขอบันทึกแล้ว'};footer.append(all);
  if(mode==='share'){const b=document.createElement('button');b.type='button';b.textContent='แชร์ผลลัพธ์ทั้งหมด';b.onclick=async()=>{const files=list.map(c=>new File([c.blob],c.name,{type:'image/png'}));try{if(navigator.share&&navigator.canShare?.({files})){await navigator.share({files,title:'Imagine City'});msg.textContent='แชร์ผลลัพธ์แล้ว'}else{all.click();msg.textContent='อุปกรณ์ไม่รองรับการแชร์ภาพโดยตรง จึงส่งคำขอบันทึกแทน'}}catch(e){if(e.name!=='AbortError')msg.textContent='แชร์ไม่สำเร็จ กรุณาบันทึกภาพแทน'}};footer.prepend(b)}
  }catch{if(dialog.open)dialog.querySelector('.preview-gallery').textContent='สร้างภาพไม่สำเร็จ กรุณาปิดแล้วลองใหม่';status.textContent='สร้างภาพไม่สำเร็จ กรุณาลองใหม่'}
 };save.onclick=()=>preview('save');share.onclick=()=>preview('share');
}
