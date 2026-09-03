/* =====================================================
   语音合成 (TTS)
   - 默认使用 Web Speech API
   - 中文 zh-CN；英文 en-GB（英式英语）
   ===================================================== */
(function(){
  const synth = window.speechSynthesis;
  let voicesReady = false;
  let voices = [];

  function loadVoices(){
    return new Promise((resolve)=>{
      const v = synth.getVoices();
      if(v && v.length){
        voices = v; voicesReady = true; resolve(v);
        return;
      }
      const onVoices = ()=>{
        const vv = synth.getVoices();
        if(vv && vv.length){
          voices = vv; voicesReady = true; resolve(vv);
          synth.removeEventListener('voiceschanged', onVoices);
        }
      };
      synth.addEventListener('voiceschanged', onVoices);
      // 兜底：3 秒后强制返回
      setTimeout(()=>{
        const vv = synth.getVoices() || [];
        voices = vv; voicesReady = true; resolve(vv);
      }, 3000);
    });
  }

  function pickVoice(lang){
    if(!voices.length) return null;
    const target = lang.startsWith('zh') ? /^zh/i : /^en-GB/i;
    // 优先匹配
    let v = voices.find(x => x.lang === lang);
    if(v) return v;
    if(target.test(lang)===false || /zh/i.test(lang)){
      v = voices.find(x => /^zh-CN/i.test(x.lang));
    } else {
      v = voices.find(x => /^en-GB/i.test(x.lang));
    }
    if(v) return v;
    // 兼容兜底
    if(/^zh/i.test(lang)) v = voices.find(x => /^zh/i.test(x.lang));
    if(/^en/i.test(lang)) v = voices.find(x => /^en/i.test(x.lang));
    return v || voices[0];
  }

  let _current = null;
  let _queue = Promise.resolve();

  function speak(text, lang='zh-CN', opts={}){
    if(!text) return Promise.resolve();
    // 串行化
    _queue = _queue.then(()=> new Promise(async (resolve)=>{
      try {
        if(!voicesReady) await loadVoices();
        if(_current){ try{synth.cancel();}catch(e){} }
        const u = new SpeechSynthesisUtterance(text);
        u.lang = lang;
        u.rate = opts.rate || (lang.startsWith('zh')?0.85:0.9);
        u.pitch = opts.pitch || 1.05;
        u.volume = 1;
        const v = pickVoice(lang);
        if(v) u.voice = v;
        u.onend = ()=>{ _current = null; resolve(); };
        u.onerror = ()=>{ _current = null; resolve(); };
        _current = u;
        synth.speak(u);
      } catch(e){ resolve(); }
    }));
    return _queue;
  }

  function stop(){
    try{ synth.cancel(); }catch(e){}
    _current = null;
  }

  // 跟读：调用 Web Speech Recognition（如不支持则提示）
  let _recognition = null;
  function startRecognition(lang='en-GB', onResult, onError){
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if(!SR){
      toast('当前浏览器不支持语音识别，建议使用 Chrome / Edge / Safari 14+');
      onError && onError(new Error('unsupported'));
      return null;
    }
    try{
      stop();
      const r = new SR();
      r.lang = lang;
      r.interimResults = false;
      r.maxAlternatives = 1;
      r.onresult = (e)=>{
        const t = e.results[0][0].transcript;
        onResult && onResult(t);
      };
      r.onerror = (e)=> onError && onError(e);
      r.onend = ()=>{};
      r.start();
      _recognition = r;
      return r;
    }catch(e){
      onError && onError(e);
      return null;
    }
  }

  function stopRecognition(){
    try{ _recognition && _recognition.stop(); }catch(e){}
    _recognition = null;
  }

  window.HY_TTS = {
    speakCN: (t, opts)=> speak(t, 'zh-CN', opts),
    speakEN: (t, opts)=> speak(t, 'en-GB', opts),
    stop,
    startRecognition,
    stopRecognition
  };
})();

// 全局 toast 助手（在 app.js 里也有同名函数，本模块早于 app 加载）
function toast(msg){
  const el = document.getElementById('toast');
  if(!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(window.__toastT);
  window.__toastT = setTimeout(()=> el.classList.remove('show'), 2200);
}
