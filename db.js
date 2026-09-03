/* =====================================================
   IndexedDB 本地存储
   无后端、无广告、无依赖
   ===================================================== */
(function(){
  const DB_NAME = 'hao_yan_learn_db';
  const DB_VER = 1;
  let _db = null;

  function open(){
    return new Promise((resolve, reject)=>{
      if(_db) return resolve(_db);
      const req = indexedDB.open(DB_NAME, DB_VER);
      req.onerror = ()=> reject(req.error);
      req.onupgradeneeded = ()=>{
        const db = req.result;
        if(!db.objectStoreNames.contains('kv')) db.createObjectStore('kv');
      };
      req.onsuccess = ()=>{ _db = req.result; resolve(_db); };
    });
  }

  async function set(key, value){
    const db = await open();
    return new Promise((resolve, reject)=>{
      const tx = db.transaction('kv','readwrite');
      tx.objectStore('kv').put(value, key);
      tx.oncomplete = ()=> resolve();
      tx.onerror = ()=> reject(tx.error);
    });
  }
  async function get(key, fallback=null){
    const db = await open();
    return new Promise((resolve, reject)=>{
      const tx = db.transaction('kv','readonly');
      const req = tx.objectStore('kv').get(key);
      req.onsuccess = ()=> resolve(req.result === undefined ? fallback : req.result);
      req.onerror = ()=> reject(req.error);
    });
  }
  async function remove(key){
    const db = await open();
    return new Promise((resolve, reject)=>{
      const tx = db.transaction('kv','readwrite');
      tx.objectStore('kv').delete(key);
      tx.oncomplete = ()=> resolve();
      tx.onerror = ()=> reject(tx.error);
    });
  }
  async function all(){
    const db = await open();
    return new Promise((resolve, reject)=>{
      const tx = db.transaction('kv','readonly');
      const req = tx.objectStore('kv').getAllKeys();
      const req2 = tx.objectStore('kv').getAll();
      let keys, vals;
      req.onsuccess = ()=> keys = req.result;
      req2.onsuccess = ()=>{
        vals = req2.result;
        const o = {};
        keys.forEach((k,i)=> o[k] = vals[i]);
        resolve(o);
      };
      tx.onerror = ()=> reject(tx.error);
    });
  }
  async function clear(){
    const db = await open();
    return new Promise((resolve, reject)=>{
      const tx = db.transaction('kv','readwrite');
      tx.objectStore('kv').clear();
      tx.oncomplete = ()=> resolve();
      tx.onerror = ()=> reject(tx.error);
    });
  }

  window.HY_DB = { set, get, remove, all, clear };
})();
