/* =====================================================
   Hao Yan Learn · 主应用
   移动优先 · 水彩主题 · IndexedDB 本地存储
   ===================================================== */
(function(){
  'use strict';

  const D = window.HY_DATA;
  const DB = window.HY_DB;
  const TTS = window.HY_TTS;

  // ============== 工具 ==============
  function $(sel, ctx){ return (ctx||document).querySelector(sel); }
  function $$(sel, ctx){ return Array.from((ctx||document).querySelectorAll(sel)); }

  function todayKey(prefix='d'){
    const d = new Date();
    return prefix + '_' + d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();
  }
  function startWeekKey(){
    const d = new Date();
    const day = d.getDay() || 7;
    d.setDate(d.getDate() - day + 1);
    return d.toISOString().slice(0,10);
  }
  function fmtDate(d){
    return d.getFullYear() + '-' + String(d.getMonth()+1).padStart(2,'0') + '-' + String(d.getDate()).padStart(2,'0');
  }

  // 简单 Fisher-Yates 随机 (seeded)
  function shuffle(arr, seed){
    const r = arr.slice();
    let s = seed || Math.floor(Math.random()*1e6);
    for(let i=r.length-1;i>0;i--){
      s = (s*9301+49297) % 233280;
      const j = Math.floor((s/233280)*(i+1));
      [r[i],r[j]] = [r[j],r[i]];
    }
    return r;
  }

  // ============== 雪花动画 ==============
  function startSnow(){
    const layer = $('#snowLayer');
    if(!layer) return;
    const flakes = ['❄','❅','❆','✻','✺','✦'];
    const n = window.innerWidth < 480 ? 18 : 28;
    layer.innerHTML = '';
    for(let i=0;i<n;i++){
      const f = document.createElement('span');
      f.className = 'snowflake';
      f.textContent = flakes[Math.floor(Math.random()*flakes.length)];
      f.style.left = (Math.random()*100) + 'vw';
      f.style.opacity = (.4 + Math.random()*.5).toFixed(2);
      f.style.fontSize = (12 + Math.random()*16) + 'px';
      f.style.animationDuration = (8 + Math.random()*10) + 's';
      f.style.animationDelay = (-Math.random()*18) + 's';
      layer.appendChild(f);
    }
  }

  // ============== 底部 Tab 切换 ==============
  function bindTabs(){
    $$('.tab').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const page = btn.dataset.page;
        $$('.tab').forEach(b=>b.classList.toggle('active', b===btn));
        $$('.page').forEach(p=>p.classList.toggle('active', p.dataset.page===page));
        window.scrollTo({ top:0, behavior:'smooth' });
      });
    });
  }

  // ============== 中文 / 英文 子导航 ==============
  function bindSubTabs(){
    $$('.subnav').forEach(nav=>{
      nav.querySelectorAll('.sub').forEach(btn=>{
        btn.addEventListener('click', ()=>{
          nav.querySelectorAll('.sub').forEach(b=>b.classList.toggle('active', b===btn));
          const parent = nav.parentElement;
          parent.querySelectorAll('.cn-panel, .en-panel').forEach(p=>p.classList.remove('active'));
          const tab = btn.dataset.cntab || btn.dataset.entab;
          const panel = parent.querySelector(`.cn-panel[data-cnpanel="${tab}"], .en-panel[data-enpanel="${tab}"]`);
          if(panel) panel.classList.add('active');
        });
      });
    });
  }

  // ============== 首页 ==============
  function renderHomeSync(){
    const noteKey = 'note_' + todayKey('d');
    DB.get(noteKey, '').then(note=>{ $('#dailyNote').value = note || ''; });

    const ratingKey = 'rate_' + todayKey('d');
    let rating = 3;
    DB.get(ratingKey, 3).then(r=>{
      rating = parseInt(r,10) || 3;
      $('#rateValue').textContent = rating;
      $$('.star').forEach(s=>{
        const v = parseInt(s.dataset.v,10);
        s.classList.toggle('active', v <= rating);
      });
    });

    // 历史成绩
    renderStats();
    renderChart();

    const h = new Date().getHours();
    let greet = '今天我们一起学点什么呀？';
    if(h<6) greet = '夜深了，皓言要早点睡哦 🌙';
    else if(h<11) greet = '早安！新的一天充满可能 ☀️';
    else if(h<14) greet = '午饭吃饱，下午继续加油 🍱';
    else if(h<18) greet = '下午好，学得怎么样了？☕';
    else greet = '晚上好，我们看看今天的成果 🌙';
    $('#greetingText').textContent = greet;

    $('#dailyDate').textContent = new Date().toLocaleDateString('zh-CN', { weekday:'long', year:'numeric', month:'long', day:'numeric' });
  }

  async function renderHome(){
    renderHomeSync();
  }

  async function bindHome(){
    $('#btnSaveNote').addEventListener('click', async ()=>{
      const note = $('#dailyNote').value;
      const noteKey = 'note_' + todayKey('d');
      await DB.set(noteKey, note);
      // 同时累计字数
      const stat = (await DB.get('stat_days', {days:0, words:0, books:0})) || {days:0, words:0, books:0};
      const set = (await DB.get('days_set', [])) || [];
      const day = todayKey('d');
      if(!set.includes(day)){ set.push(day); await DB.set('days_set', set); }
      stat.days = set.length;
      await DB.set('stat_days', stat);
      toast('已保存今天心得 🍀');
    });

    // 主题切换
    $('#btnTheme').addEventListener('click', ()=>{
      const cur = document.documentElement.getAttribute('data-theme');
      document.documentElement.setAttribute('data-theme', cur==='dark' ? '' : 'dark');
      DB.set('theme', document.documentElement.getAttribute('data-theme')||'');
    });
    DB.get('theme').then(t=>{ if(t) document.documentElement.setAttribute('data-theme', t); });

    // 星星点击
    $$('.star').forEach(s=>{
      s.addEventListener('click', async ()=>{
        const v = parseInt(s.dataset.v,10);
        $('#rateValue').textContent = v;
        $$('.star').forEach(ss=>{
          const vv = parseInt(ss.dataset.v,10);
          ss.classList.toggle('active', vv <= v);
        });
        const ratingKey = 'rate_' + todayKey('d');
        await DB.set(ratingKey, v);
        renderChart();
        toast('已记录今日程度 ⭐');
      });
    });

    // 备份 / 恢复
    $('#btnBackup').addEventListener('click', exportAll);
    $('#btnExport').addEventListener('click', exportAll);
    $('#importFile').addEventListener('change', (e)=>{
      const file = e.target.files[0];
      if(!file) return;
      const fr = new FileReader();
      fr.onload = ()=> importAll(fr.result);
      fr.readAsText(file);
      e.target.value = '';
    });

    // 打印
    $('#btnPrint').addEventListener('click', ()=> window.print());
  }

  async function exportAll(){
    try{
      const all = await DB.all();
      const blob = new Blob([JSON.stringify({exportedAt:Date.now(), version:D.meta.version, data:all}, null, 2)], {type:'application/json'});
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'hao_yan_learn_backup_' + fmtDate(new Date()) + '.json';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
      toast('已备份 ☁️');
    }catch(e){ toast('备份失败：'+(e.message||e)); }
  }
  async function importAll(text){
    try{
      const obj = JSON.parse(text);
      if(!obj.data) throw new Error('数据格式不正确');
      await DB.clear();
      for(const k in obj.data){
        await DB.set(k, obj.data[k]);
      }
      toast('已恢复，再刷新页面后生效');
    }catch(e){ toast('导入失败：'+(e.message||e)); }
  }

  // ============== 图表 ==============
  // ============== 图表：默认绘制网格线（即便无数据也立即显示） ==============
  async function renderChart(){
    const cvs = $('#chartCanvas');
    if(!cvs) return;
    // 确保 canvas 有尺寸
    const W = cvs.width = cvs.offsetWidth || 360;
    const H = cvs.height = 240;
    const ctx = cvs.getContext('2d');
    ctx.clearRect(0,0,W,H);

    // 取最近 7 天数据
    const days = [];
    for(let i=6;i>=0;i--){
      const d = new Date(); d.setDate(d.getDate()-i);
      days.push(fmtDate(d));
    }

    const data1 = []; // 完成度
    const data2 = []; // 评分
    for(const dd of days){
      const checks = await DB.get('checks_' + dd, null);
      let pct = 0;
      if(checks){
        const vals = Object.values(checks).filter(Boolean).length;
        pct = Math.round(vals / 15 * 100);
      }
      const r = parseInt((await DB.get('rate_d_' + dd, 0)), 10) || 0;
      data1.push(pct);
      data2.push(r * 20);
    }

    // 坐标
    const pad = { l:30, r:10, t:10, b:30 };
    const w = W - pad.l - pad.r;
    const h = H - pad.t - pad.b;
    const step = w / Math.max(1, days.length - 1);

    // 网格
    ctx.strokeStyle = '#eaeaea';
    ctx.lineWidth = 1;
    for(let i=0;i<=4;i++){
      const y = pad.t + (h*i/4);
      ctx.beginPath(); ctx.moveTo(pad.l, y); ctx.lineTo(W-pad.r, y); ctx.stroke();
    }

    // X 标签
    ctx.fillStyle = '#7d7d96';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';
    days.forEach((d,i)=>{
      ctx.fillText(d.slice(5), pad.l + step*i, H-10);
    });

    // 蓝线 完成度
    ctx.strokeStyle = '#4ba7ca';
    ctx.fillStyle = '#4ba7ca';
    ctx.lineWidth = 2;
    ctx.beginPath();
    data1.forEach((v,i)=>{
      const x = pad.l + step*i;
      const y = pad.t + h - (v/100)*h;
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    });
    ctx.stroke();
    data1.forEach((v,i)=>{
      const x = pad.l + step*i;
      const y = pad.t + h - (v/100)*h;
      ctx.beginPath(); ctx.arc(x,y,3,0,Math.PI*2); ctx.fill();
    });

    // 粉线 评分
    ctx.strokeStyle = '#ffb6c1';
    ctx.fillStyle = '#ffb6c1';
    ctx.beginPath();
    data2.forEach((v,i)=>{
      const x = pad.l + step*i;
      const y = pad.t + h - (v/100)*h;
      if(i===0) ctx.moveTo(x,y); else ctx.lineTo(x,y);
    });
    ctx.stroke();
    data2.forEach((v,i)=>{
      const x = pad.l + step*i;
      const y = pad.t + h - (v/100)*h;
      ctx.beginPath(); ctx.arc(x,y,3,0,Math.PI*2); ctx.fill();
    });
  }

  async function renderStats(){
    const stat = (await DB.get('stat_days', {days:0, words:0, books:0})) || {days:0, words:0, books:0};
    $('#statDays').textContent = stat.days || 0;
    $('#statWords').textContent = stat.words || 0;
    $('#statBooks').textContent = stat.books || 0;
  }

  // ============== 每日任务 ==============
  // 同步版（无 DB 等待），立即渲染，再异步加载已学状态
  function renderDailyWordsSync(){
    const day = todayKey('d');
    const cnWordIdx = D.dailyPick(D.charList, 5, 0);
    const cnVocabIdx = D.dailyPick(D.vocabList, 5, 1);
    const enIdx = D.dailyPick(D.enWords, 5, 2);

    const cnWrap = $('#cnWords');
    cnWrap.innerHTML = '';
    cnWordIdx.forEach((c,i)=>{
      const card = document.createElement('div');
      card.className = 'word-card';
      card.innerHTML = `
        <div class="wc-head">
          <div>
            <div class="wc-char">${c.char}</div>
            <div class="wc-pinyin">${c.pinyin}</div>
            <div class="wc-strokes">部首/笔画：${c.stroke}  ·  ${c.meaning}</div>
          </div>
          <div style="font-size:42px">${c.emoji||''}</div>
        </div>
        <div class="wc-sentence">例句：${c.example}</div>
        <div class="wc-actions">
          <button class="btn-icon-round" data-act="say">🔊</button>
          <button class="btn-icon-round" data-act="sentence">📖</button>
          <button class="btn-icon-round" data-act="learned" title="我学会啦">⭐</button>
        </div>
      `;
      card.querySelector('[data-act="say"]').addEventListener('click', ()=> TTS.speakCN(c.char));
      card.querySelector('[data-act="sentence"]').addEventListener('click', ()=> TTS.speakCN(c.example));
      card.querySelector('[data-act="learned"]').addEventListener('click', async ()=>{
        const set = (await DB.get('cn_learned', [])) || [];
        if(!set.includes(c.char)){ set.push(c.char); await DB.set('cn_learned', set); }
        toast('已记录 ✨');
      });
      cnWrap.appendChild(card);
    });

    const vocWrap = $('#cnVocabs');
    vocWrap.innerHTML = '';
    cnVocabIdx.forEach((v,i)=>{
      const card = document.createElement('div');
      card.className = 'word-card';
      card.innerHTML = `
        <div class="wc-head">
          <div>
            <div class="wc-char" style="font-size:38px">${v.word}</div>
            <div class="wc-pinyin">${v.pinyin}</div>
          </div>
          <div style="font-size:42px">${v.emoji}</div>
        </div>
        <div class="wc-sentence">例句：${v.sentence}</div>
        <div class="wc-actions">
          <button class="btn-icon-round" data-act="say-word">🔊</button>
          <button class="btn-icon-round" data-act="say-sen">📖</button>
        </div>
      `;
      card.querySelector('[data-act="say-word"]').addEventListener('click', ()=> TTS.speakCN(v.word));
      card.querySelector('[data-act="say-sen"]').addEventListener('click', ()=> TTS.speakCN(v.sentence));
      vocWrap.appendChild(card);
    });

    const enWrap = $('#enWords');
    enWrap.innerHTML = '';
    enIdx.forEach((w,i)=>{
      const card = document.createElement('div');
      card.className = 'word-card';
      card.innerHTML = `
        <div class="wc-head">
          <div>
            <div class="wc-en">${w.w} <small>${w.m}</small></div>
            <div style="font-size:13px;color:#7d7d96;margin-top:4px">翻译：${w.m}</div>
          </div>
          <div style="font-size:42px">${w.e}</div>
        </div>
        <div class="wc-sentence">${w.ex}<br><small style="color:#7d7d96">${w.zh}</small></div>
        <div class="wc-actions">
          <button class="btn-icon-round" data-act="uk">🔊 英式</button>
          <button class="btn-icon-round" data-act="sentence">📖</button>
          <button class="btn-icon-round" data-act="example">📝</button>
          <button class="btn-icon-round" data-act="learned" title="我学会啦">⭐</button>
        </div>
      `;
      card.querySelector('[data-act="uk"]').addEventListener('click', ()=> TTS.speakEN(w.w));
      card.querySelector('[data-act="sentence"]').addEventListener('click', ()=> TTS.speakEN(w.ex));
      card.querySelector('[data-act="example"]').addEventListener('click', ()=> openModal(`
        <h3>${w.w}</h3>
        <p style="text-align:center;color:#3b8aab;font-weight:600">${w.m}</p>
        <div class="modal-sentence"><b>例句：</b>${w.ex}</div>
        <div class="modal-sentence">${w.zh}</div>
        <div class="modal-row"><button class="btn-primary" data-act="uk">🔊 朗读</button></div>
      `));
      card.querySelector('[data-act="learned"]').addEventListener('click', async ()=>{
        const set = (await DB.get('en_learned', [])) || [];
        if(!set.includes(w.w)){ set.push(w.w); await DB.set('en_learned', set);
          const stat = (await DB.get('stat_days', {days:0, words:0, books:0})) || {days:0, words:0, books:0};
          stat.words = (stat.words||0) + 1;
          await DB.set('stat_days', stat);
        }
        toast('已记录 ✨');
      });
      enWrap.appendChild(card);
    });

    document.documentElement.setAttribute('data-hydrated','done');

    // 异步加载 checkbox 状态
    DB.get('checks_' + day, {}).then(checks=>{
      checks = checks || {};
      $$('.checklist input').forEach(cb=>{
        cb.checked = !!checks[cb.dataset.task];
        cb.onchange = async ()=>{
          checks[cb.dataset.task] = cb.checked;
          await DB.set('checks_' + day, checks);
          renderProgress(checks);
        };
      });
      renderProgress(checks);
    });
  }

  async function renderDailyWords(){
    renderDailyWordsSync();
  }

  async function renderProgress(checks){
    const vals = Object.values(checks || {}).filter(Boolean);
    const pct = Math.round(vals.length / 15 * 100);
    $('#ringPct').textContent = pct;
    const fg = $('#ringFg');
    if(fg){
      const c = 264;
      fg.style.strokeDashoffset = (c - c*pct/100) + '';
    }
  }

  async function bindDaily(){
    $('#btnNextCN').addEventListener('click', async ()=>{
      // 重新随机
      await renderDailyWords();
      toast('已换一组 🇨🇳');
    });
    $('#btnNextEN').addEventListener('click', async ()=>{
      await renderDailyWords();
      toast('New words! 🇬🇧');
    });
  }

  // ============== 语文：一年级生字 ==============
  function renderChars(list){
    const grid = $('#charGrid');
    grid.innerHTML = '';
    DB.get('cn_learned').then(learned=>{
      learned = learned || [];
      list.forEach(c=>{
        const cell = document.createElement('div');
        cell.className = 'char-cell' + (learned.includes(c.char)?' learned':'');
        cell.innerHTML = `
          <div class="glyph">${c.char}</div>
          <div class="pin">${c.pinyin}</div>
        `;
        cell.addEventListener('click', ()=> openCharModal(c));
        grid.appendChild(cell);
      });
    });
  }
  function bindChars(){
    // 单元下拉
    const sel = $('#charLesson');
    const lessons = Array.from(new Set(D.charList.map(c=>c.lesson))).sort();
    lessons.forEach(l=>{
      const o = document.createElement('option'); o.value = l; o.textContent = '第' + l + '单元';
      sel.appendChild(o);
    });
    function apply(){
      const k = $('#charSearch').value.trim();
      const l = sel.value;
      let arr = D.charList;
      if(l!=='all') arr = arr.filter(c=>c.lesson===l);
      if(k) arr = arr.filter(c=> c.char.includes(k) || c.pinyin.toLowerCase().includes(k.toLowerCase()));
      renderChars(arr);
    }
    $('#charSearch').addEventListener('input', apply);
    sel.addEventListener('change', apply);
    apply();
  }

  function openCharModal(c){
    openModal(`
      <h3>${c.char}</h3>
      <div class="modal-pinyin">${c.pinyin}</div>
      <div class="modal-char">${c.emoji||''}</div>
      <div style="text-align:center;color:#7d7d96;margin-top:6px">部首/笔画：${c.stroke}  ·  ${c.meaning}</div>
      <div class="modal-sentence"><b>例句：</b>${c.example}</div>
      <div class="modal-row">
        <button class="btn-primary" data-act="say">🔊 朗读</button>
        <button class="btn-secondary" data-act="sen">📖 句子</button>
      </div>
    `);
    const body = $('#modalBody');
    body.querySelector('[data-act="say"]').addEventListener('click', ()=> TTS.speakCN(c.char));
    body.querySelector('[data-act="sen"]').addEventListener('click', ()=> TTS.speakCN(c.example));
  }

  // ========== 语文：词汇大全 ==========
  function bindVocab(){
    const grid = $('#vocabGrid');
    D.vocabList.forEach(v=>{
      const card = document.createElement('div');
      card.className = 'vocab-card';
      card.innerHTML = `
        <div class="vch">${v.word}</div>
        <div class="vbody">
          <div style="color:#ff97a6;font-weight:600">${v.pinyin}</div>
          <div class="vs">${v.sentence}</div>
        </div>
        <div class="vp"><button class="btn-icon-round">🔊</button></div>
      `;
      card.querySelector('button').addEventListener('click', ()=> TTS.speakCN(v.word));
      grid.appendChild(card);
    });
  }

  // ========== 语文：成语 ==========
  function bindIdioms(){
    const grid = $('#idiomGrid');
    D.idiomList.forEach(it=>{
      const card = document.createElement('div');
      card.className = 'idiom-card';
      card.innerHTML = `
        <div class="idiom">${it.idiom}</div>
        <div class="imean">${it.pinyin}</div>
        <div class="imean" style="margin-top:6px;color:#a04050">${it.meaning}</div>
      `;
      card.addEventListener('click', ()=>{
        openModal(`
          <h3>${it.idiom}</h3>
          <div class="modal-pinyin">${it.pinyin}</div>
          <div style="text-align:center;margin:10px 0;font-weight:600;color:#a04050">${it.meaning}</div>
          <div class="modal-sentence"><b>典故：</b>${it.story}</div>
          <div class="modal-row"><button class="btn-primary" data-act="say">🔊 朗读</button></div>
        `);
        $('#modalBody [data-act="say"]').addEventListener('click', ()=> TTS.speakCN(it.idiom));
      });
      grid.appendChild(card);
    });
  }

  // ========== 语文：趣味识字 ==========
  function bindFun(){
    const grid = $('#funGrid');
    D.funMethods.forEach(m=>{
      const card = document.createElement('div');
      card.className = 'fun-card';
      card.innerHTML = `
        <div class="ic">${m.ic}</div>
        <div class="it">${m.t}</div>
        <div class="id">${m.d}</div>
        <div style="font-size:11px;color:var(--c-text-soft);margin-top:8px">👉 进入学习</div>
      `;
      card.addEventListener('click', ()=> openFunPage(m));
      grid.appendChild(card);
    });
  }

  // ============= 趣味识字详情页 =============
  function openFunPage(m){
    let body = `<h3>${m.ic} ${m.t}</h3>`;
    body += `<p style="color:#7d7d96;text-align:center;font-size:13px;margin-bottom:8px">${m.desc||m.d}</p>`;

    if(m.id === 'radical'){
      // 部首：每个部首一个卡片
      body += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">`;
      m.radicals.forEach(r=>{
        body += `<div class="vocab-card" style="cursor:default"><div class="vch" style="font-size:32px;color:#3a8aab">${r.r}</div>
          <div class="vbody"><div style="color:#ff97a6;font-weight:700;font-size:13px">${r.name}</div>
          <div class="vs" style="font-size:12px;color:#a04050">${r.ex}</div>
          <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:6px">${r.examples.map(ex=>`<span class="pinyin-chip" style="background:#fff5f7;padding:4px 8px;border-radius:8px;font-size:13px"><b>${ex.w}</b><br><small style="color:#a04050">${ex.pinyin}</small><br><small style="color:#7d7d96">${ex.m}</small></span>`).join('')}</div>
          </div></div>`;
      });
      body += `</div>`;
    } else if(m.id === 'riddle'){
      // 字谜
      body += `<div style="display:grid;gap:10px">`;
      m.items.forEach((it,i)=>{
        body += `<div class="vocab-card" style="cursor:default"><div class="vch" style="font-size:24px;font-weight:800;color:#a04050">${i+1}</div>
          <div class="vbody"><div style="font-size:14px;font-weight:600">🤔 ${it.riddle}</div>
          <details style="margin-top:6px"><summary style="cursor:pointer;color:#3a8aab;font-size:12px">查看答案</summary><div style="margin-top:4px;color:#a04050;font-weight:700;font-size:18px;text-align:center">${it.answer}</div></details></div></div>`;
      });
      body += `</div>`;
    } else if(m.id === 'pic'){
      // 图文识字
      body += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">`;
      m.items.forEach(it=>{
        body += `<div class="vocab-card" style="cursor:default;flex-direction:column"><div style="font-size:48px;text-align:center">${it.img}</div>
          <div style="text-align:center"><div style="font-size:28px;font-weight:700;color:#3a8aab">${it.word}</div><div style="color:#ff97a6">${it.pinyin}</div><div style="font-size:12px;color:#7d7d96">${it.hint}</div></div>
          <div style="display:flex;gap:4px;justify-content:center;margin-top:6px"><button class="btn-icon-round" data-sayw="${it.word}">🔊 字</button><button class="btn-icon-round" data-says="${it.word} ${it.hint}">📖 句</button></div></div>`;
      });
      body += `</div>`;
    } else if(m.id === 'ani'){
      // 动画识字 (字源故事)
      body += `<div style="display:grid;grid-template-columns:1fr;gap:10px">`;
      m.items.forEach(it=>{
        body += `<div class="vocab-card" style="cursor:default">
          <div class="vch" style="font-size:36px;color:#3a8aab">${it.word}</div>
          <div class="vbody"><div style="color:#ff97a6;font-size:13px">${it.pinyin}</div>
          <div class="vs" style="font-size:13px">${it.story}</div>
          <div style="font-size:24px;margin-top:4px">${it.img}</div></div>
          <div class="vp"><button class="btn-icon-round" data-sayw="${it.word}">🔊</button></div>
        </div>`;
      });
      body += `</div>`;
    } else if(m.id === 'picto'){
      // 象形字
      body += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">`;
      m.items.forEach(it=>{
        body += `<div class="vocab-card" style="cursor:default;flex-direction:column;text-align:center">
          <div style="font-size:36px;color:#7d7d96;font-family:serif">${it.old}</div>
          <div style="font-size:12px;color:#7d7d96;margin:4px 0">↓ 古→今 ↓</div>
          <div style="font-size:38px;font-weight:800;color:#3a8aab">${it.new}</div>
          <div style="color:#ff97a6;font-size:13px">${it.pinyin}</div>
          <div style="font-size:30px;margin:4px 0">${it.img}</div>
          <div style="font-size:12px;color:#a04050;font-weight:600">${it.ex}</div>
          <button class="btn-mini" style="margin-top:6px" data-sayw="${it.new}">🔊 读</button>
        </div>`;
      });
      body += `</div>`;
    } else if(m.id === 'contrast'){
      // 对比识字
      body += `<div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">`;
      m.pairs.forEach(p=>{
        body += `<div class="vocab-card" style="cursor:default;flex-direction:column">
          <div style="display:flex;justify-content:space-around;align-items:center">
            <div style="text-align:center"><div style="font-size:32px;font-weight:700;color:#3a8aab">${p.a}</div><div style="color:#ff97a6;font-size:13px">${p.exa}</div></div>
            <div style="font-size:13px;color:#a04050">${p.ta}</div>
            <div style="text-align:center"><div style="font-size:32px;font-weight:700;color:#ff8fab">${p.b}</div><div style="color:#a04050;font-size:13px">${p.exb}</div></div>
          </div>
          <div style="display:flex;justify-content:center;gap:6px;margin-top:6px">
            <button class="btn-icon-round" data-sayw="${p.a}">🔊</button>
            <button class="btn-icon-round" data-sayw="${p.b}">🔊</button>
          </div>
        </div>`;
      });
      body += `</div>`;
    } else if(m.id === 'rhythm'){
      // 儿歌识字
      body += `<div style="display:grid;gap:10px">`;
      m.songs.forEach(s=>{
        body += `<div class="vocab-card" style="cursor:default;flex-direction:column">
          <div style="font-size:18px;font-weight:700;color:#3a8aab;text-align:center">${s.t}</div>
          <div style="font-size:14px;line-height:1.9;margin:10px;padding:10px;background:#fff5f7;border-radius:10px">${s.lines.map(l=>l.replace(/(.)/g, '<span style="margin:2px">$1</span>')).join('<br>')}</div>
          <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center;margin-top:4px">${s.words.map(w=>`<span style="background:#f0f9fc;padding:4px 10px;border-radius:12px;font-size:16px;font-weight:700;color:#3a8aab" data-sayw="${w}">${w}</span>`).join('')}</div>
          <div style="display:flex;justify-content:center;gap:8px;margin-top:8px"><button class="btn-primary" data-rname="${s.t}" data-rlines="${encodeURIComponent(s.lines.join('|'))}">🔊 朗读</button></div>
        </div>`;
      });
      body += `</div>`;
    } else if(m.id === 'game'){
      // 游戏识字
      body += `<div style="display:grid;gap:10px">`;
      m.games.forEach(g=>{
        body += `<div class="vocab-card" style="cursor:default;flex-direction:column">
          <div style="font-size:18px;font-weight:700;color:#a04050">🎮 ${g.n}</div>
          <div style="font-size:13px;color:#7d7d96;margin:6px 0">${g.d}</div>
          <details style="font-size:13px;background:#f0f9fc;padding:10px;border-radius:10px"><summary style="cursor:pointer;color:#3a8aab;font-weight:600">来试试</summary><div style="margin-top:6px;color:#3b3b5e">${g.ex}</div></details>
        </div>`;
      });
      body += `</div>`;
    }

    // 底部动作条
    body += `<div class="modal-row" style="margin-top:14px"><button class="btn-secondary" id="btnBackToFun">← 返回趣味识字</button></div>`;
    // 关闭并替换主体
    openModal(body);
    const modal = $('#modalBody');

    // 通用：w/字 朗读
    modal.querySelectorAll('[data-sayw]').forEach(btn=>{
      btn.addEventListener('click', ()=> TTS.speakCN(btn.dataset.sayw));
    });
    // 通用：句子朗读
    modal.querySelectorAll('[data-says]').forEach(btn=>{
      btn.addEventListener('click', ()=> TTS.speakCN(btn.dataset.says));
    });
    // 儿歌整首朗读
    modal.querySelectorAll('[data-rname]').forEach(btn=>{
      btn.addEventListener('click', ()=> {
        const lines = decodeURIComponent(btn.dataset.rlines).split('|');
        lines.reduce((p,l)=> p.then(()=> TTS.speakCN(l)), Promise.resolve());
      });
    });
    // 返回
    const back = modal.querySelector('#btnBackToFun');
    if(back){
      back.addEventListener('click', ()=>{
        // 用一个 "页面栈" 仍然用 modal 显示整个趣味识字 8 卡网格
        showFunGrid();
      });
    }
  }

  function showFunGrid(){
    let body = `<h3>🎮 趣味识字 · 选一个学</h3><div class="fun-grid">`;
    D.funMethods.forEach(m=>{
      body += `<div class="fun-card" data-id="${m.id}">
        <div class="ic">${m.ic}</div>
        <div class="it">${m.t}</div>
        <div class="id">${m.d}</div>
        <div style="font-size:11px;color:var(--c-text-soft);margin-top:8px">👉 进入学习</div>
      </div>`;
    });
    body += `</div>`;
    openModal(body);
    $('#modalBody').querySelectorAll('.fun-card').forEach((el,i)=>{
      el.addEventListener('click', ()=> openFunPage(D.funMethods[i]));
    });
  }

  // ========== 语文：阅读理解 ==========
  // 当前阅读理解的偏移（可手动改）
  let _readOffset = 0;
  function bindReading(){
    // 渲染筛选条
    const panel = $('[data-cnpanel="read"]');
    if(panel && !panel.querySelector('.read-filter')){
      const title = document.createElement('h3');
      title.className = 'panel-title';
      title.innerHTML = '📚 今日阅读';
      panel.insertBefore(title, panel.querySelector('#readList'));

      const filter = document.createElement('div');
      filter.className = 'chars-filter read-filter';
      filter.innerHTML = `
        <select id="readLevel">
          <option value="all">全部层级</option>
          <option value="短句">短句</option>
          <option value="儿歌">儿歌</option>
          <option value="小故事">小故事</option>
          <option value="短文">短文</option>
          <option value="记叙文">记叙文</option>
        </select>
        <button class="btn-mini" id="btnNextRead">🔄 换一组</button>
      `;
      panel.insertBefore(filter, panel.querySelector('#readList'));

      panel.querySelector('#readLevel').addEventListener('change', renderReading);
      panel.querySelector('#btnNextRead').addEventListener('click', ()=>{
        _readOffset = (_readOffset + 1) % D.readingList.length;
        renderReading();
        toast('已换一组阅读 📖');
      });
    }
    renderReading();
  }

  function renderReading(){
    const grid = $('#readList');
    if(!grid) return;
    const lvlSel = $('#readLevel');
    const level = lvlSel ? lvlSel.value : 'all';
    const panel = grid.closest('[data-cnpanel="read"]');

    let arr = D.readingList.slice();
    if(level !== 'all'){
      arr = arr.filter(r => r.level === level);
    }

    // 每日种子 = yyyymmdd + offset，stable。
    const day = new Date();
    const baseSeed = day.getFullYear()*10000 + (day.getMonth()+1)*100 + day.getDate();
    const seed = baseSeed + _readOffset;
    const picked = [];
    const n = arr.length;
    const order = Array.from({length:n},(_,i)=>i);
    let s = seed;
    for(let i=n-1;i>0;i--){
      s = (s*9301+49297) % 233280;
      const j = Math.floor((s/233280)*(i+1));
      [order[i],order[j]] = [order[j],order[i]];
    }
    const count = arr.length < 5 ? arr.length : 5;
    for(let i=0;i<count;i++) picked.push(arr[order[i]]);

    grid.innerHTML = '';
    if(picked.length === 0){
      grid.innerHTML = '<div class="muted" style="text-align:center;padding:20px">这个层级暂时没有内容 🌸</div>';
      return;
    }
    picked.forEach(r=>{
      const card = document.createElement('div');
      card.className = 'read-card';
      card.innerHTML = `
        <h4>${r.icon||'📖'} ${r.title}<span class="level">${r.level}</span></h4>
        <div class="passage">${r.passage}</div>
        <div class="q">${r.q}</div>
        <details style="margin-top:6px;font-size:13px;color:#3b8aab"><summary style="cursor:pointer">查看答案</summary><div style="margin-top:6px;color:#a04050;font-weight:600">${r.a}</div></details>
        <div class="wc-actions" style="margin-top:8px"><button class="btn-icon-round" data-act="say">🔊 朗读</button></div>
      `;
      card.querySelector('[data-act="say"]').addEventListener('click', ()=> TTS.speakCN(r.passage));
      grid.appendChild(card);
    });

    // 顶部加入 「共 X 篇 · 今日显示 Y」
    let counter = panel && panel.querySelector('.read-counter');
    if(!counter){
      counter = document.createElement('div');
      counter.className = 'read-counter muted';
      counter.style.cssText = 'margin:0 4px 8px;font-size:12px;display:flex;justify-content:space-between;align-items:center';
      panel.insertBefore(counter, grid);
    }
    const today = day.toLocaleDateString('zh-CN', {month:'long', day:'numeric', weekday:'long'});
    counter.innerHTML = `<span>📅 ${today}</span><span>共 ${arr.length} 篇 · 今日 ${picked.length} 篇</span>`;
  }

  // ========== 中文绘本 ==========
  async function renderCnBooks(){
    const grid = $('#cnBookGrid');
    grid.innerHTML = '';
    // 每日 5 本（基于日期）
    const books = D.dailyPick(D.cnBooks, 5, 3);
    books.forEach((b,i)=>{
      const card = document.createElement('div');
      card.className = 'book-card';
      card.innerHTML = `
        <div class="book-cover">
          <span class="badge">绘本</span>
          ${i<2 ? '<span class="new-tag">NEW</span>' : ''}
          ${b.cover}
        </div>
        <div class="book-info">
          <h4>${b.title}</h4>
          <p>${b.desc}</p>
          <div class="actions">
            <button class="btn-mini" data-act="open">📖 打开</button>
          </div>
        </div>
      `;
      card.querySelector('[data-act="open"]').addEventListener('click', ()=> openStorybook(b, 'cn'));
      grid.appendChild(card);
    });
  }

  async function readBook(bookId){
    const set = (await DB.get('read_books', [])) || [];
    if(!set.includes(bookId)){
      set.push(bookId);
      await DB.set('read_books', set);
      const stat = (await DB.get('stat_days', {days:0, words:0, books:0})) || {days:0, words:0, books:0};
      stat.books = (stat.books||0) + 1;
      await DB.set('stat_days', stat);
    }
  }

  function openStorybook(book, lang='cn'){
    const sentences = book.sentences;
    let html = `<h3>${book.title}</h3>`;
    html += `<div style="text-align:center;font-size:80px;margin:8px 0">${book.cover}</div>`;
    html += `<div id="bookPages">`;
    sentences.forEach((s,i)=>{
      html += `<div class="modal-sentence" data-i="${i}">
        <b>第 ${i+1} / ${sentences.length} 页</b>
        <div style="margin-top:8px">${s}</div>
      </div>`;
    });
    html += `</div>`;
    html += `<div class="modal-row">
      <button class="btn-secondary" data-act="prev">◀ 上一页</button>
      <button class="btn-primary" data-act="speak">🔊 朗读本页</button>
      <button class="btn-secondary" data-act="next">下一页 ▶</button>
    </div>`;
    html += `<div class="modal-row" style="margin-top:6px"><button class="btn-secondary" data-act="readall">🎵 全文朗读</button></div>`;
    openModal(html);
    let idx = 0;
    const pages = $$('#bookPages .modal-sentence');
    function show(i){
      pages.forEach((p,j)=> p.style.display = (j===i?'block':'none'));
      idx = i;
    }
    show(0);
    const body = $('#modalBody');
    body.querySelector('[data-act="prev"]').addEventListener('click', ()=> show(Math.max(0, idx-1)));
    body.querySelector('[data-act="next"]').addEventListener('click', ()=> show(Math.min(sentences.length-1, idx+1)));
    body.querySelector('[data-act="speak"]').addEventListener('click', ()=>{
      const fn = lang==='cn' ? TTS.speakCN : TTS.speakEN;
      fn(sentences[idx]);
    });
    body.querySelector('[data-act="readall"]').addEventListener('click', ()=>{
      const fn = lang==='cn' ? TTS.speakCN : TTS.speakEN;
      sentences.reduce((p,s)=> p.then(()=> fn(s)), Promise.resolve());
      readBook(book.title);
    });
  }

  // ============== English：ABC 启蒙 ==============
  function renderABC(){
    const grid = $('#abcGrid');
    D.abcLetters.forEach(L=>{
      const c = document.createElement('div');
      c.className = 'abc-cell';
      c.innerHTML = L.L;
      c.addEventListener('click', ()=>{
        TTS.speakEN(L.L.toLowerCase() + ' - ' + L.w);
      });
      grid.appendChild(c);
    });

    // 跟读
    const rp = $('#rpGrid');
    const sampleWords = D.dailyPick(D.enWords, 6, 4);
    sampleWords.forEach(w=>{
      const card = document.createElement('div');
      card.className = 'rp-card';
      card.innerHTML = `
        <span class="ri">${w.e}</span>
        <div class="rw">${w.w}</div>
        <div class="rm">${w.m}</div>
        <div class="actions">
          <button class="btn-icon-round" data-act="play">🔊</button>
          <button class="btn-icon-round" data-act="rec">🎤</button>
        </div>
        <div class="rec-status" style="font-size:12px;color:#7d7d96;margin-top:4px">🎤 跟读：点麦克风</div>
      `;
      card.querySelector('[data-act="play"]').addEventListener('click', ()=> TTS.speakEN(w.w));
      card.querySelector('[data-act="rec"]').addEventListener('click', ()=>{
        const status = card.querySelector('.rec-status');
        status.textContent = '🎤 正在听...';
        TTS.startRecognition('en-GB', (t)=>{
          status.innerHTML = `🎤 你说：<b>${t}</b><br><small>目标：${w.w}</small>`;
          TTS.speakEN('Great!');
          toast('太棒了！👏');
        }, (e)=>{
          status.textContent = '🎤 跟读：点麦克风';
          toast('没有听到，再试一次');
        });
      });
      rp.appendChild(card);
    });
  }

  // ========== Phonics ==========
  function renderPhonics(){
    const ph = $('#phLetter');
    D.phonicsLetters.forEach(p=>{
      const c = document.createElement('div');
      c.className = 'ph-card';
      c.innerHTML = `
        <div class="ps">${p.s}</div>
        <div class="pw">${p.w}</div>
      `;
      c.addEventListener('click', ()=> TTS.speakEN(p.s));
      ph.appendChild(c);
    });
    const cv = $('#phCvc');
    D.cvcWords.forEach(p=>{
      const c = document.createElement('div');
      c.className = 'ph-card';
      c.innerHTML = `
        <div class="ps" style="font-size:18px">${p.w}</div>
        <div style="font-size:11px;color:#7d7d96;margin:2px 0">${p.s}</div>
        <div class="pw">${p.zh}</div>
      `;
      c.addEventListener('click', ()=> TTS.speakEN(p.s));
      cv.appendChild(c);
    });
    const rl = $('#phRule');
    D.phonicsRules.forEach(p=>{
      const c = document.createElement('div');
      c.className = 'ph-card';
      c.innerHTML = `
        <div class="ps">${p.r}</div>
        <div style="font-size:11px;color:#7d7d96;margin:4px 0">${p.ex}</div>
        <div class="pw" style="font-size:11px">${p.zh}</div>
      `;
      c.addEventListener('click', ()=> TTS.speakEN(p.ex));
      rl.appendChild(c);
    });
  }

  // ========== Phrases ==========
  function renderPhrases(){
    const tabs = $('#phraseTabs');
    const grid = $('#phraseGrid');
    D.phraseCats.forEach((cat,i)=>{
      const btn = document.createElement('button');
      btn.className = 'pt' + (i===0?' active':'');
      btn.textContent = cat.emoji + ' ' + cat.cat;
      btn.addEventListener('click', ()=>{
        $$('.pt').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        grid.innerHTML = '';
        cat.list.forEach(p=>{
          const c = document.createElement('div');
          c.className = 'phrase-card';
          c.innerHTML = `
            <div class="p_en">${p.en}</div>
            <div class="p_zh">${p.zh}</div>
            <div class="p_ex">📌 ${p.ex}</div>
            <div class="p_ex_zh">${p.zh_ex}</div>
            <div class="actions">
              <button class="btn-icon-round" data-act="say">🔊 英音</button>
              <button class="btn-icon-round" data-act="slow">🐢 慢读</button>
            </div>
          `;
          c.querySelector('[data-act="say"]').addEventListener('click', ()=> TTS.speakEN(p.ex));
          c.querySelector('[data-act="slow"]').addEventListener('click', ()=> TTS.speakEN(p.ex, {rate:0.6}));
          grid.appendChild(c);
        });
      });
      tabs.appendChild(btn);
    });
    // 默认选中
    tabs.querySelector('.pt').click();
  }

  // ========== Grammar ==========
  function renderGrammar(){
    const wrap = $('#grammarList');
    D.grammarTopics.forEach(g=>{
      const c = document.createElement('div');
      c.className = 'g-card';
      let html = `<h4>${g.title}</h4><p style="font-size:13px;color:#7d7d96">${g.intro}</p>`;
      if(g.content){
        g.content.forEach(it=>{
          html += `<div class="g-row"><b>${it.rule}</b>${it.ex}<br><small style="color:#7d7d96">${it.zh||''}</small></div>`;
        });
      }
      if(g.pairs){
        html += `<div class="g-table">`;
        g.pairs.forEach(p=>{
          html += `<div><b>${p.a}</b> <small>(${p.b})</small> — ${p.ex}<br><span style="color:#7d7d96;font-size:12px">${p.zh_ex}</span></div>`;
        });
        html += `</div>`;
      }
      html += `<div class="modal-row" style="margin-top:10px"><button class="btn-mini" data-act="speak">🔊 朗读标题</button></div>`;
      c.innerHTML = html;
      c.querySelector('[data-act="speak"]').addEventListener('click', ()=> TTS.speakEN(g.title));
      wrap.appendChild(c);
    });
  }

  // ========== G1 必学词 ==========
  function renderG1(){
    const grid = $('#g1Grid');
    D.g1Words.forEach(w=>{
      const c = document.createElement('div');
      c.className = 'g1-card';
      c.innerHTML = `<div class="gw">${w}</div>`;
      c.addEventListener('click', ()=> TTS.speakEN(w));
      grid.appendChild(c);
    });
  }

  // ========== EN Storybooks ==========
  function renderEnBooks(){
    const grid = $('#enBookGrid');
    grid.innerHTML = '';
    const books = D.dailyPick(D.enBooks, 5, 5);
    books.forEach((b,i)=>{
      const card = document.createElement('div');
      card.className = 'book-card';
      card.innerHTML = `
        <div class="book-cover">
          <span class="badge">Story</span>
          ${i<2 ? '<span class="new-tag">NEW</span>' : ''}
          ${b.cover}
        </div>
        <div class="book-info">
          <h4>${b.title}</h4>
          <p>${b.desc}</p>
          <div class="actions">
            <button class="btn-mini" data-act="open">📖 Read</button>
          </div>
        </div>
      `;
      card.querySelector('[data-act="open"]').addEventListener('click', ()=> openStorybook(b, 'en'));
      grid.appendChild(card);
    });
  }

  // ============== 模态框 ==============
  function openModal(html){
    $('#modalBody').innerHTML = html;
    $('#modal').hidden = false;
  }
  function closeModal(){ $('#modal').hidden = true; $('#modalBody').innerHTML = ''; }
  function bindModal(){
    $('#modalClose').addEventListener('click', closeModal);
    $('#modal .modal-mask').addEventListener('click', closeModal);
  }

  // ============== 全局 toast ==============
  function toast(msg){
    const el = $('#toast');
    if(!el) return;
    el.textContent = msg;
    el.classList.add('show');
    clearTimeout(window.__toastT);
    window.__toastT = setTimeout(()=> el.classList.remove('show'), 2000);
  }

  // ============== 初始化 ==============
  async function init(){
    startSnow();
    bindTabs();
    bindSubTabs();
    bindModal();
    bindHome();
    bindDaily();
    bindChars();
    bindVocab();
    bindIdioms();
    bindFun();
    bindReading();
    renderCnBooks();
    renderABC();
    renderPhonics();
    renderPhrases();
    renderGrammar();
    renderG1();
    renderEnBooks();

    // 尊重 URL 参数
    try{
      const params = new URLSearchParams(location.search);
      const p = params.get('p') || params.get('page');
      if(p){
        $$('.tab').forEach(b=>b.classList.toggle('active', b.dataset.page===p));
        $$('.page').forEach(pg=>pg.classList.toggle('active', pg.dataset.page===p));
      }
      const et = params.get('etab');
      if(et){
        $$('.sub[data-entab]').forEach(b=>b.classList.toggle('active', b.dataset.entab===et));
        $$('.en-panel').forEach(pg=>pg.classList.toggle('active', pg.dataset.enpanel===et));
      }
      const ct = params.get('ctab');
      if(ct){
        $$('.sub[data-cntab]').forEach(b=>b.classList.toggle('active', b.dataset.cntab===ct));
        $$('.cn-panel').forEach(pg=>pg.classList.toggle('active', pg.dataset.cnpanel===ct));
      }
    }catch(e){}

    try{
      await renderHome();
    }catch(e){ console.error('[HY] renderHome error', e); }
    try{
      await renderDailyWords();
    }catch(e){ console.error('[HY] renderDailyWords error', e); }
  }

  // 立即同步调用 — 让首屏不依赖 init async 状态
  renderHomeSync();
  renderDailyWordsSync();

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
