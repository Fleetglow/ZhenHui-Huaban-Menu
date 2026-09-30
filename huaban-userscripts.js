// ==UserScript==
// @name         花瓣网 - 原生右键+原图下载+商用标签
// @namespace    https://huaban.com/
// @version      1.0.5
// @description  ① 恢复原生右键菜单（可设置中开关）② 商用素材自动标记（红描边，可设置中开关）③ 卡片「更多」左侧新增 下载/复制 按钮 ④ 详情页主图右下角新增 下载/复制 按钮（兼容 #pin_detail 与 .BcRurZFt 及弹窗式详情，容器类名变动不再失效）⑤ 右侧「商用素材」区域缩略图右下角新增 下载/复制 按钮（覆盖全部 tab）⑥ 图片模块（如推荐画板）封面右下角新增 下载/复制 按钮
// @author       liteyais
// @match        *://huaban.com/*
// @match        *://*.huaban.com/*
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48bWFzayBpZD0iYiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIyIiB4PSI1IiB5PSIxMiIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgc3R5bGU9Im1hc2stdHlwZTpsdW1pbmFuY2UiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNC43MjUgMTIuOTY4SDV2MjAuMzZoMTkuNzI1eiIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2IpIj48cGF0aCBmaWxsPSJ1cmwoI2MpIiBmaWxsLW9wYWNpdHk9Ii42OCIgZD0iTTUuMDc2IDE3Ljk0MWMwIDcuNzk1IDYuMzI3IDE0LjExNSAxNC4xMyAxNC4xMTVoNC45OHYtNC45NzNjMC03Ljc5NS02LjMyOC0xNC4xMTUtMTQuMTMtMTQuMTE1aC00Ljk4eiIvPjxwYXRoIGZpbGw9InVybCgjZCkiIGQ9Ik0xMy4yMSAyNy44OGM2LjA1NSAwIDEwLjk2NS01LjAzIDEwLjk2NS0xMS4wNjJ2LTMuODVIMjAuMzFjLTYuMDU1IDAtMTEuMDU1IDQuODkyLTExLjA1NSAxMC45MjR2My45ODl6Ii8+PC9nPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik03LjA5NiA5LjkxNGEuOTM3LjkzNyAwIDAgMCAuNjg5IDEuMzU2YzMuNzk1LjU4MyA5LjgyMSAxLjM2MyAxMS4wOC45NTIuNjE4LS4yMDMgMS43NDMtLjQ3NiAyLjk0Mi0uNjdhMjMgMjMgMCAwIDEtLjI3NC0yLjAwNGMtMi4xMDIuMTctMTAuMjM0LS44NC0xNC4wMzctMS4zNjUtLjEzMS44MzctLjI2NyAxLjQ3LS40IDEuNzMiLz48cGF0aCBmaWxsPSIjRkYyQjJCIiBkPSJNMjEuOTk1IDMuMjU0Yy4xODMtLjQ5My4wNy0xLjA3Ny0uMzkyLTEuMzI2QzE5LjA5MS41NzYgMTQuMDAxLS43NTIgOC45NDIuNTAyYS45Ny45NyAwIDAgMC0uNzIyLjg3MWMtLjE1NSAxLjk4NS0uNDI3IDQuOTE2LS43MjQgNi44MSAzLjgwMy41MjYgMTEuOTM1IDEuNTM1IDE0LjAzNyAxLjM2NS0uMTg3LTEuOTgtLjE5Ni00LjUyLjQ2Mi02LjI5NE03LjA5NiA5LjkxNGMtMS4xNzctLjM4NS0zLjc2Ni0uOTIzLTQuNzA4IDAtMS4xNzcgMS4xNTQuNTg5IDIuODg1IDEuNzY1IDMuNDYxIDEuMS41NCAxMC4wODMgMS40OSAxNy45NzguNjcgMS4wNi0uMTEgMi4xMzQuMTIzIDMuMDI2LjcwNi4yNC4xNTYuNTQuMTkuODAzLjA4IDEuMDIzLS40MjkgMi40NDQtMS4xOTUgMS45MzItMi42MS0uNjI3LTEuNzMtMy44Ni0xLjAzLTYuMDg1LS42Ny0xLjItLjE5NS0yLjMyNC40NjgtMi45NDIuNjctMS4yNTkuNDEyLTcuMjg1LS4zNjgtMTEuMDgtLjk1MWEuOTM3LjkzNyAwIDAgMS0uNjktMS4zNTYiLz48L2c+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJjIiB4MT0iMjAuMDEzIiB4Mj0iOS4xNTYiIHkxPSIxNy4wOTYiIHkyPSIyNy45MzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkYyODRCIiBzdG9wLW9wYWNpdHk9Ii43NiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGMjg0QiIgc3RvcC1vcGFjaXR5PSIuMjQiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9IjI0LjE4NSIgeDI9IjkuNDIyIiB5MT0iMTIuOTY4IiB5Mj0iMjcuNjQ5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGMjg0QiIgc3RvcC1vcGFjaXR5PSIuODQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjI4NEIiIHN0b3Atb3BhY2l0eT0iLjE2Ii8+PC9saW5lYXJHcmFkaWVudD48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMzJ2MzJIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=
// @license      MIT
// @homepageURL  https://github.com/liteyais/huaban-userscripts
// @supportURL   https://github.com/liteyais/huaban-userscripts/issues
// @downloadURL  https://raw.githubusercontent.com/liteyais/huaban-userscripts/main/huaban-userscripts.js
// @updateURL    https://raw.githubusercontent.com/liteyais/huaban-userscripts/main/huaban-userscripts.js
// @run-at       document-start
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function () {
  'use strict';

  /* =====================================================================
   * 模块〇：设置存储（localStorage，键名前缀 hb_ 防冲突）
   * ===================================================================== */
  const PREF_KEY_NATIVE_MENU = 'hb_native_menu_enabled';
  const PREF_KEY_FRAME = 'hb_commercial_frame_enabled';   // 商用图片红框提示开关（默认开启）
  function getPref(key, def) {
    try { const v = localStorage.getItem(key); return v === null ? def : v !== '0'; }
    catch (e) { return def; }
  }
  function setPref(key, val) {
    try { localStorage.setItem(key, val ? '1' : '0'); } catch (e) {}
  }

  /* =====================================================================
   * 模块一：恢复浏览器原生右键菜单（默认开启，设置中可实时切换）
   * ===================================================================== */
  // 花瓣网自定义右键菜单的浮层容器选择器（实测主选择器：.SgM84kuw，z-index 1200）
  const MENU_SELECTORS = [
    '.SgM84kuw',
    '[class*="context-menu"]',
    '[class*="ContextMenu"]',
    '[class*="contextmenu"]'
  ];
  const MENU_QUERY = MENU_SELECTORS.join(',');

  let nativeObserver = null;
  const hiddenMenus = new Set();

  // 立即隐藏花瓣网自带右键菜单容器。菜单元素默认已在 DOM 中，
  // 站点通过切换其 display 弹出，因此这里用 !important 强制 display:none。
  // 同时记录被隐藏的节点，便于关闭本功能时恢复。
  function hideSiteMenu() {
    const nodes = document.querySelectorAll(MENU_QUERY);
    for (let i = 0; i < nodes.length; i++) {
      const el = nodes[i];
      if (el.style.getPropertyValue('display') !== 'none') {
        el.style.setProperty('display', 'none', 'important');
        hiddenMenus.add(el);
      }
    }
  }
  function restoreSiteMenus() {
    hiddenMenus.forEach(function (el) { if (el && el.style) el.style.removeProperty('display'); });
    hiddenMenus.clear();
  }

  function isRightClick(e) { return e.button === 2; }
  // 捕获阶段拦截右键按下 / contextmenu：切断站点自身监听器，
  // 但**不**调用 preventDefault → 浏览器/系统的原生右键菜单照常弹出；
  // 同时顺手隐藏站点菜单，避免闪烁。
  function onRightPointerCapture(e) {
    if (!isRightClick(e)) return;
    hideSiteMenu();
    e.stopImmediatePropagation();
    e.stopPropagation();
  }
  function onContextMenuCapture(e) {
    hideSiteMenu();
    e.stopImmediatePropagation();
    e.stopPropagation();
  }

  const CAP_OPTS = { capture: true, passive: false };
  const RT_LISTENERS = [
    [window, 'pointerdown', onRightPointerCapture],
    [window, 'mousedown', onRightPointerCapture],
    [window, 'auxclick', onRightPointerCapture],
    [window, 'contextmenu', onContextMenuCapture],
    [document, 'pointerdown', onRightPointerCapture],
    [document, 'mousedown', onRightPointerCapture],
    [document, 'contextmenu', onContextMenuCapture]
  ];

  // 兜底：无论站点以何种方式让菜单出现，只要其节点被插入或样式被修改，立即再次隐藏
  function startNativeObserver() {
    try {
      nativeObserver = new MutationObserver(hideSiteMenu);
      nativeObserver.observe(document.documentElement || document, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ['style', 'class']
      });
      hideSiteMenu();
    } catch (e) { /* 早期文档阶段可能尚未就绪，捕获阶段拦截仍然生效 */ }
  }

  function enableNativeMenu() {
    disableNativeMenu();   // 先清一遍，保证幂等（不重复挂监听）
    RT_LISTENERS.forEach(function (l) { l[0].addEventListener(l[1], l[2], CAP_OPTS); });
    startNativeObserver();
  }
  function disableNativeMenu() {
    RT_LISTENERS.forEach(function (l) { l[0].removeEventListener(l[1], l[2], CAP_OPTS); });
    if (nativeObserver) { try { nativeObserver.disconnect(); } catch (e) {} nativeObserver = null; }
    restoreSiteMenus();
  }
  function syncNativeMenu() {
    if (getPref(PREF_KEY_NATIVE_MENU, true)) enableNativeMenu(); else disableNativeMenu();
  }

  /* =====================================================================
   * 模块二：商用素材红框标记（原缩略图工具的红框逻辑已迁移至此，配色已更新）
   * ===================================================================== */
  const NAME = '__huabanThumbTools__';
  const DL_CLASS = 'hb-dl-btn';
  const LAYER_CLASS = 'hb-dl-layer';
  const FRAME_CLASS = 'hb-commercial-frame';
  const STYLE_ID = 'hb-thumb-tools-style';
  const CM_ATTR = 'data-hb-commercial';
  const REL_ATTR = 'data-hb-rel';

  const CONFIG = {
    // 1) 列表/瀑布流卡片：卡片内出现该文本即判定商用（花瓣网商用卡片徽标形如“版权素材 EPS/PNG/AI/JPG”）
    cardTextPatterns: ['版权素材'],
    // 2) 区块标题：命中后，该区块内的小缩略图视为商用（如详情页“商用素材 - 相似内容”）
    sectionTextPatterns: ['商用素材'],
    // 3) 详情页主图：主图所属卡片出现该授权标识即判定商用
    detailCommercialRegex: /商用无忧|官方自营|已获得[^。;]{0,40}授权|需替换字体/,

    // —— 商用标记外观：纯红描边 ——
    borderColor: 'rgba(255,0,0,1)',        // 红框描边（亮红、不透明）
    borderWidth: '3px',
    cornerRadius: '12px',                  // 红框圆角

    // —— 下载按钮 ——
    dlText: '下载',
    dlBg: '#00A92D',                       // 下载按钮底色
    dlBorder: '1px solid #00D839',         // 下载按钮描边
    dlRadius: '200px',                     // 下载按钮圆角（胶囊形）
    dlHoverBg: '#008E24',                  // 下载按钮悬停底色（加深）

    // —— 下载按钮尺寸 ——
    btnW: '56px',               // 按钮宽度
    btnH: '28px',               // 按钮高度
    // 兜底派生尺寸（仅在原始 master 取不到时才用）：这些是 CDN 二次编码的 webp，可能更大且更糊
    sizeOrder: ['_fw1200webp', '_fw960webp', '_fw480webp', '_fw240webp'],

    // —— 详情页主图容器选择器（点击后展示详情大图的那张图，位于其内）——
    // 花瓣网类名会变动：#pin_detail 为旧版，.BcRurZFt 为当前详情左列大图容器；
    // 任一命中即取其内面积最大的达标图，全部未命中时再走布局兜底。
    detailRootSelectors: ['#pin_detail', '.BcRurZFt'],

    rescanDelay: 300
  };

  const stats = { commercial: 0 };

  function initThumbTools() {
    // 幂等：清理旧实例（含更早版本的残留）
    if (window[NAME] && window[NAME].dispose) { try { window[NAME].dispose(); } catch (e) {} }
    try {
      if (window.__huabanCommercialMask__ && window.__huabanCommercialMask__.dispose) { try { window.__huabanCommercialMask__.dispose(); } catch (e) {} }
      document.querySelectorAll('.hb-commercial-mask').forEach(function (n) { n.remove(); });
      document.querySelectorAll('[data-hb-commercial-mask]').forEach(function (n) { n.removeAttribute('data-hb-commercial-mask'); });
    } catch (e) {}

    /* ---------------- 样式 ---------------- */
    function injectStyle() {
      const old = document.getElementById(STYLE_ID); if (old) old.remove();
      const css = [
        // 商用：纯红描边
        '.' + FRAME_CLASS + '{position:absolute;inset:0;z-index:9998;pointer-events:none;',
        'border-radius:' + CONFIG.cornerRadius + ';',
        'box-shadow:inset 0 0 0 ' + CONFIG.borderWidth + ' ' + CONFIG.borderColor + ';}',
        // 提示条
        '.hb-toast{position:fixed;left:50%;bottom:40px;transform:translateX(-50%);z-index:2147483647;',
        'background:rgba(0,0,0,.84);color:#fff;font-size:13px;padding:8px 14px;border-radius:8px;',
        'font-family:system-ui,-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;pointer-events:none;}'
      ].join('');
      const s = document.createElement('style'); s.id = STYLE_ID; s.textContent = css;
      (document.head || document.documentElement).appendChild(s);
    }
    injectStyle();


    let toastTimer = null;
    function toast(msg) {
      let t = document.querySelector('.hb-toast');
      if (!t) { t = document.createElement('div'); t.className = 'hb-toast'; document.body.appendChild(t); }
      t.textContent = msg;
      if (toastTimer) clearTimeout(toastTimer);
      toastTimer = setTimeout(function () { t.remove(); }, 2200);
    }

    /* ------------- 下载：最大最清晰缩略图 ------------- */
    function urlCandidates(src) {
      const qi = src.indexOf('?');
      const path = qi >= 0 ? src.slice(0, qi) : src;
      const query = qi >= 0 ? src.slice(qi) : '';
      const base = path.replace(/_(?:fw|sq)\d+(?:webp|jpg|jpeg|png)?$/i, '');
      const list = [];
      // 1) 首选原始 master（无尺寸后缀）：与详情页大图“右键 → 存储为”完全一致，最清晰、无二次压缩
      list.push(base + query);
      // 2) 原始取不到时，再依次退回各派生尺寸（CDN 二次编码，体积可能更大且更糊）
      CONFIG.sizeOrder.forEach(function (s) { list.push(base + s + query); });
      return list;
    }
    function idOf(img) {
      const a = img.closest && img.closest('a[href*="/pins/"]');
      let m = a && (a.getAttribute('href') || '').match(/pins\/(\d+)/);
      if (!m) m = (location.pathname || '').match(/pins\/(\d+)/);   // 详情页主图：用当前页 pin id
      return m ? m[1] : String(Date.now());
    }
    async function fetchBestBlob(img) {
      const src = (img && (img.currentSrc || img.src)) || '';
      if (!src) return null;
      const cands = urlCandidates(src);
      for (let i = 0; i < cands.length; i++) {
        try { const r = await fetch(cands[i], { mode: 'cors' }); if (r.ok) { const b = await r.blob(); if (b && b.size) return { blob: b, url: cands[i] }; } }
        catch (e) { /* 试下一个尺寸 */ }
      }
      return null;
    }
    async function download(img) {
      const src = img.currentSrc || img.src || '';
      if (!src) { toast('未找到图片地址'); return { ok: false }; }
      toast('下载中…');
      const hit = await fetchBestBlob(img);
      const blob = hit && hit.blob;
      if (!blob) { toast('下载失败（跨域或尺寸不可用）'); return { ok: false }; }
      const ext = ((blob.type.split('/')[1] || 'webp') + '').replace('jpeg', 'jpg');
      const id = idOf(img);
      const href = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = href; link.download = 'huaban_' + id + '.' + ext;
      document.body.appendChild(link); link.click(); link.remove();
      setTimeout(function () { URL.revokeObjectURL(href); }, 15000);
      const kb = blob.size / 1024;
      const sizeStr = kb >= 1024 ? (kb / 1024).toFixed(1) + 'M' : Math.round(kb) + 'KB';
      toast('已下载 ' + link.download + ' (' + sizeStr + ')');
      return { ok: true, name: link.download, size: blob.size };
    }

    /* ------------- 商用标记（纯红描边） ------------- */
    function ensureWrap(el) {
      if (getComputedStyle(el).position === 'static') { el.style.position = 'relative'; el.setAttribute(REL_ATTR, '1'); }
    }
    function markCommercial(img) {
      if (!img || img.nodeType !== 1) return;
      const wrapper = img.closest('a[href*="/pins/"]') || img.closest('a') || img.parentElement;
      if (!wrapper) return;
      if (wrapper.getAttribute(CM_ATTR) === '1') return;
      ensureWrap(wrapper);
      const frame = document.createElement('div'); frame.className = FRAME_CLASS;
      wrapper.appendChild(frame);
      wrapper.setAttribute(CM_ATTR, '1');
      stats.commercial++;
    }
    function isLeafMatch(el, patterns) {
      if (!el || el.children.length) return false;
      const t = (el.textContent || '').trim();
      if (!t || t.length > 20) return false;
      for (let i = 0; i < patterns.length; i++) { if (t.indexOf(patterns[i]) !== -1) return true; }
      return false;
    }
    function scanCommercialCards() {
      const all = document.querySelectorAll('*');
      for (let i = 0; i < all.length; i++) {
        if (!isLeafMatch(all[i], CONFIG.cardTextPatterns)) continue;
        let anc = all[i], guard = 0;
        while (anc && anc !== document.body && !(anc.querySelector && anc.querySelector('img')) && guard < 20) { anc = anc.parentElement; guard++; }
        if (!anc || !anc.querySelector) continue;
        markCommercial(anc.querySelector('img'));
      }
    }
    function scanCommercialDetail() {
      const imgs = document.querySelectorAll('img');
      let main = null, area = 0;
      for (let i = 0; i < imgs.length; i++) {
        const r = imgs[i].getBoundingClientRect();
        if (r.width >= 400 && r.height >= 300) { const a = r.width * r.height; if (a > area) { area = a; main = imgs[i]; } }
      }
      if (!main) return;
      let p = main, guard = 0, matched = false;
      while (p && p !== document.body && guard < 12) {
        p = p.parentElement;
        if (!p || p === document.body) break;
        if (CONFIG.detailCommercialRegex.test(p.textContent || '')) { matched = true; break; }
        guard++;
      }
      if (matched) markCommercial(main);
    }
    function scanCommercialSections() {
      const all = document.querySelectorAll('*');
      for (let i = 0; i < all.length; i++) {
        if (!isLeafMatch(all[i], CONFIG.sectionTextPatterns)) continue;
        let block = all[i], guard = 0;
        while (block && block !== document.body && guard < 8) {
          if (block.querySelectorAll && block.querySelectorAll('img').length >= 3) break;
          block = block.parentElement; guard++;
        }
        if (!block || !block.querySelectorAll) continue;
        const imgs = block.querySelectorAll('img');
        for (let j = 0; j < imgs.length; j++) {
          const r = imgs[j].getBoundingClientRect();
          if (r.width >= 40 && r.width < 400) markCommercial(imgs[j]);
        }
      }
    }
    /* ------------- 红框开关（设置弹框中实时切换） ------------- */
    let frameEnabled = getPref(PREF_KEY_FRAME, true);   // 默认开启
    function scan() {
      if (!frameEnabled) return;
      scanCommercialCards(); scanCommercialDetail(); scanCommercialSections();
    }
    function setCommercialFrame(on) {
      frameEnabled = !!on;
      if (frameEnabled) {
        scan();   // 重新开启：立即重扫并补画红框
      } else {
        // 关闭：移除所有已画红框与标记
        document.querySelectorAll('.' + FRAME_CLASS).forEach(function (b) { b.remove(); });
        document.querySelectorAll('[' + CM_ATTR + ']').forEach(function (w) { w.removeAttribute(CM_ATTR); });
      }
    }

    /* ------------- 动态内容重扫 ------------- */
    let timer = null;
    const observer = new MutationObserver(function () {
      if (timer) return;
      timer = setTimeout(function () { timer = null; scan(); }, CONFIG.rescanDelay);
    });
    observer.observe(document.documentElement || document, { childList: true, subtree: true });
    scan();

    /* ------------- 清理（仅本模块） ------------- */
    function disposeThumbTools() {
      observer.disconnect();
      if (timer) { clearTimeout(timer); timer = null; }
      document.querySelectorAll('.' + FRAME_CLASS).forEach(function (b) { b.remove(); });
      document.querySelectorAll('[' + CM_ATTR + ']').forEach(function (w) { w.removeAttribute(CM_ATTR); });
      document.querySelectorAll('[' + REL_ATTR + '="1"]').forEach(function (w) { w.style.position = ''; w.removeAttribute(REL_ATTR); });
      const st = document.getElementById(STYLE_ID); if (st) st.remove();
      const tt = document.querySelector('.hb-toast'); if (tt) tt.remove();
    }
    window[NAME] = {
      dispose: disposeThumbTools,
      scan: scan,
      download: download,
      fetchBestBlob: fetchBestBlob,
      urlCandidates: urlCandidates,
      toast: toast,
      setCommercialFrame: setCommercialFrame,
      config: CONFIG
    };
  }

  /* =====================================================================
   * 模块四：卡片操作按钮（下载 / 复制），插入到每个「更多」按钮的左侧
   * 视觉与「更多」按钮一致：28x28 圆形、悬停浅灰底、图标变深
   * ===================================================================== */
  const CARD_ACTIONS_CLASS = 'hb-card-actions';
  const CARD_BTN_CLASS = 'hb-card-btn';
  const CARD_ACTIONS_STYLE_ID = 'hb-card-actions-style';
  const CARD_ACTIONS_ATTR = 'data-hb-card-actions';

  function initCardActions() {
    if (window.__huabanCardActions__ && window.__huabanCardActions__.dispose) {
      try { window.__huabanCardActions__.dispose(); } catch (e) {}
    }

    function ensureStyle() {
      if (document.getElementById(CARD_ACTIONS_STYLE_ID)) return;
      const css = [
        '.' + CARD_ACTIONS_CLASS + '{display:flex;align-items:center;gap:0;margin-left:auto;flex:none;}',
        '.' + CARD_BTN_CLASS + '{position:relative;width:28px;height:28px;border-radius:99px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .15s ease;}',
        '.' + CARD_BTN_CLASS + ' .hb-card-icon{font-size:18px;line-height:1;display:flex;align-items:center;justify-content:center;color:#7f8792;transition:color .15s ease;}',
        '.' + CARD_BTN_CLASS + ' .hb-card-icon svg{width:1em;height:1em;fill:currentColor;overflow:hidden;display:block;}',
        '.' + CARD_BTN_CLASS + ':hover{background:rgba(0,0,0,.04);}',
        '.' + CARD_BTN_CLASS + ':hover .hb-card-icon{color:#222529;}',
        '.' + CARD_BTN_CLASS + ':active .hb-card-icon{color:#222529;}'
      ].join('');
      const s = document.createElement('style'); s.id = CARD_ACTIONS_STYLE_ID; s.textContent = css;
      (document.head || document.documentElement).appendChild(s);
    }

    const SVGNS = 'http://www.w3.org/2000/svg';
    const XLINK = 'http://www.w3.org/1999/xlink';
    function makeIcon(symbolId) {
      const svg = document.createElementNS(SVGNS, 'svg');
      svg.setAttribute('viewBox', '0 0 1024 1024');
      const use = document.createElementNS(SVGNS, 'use');
      use.setAttribute('href', '#' + symbolId);
      try { use.setAttributeNS(XLINK, 'xlink:href', '#' + symbolId); } catch (e) {}
      svg.appendChild(use);
      return svg;
    }
    function makeBtn(kind, title, symbolId) {
      const b = document.createElement('div');
      b.className = CARD_BTN_CLASS;
      b.setAttribute('role', 'button');
      b.setAttribute('tabindex', '0');
      b.setAttribute('title', title);
      b.setAttribute('aria-label', title);
      const icon = document.createElement('span');
      icon.className = 'hb-card-icon';
      icon.appendChild(makeIcon(symbolId));
      b.appendChild(icon);
      b.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); onAction(kind, b); }, true);
      b.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); onAction(kind, b); } }, true);
      return b;
    }

    // 从按钮向上寻找卡片的主图（面积最大且尺寸达标的 img）
    function findCardImage(el) {
      let node = el, depth = 0;
      while (node && node !== document.body && depth < 12) {
        if (node.querySelectorAll) {
          const imgs = node.querySelectorAll('img');
          let best = null, ba = 0;
          for (let i = 0; i < imgs.length; i++) {
            const im = imgs[i], r = im.getBoundingClientRect();
            if (r.width < 100 || r.height < 60) continue;
            const a = r.width * r.height;
            if (a > ba) { ba = a; best = im; }
          }
          if (best) return best;
        }
        node = node.parentElement; depth++;
      }
      return null;
    }

    function toast(msg) {
      const t = window[NAME];
      if (t && typeof t.toast === 'function') t.toast(msg);
    }

    async function toPngBlob(blob) {
      if (blob.type === 'image/png') return blob;
      const bmp = await createImageBitmap(blob);
      const c = document.createElement('canvas');
      c.width = bmp.width; c.height = bmp.height;
      c.getContext('2d').drawImage(bmp, 0, 0);
      const out = await new Promise(function (res) { c.toBlob(res, 'image/png'); });
      if (!out) throw new Error('PNG 编码失败');
      return out;
    }

    function copyImage(img) {
      if (!navigator.clipboard || typeof navigator.clipboard.write !== 'function' || typeof window.ClipboardItem !== 'function') {
        toast('当前浏览器不支持复制图片'); return;
      }
      const tools = window[NAME];
      if (!tools || typeof tools.fetchBestBlob !== 'function') { toast('复制失败：内部方法未就绪'); return; }
      toast('复制中…');
      const pngPromise = (async function () {
        const hit = await tools.fetchBestBlob(img);
        if (!hit || !hit.blob) throw new Error('图片获取失败');
        return await toPngBlob(hit.blob);
      })();
      navigator.clipboard.write([ new window.ClipboardItem({ 'image/png': pngPromise }) ])
        .then(function () { toast('图片已复制到剪贴板'); })
        .catch(function (err) { toast('复制失败：' + ((err && err.message) || err)); });
    }

    function onAction(kind, btn) {
      const img = findCardImage(btn);
      if (!img) { toast('未找到图片'); return; }
      if (kind === 'download') {
        const tools = window[NAME];
        if (tools && typeof tools.download === 'function') tools.download(img);
      } else if (kind === 'copy') {
        copyImage(img);
      }
    }

    function insertAll() {
      const rows = document.querySelectorAll('.__5mD3UK1y');
      let inserted = 0;
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const more = row.querySelector('.ant-dropdown-trigger.__8AiCDJAb');
        if (!more || !more.parentNode) continue;
        const prev = more.previousElementSibling;
        if (prev && prev.classList && prev.classList.contains(CARD_ACTIONS_CLASS)) continue; // 已插入
        const actions = document.createElement('div');
        actions.className = CARD_ACTIONS_CLASS;
        actions.appendChild(makeBtn('download', '下载', 'hb_download'));
        actions.appendChild(makeBtn('copy', '复制', 'copy'));
        more.parentNode.insertBefore(actions, more);
        if (row.setAttribute) row.setAttribute(CARD_ACTIONS_ATTR, '1');
        inserted++;
      }
      return inserted;
    }

    ensureStyle();
    insertAll();

    let timer = null;
    const observer = new MutationObserver(function () {
      if (timer) return;
      timer = setTimeout(function () { timer = null; insertAll(); }, 300);
    });
    observer.observe(document.documentElement || document, { childList: true, subtree: true });

    function dispose() {
      observer.disconnect();
      if (timer) { clearTimeout(timer); timer = null; }
      document.querySelectorAll('.' + CARD_ACTIONS_CLASS).forEach(function (n) { n.remove(); });
      document.querySelectorAll('[' + CARD_ACTIONS_ATTR + ']').forEach(function (n) { if (n && n.removeAttribute) n.removeAttribute(CARD_ACTIONS_ATTR); });
      const st = document.getElementById(CARD_ACTIONS_STYLE_ID); if (st) st.remove();
    }
    window.__huabanCardActions__ = { dispose: dispose, insertAll: insertAll };
  }

  /* =====================================================================
   * 模块五：详情页主图操作按钮（下载 / 复制）
   * 位置：详情大图右下方（若存在「找相似」按钮则贴其左侧对齐）
   * 样式：与模块四卡片按钮完全一致（28x28 圆形、悬停浅灰底、图标变深）
   * 说明：原「悬停一键下载」绿色按钮已移除，详情图下载/复制改由本模块承担
   * ===================================================================== */
  const DETAIL_LAYER_CLASS = 'hb-detail-layer';
  const DETAIL_ACTIONS_CLASS = 'hb-detail-actions';
  const DETAIL_ACTIONS_ATTR = 'data-hb-detail-actions';
  const DETAIL_STYLE_ID = 'hb-detail-style';

  function initDetailActions() {
    // 移除旧版「悬停一键下载」绿色胶囊按钮的残留节点（含跨世界残留），确保绿色按钮彻底消失
    function purgeLegacyHover() {
      document.querySelectorAll('.hb-dl-layer').forEach(function (n) { n.remove(); });
      document.querySelectorAll('.hb-dl-btn').forEach(function (n) { n.remove(); });
    }
    purgeLegacyHover();
    document.querySelectorAll('.' + DETAIL_LAYER_CLASS).forEach(function (n) { n.remove(); });
    if (window.__huabanDetailActions__ && window.__huabanDetailActions__.dispose) {
      try { window.__huabanDetailActions__.dispose(); } catch (e) {}
    }

    const tools = window[NAME];
    if (!tools || typeof tools.toast !== 'function') return { ok: false, reason: 'thumb-api-missing' };

    // 样式：本模块独立注入一份。详情大图按钮加白色圆形底 + 阴影，
    // 与右侧「商用素材」缩略图按钮保持一致，避免按钮压在图片上看不清。
    // 即使模块四已注入基础样式，这里仍必须写入详情专属底色规则（故不再提前 return）。
    function ensureStyle() {
      const old = document.getElementById(DETAIL_STYLE_ID); if (old) old.remove();
      const css = [
        '.' + CARD_BTN_CLASS + '{position:relative;width:28px;height:28px;border-radius:99px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .15s ease;}',
        '.' + CARD_BTN_CLASS + ' .hb-card-icon{font-size:18px;line-height:1;display:flex;align-items:center;justify-content:center;color:#7f8792;transition:color .15s ease;}',
        '.' + CARD_BTN_CLASS + ' .hb-card-icon svg{width:1em;height:1em;fill:currentColor;overflow:hidden;display:block;}',
        '.' + CARD_BTN_CLASS + ':hover .hb-card-icon{color:#222529;}',
        // 详情大图按钮：白色圆形底 + 阴影（与缩略图按钮一致）
        '.' + DETAIL_ACTIONS_CLASS + ' .' + CARD_BTN_CLASS + '{background:rgba(255,255,255,.92);box-shadow:0 1px 4px rgba(0,0,0,.18);}',
        '.' + DETAIL_ACTIONS_CLASS + ' .' + CARD_BTN_CLASS + ':hover{background:#fff;}'
      ].join('');
      const st = document.createElement('style'); st.id = DETAIL_STYLE_ID; st.textContent = css;
      (document.head || document.documentElement).appendChild(st);
    }
    ensureStyle();

    const SVGNS = 'http://www.w3.org/2000/svg';
    const XLINK = 'http://www.w3.org/1999/xlink';
    function makeIcon(symbolId) {
      const svg = document.createElementNS(SVGNS, 'svg');
      svg.setAttribute('viewBox', '0 0 1024 1024');
      const use = document.createElementNS(SVGNS, 'use');
      use.setAttribute('href', '#' + symbolId);
      try { use.setAttributeNS(XLINK, 'xlink:href', '#' + symbolId); } catch (e) {}
      svg.appendChild(use);
      return svg;
    }

    // 详情页主图：优先在已知容器（#pin_detail / .BcRurZFt）内取面积最大、尺寸达标的 img；
    // 容器类名变动或全部未命中时，退化为「视口左半侧、宽高均>=350 的最大图」布局兜底，
    // 从而不依赖任何会变动的 class 名。
    function detailMainImg() {
      const roots = CONFIG.detailRootSelectors || ['#pin_detail'];
      let main = null, area = 0;
      for (let s = 0; s < roots.length; s++) {
        const root = document.querySelector(roots[s]);
        if (!root) continue;
        const imgs = root.querySelectorAll('img');
        for (let i = 0; i < imgs.length; i++) {
          const r = imgs[i].getBoundingClientRect();
          if (r.width < 200 || r.height < 200) continue;
          const a = r.width * r.height;
          if (a > area) { area = a; main = imgs[i]; }
        }
        if (main) return main;   // 命中已知容器即返回，避免误取瀑布流卡片图
      }
      // 布局兜底：详情主图固定在左侧大图区，宽高明显大于右侧缩略图
      const vw = window.innerWidth, vh = window.innerHeight;
      let best = null, bestScore = 0;
      const all = document.querySelectorAll('img');
      for (let i = 0; i < all.length; i++) {
        const r = all[i].getBoundingClientRect();
        if (r.width < 350 || r.height < 350) continue;          // 排除缩略图/头像/小图标
        if (r.left + r.width / 2 > vw * 0.6) continue;          // 排除右侧栏
        if (r.top > vh) continue;                               // 排除视口下方瀑布流卡片
        const score = r.width * r.height;
        if (score > bestScore) { bestScore = score; best = all[i]; }
      }
      return best;
    }

    function copyImage(img) {
      if (!navigator.clipboard || typeof navigator.clipboard.write !== 'function' || typeof window.ClipboardItem !== 'function') {
        tools.toast('当前浏览器不支持复制图片'); return;
      }
      if (typeof tools.fetchBestBlob !== 'function') { tools.toast('复制失败：内部方法未就绪'); return; }
      tools.toast('复制中…');
      const pngPromise = (async function () {
        const hit = await tools.fetchBestBlob(img);
        if (!hit || !hit.blob) throw new Error('图片获取失败');
        let blob = hit.blob;
        if (blob.type !== 'image/png') {
          const bmp = await createImageBitmap(blob);
          const c = document.createElement('canvas');
          c.width = bmp.width; c.height = bmp.height;
          c.getContext('2d').drawImage(bmp, 0, 0);
          blob = await new Promise(function (res) { c.toBlob(res, 'image/png'); });
          if (!blob) throw new Error('PNG 编码失败');
        }
        return blob;
      })();
      navigator.clipboard.write([ new window.ClipboardItem({ 'image/png': pngPromise }) ])
        .then(function () { tools.toast('图片已复制到剪贴板'); })
        .catch(function (err) { tools.toast('复制失败：' + ((err && err.message) || err)); });
    }

    function onAction(kind) {
      const img = detailMainImg();
      if (!img) { tools.toast('未找到图片'); return; }
      if (kind === 'download') { if (typeof tools.download === 'function') tools.download(img); }
      else if (kind === 'copy') { copyImage(img); }
    }

    function makeBtn(kind, title, symbolId) {
      const b = document.createElement('div');
      b.className = CARD_BTN_CLASS;
      b.setAttribute('role', 'button');
      b.setAttribute('tabindex', '0');
      b.setAttribute('title', title);
      b.setAttribute('aria-label', title);
      const icon = document.createElement('span');
      icon.className = 'hb-card-icon';
      icon.appendChild(makeIcon(symbolId));
      b.appendChild(icon);
      b.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); onAction(kind); }, true);
      b.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); onAction(kind); } }, true);
      return b;
    }

    const layer = document.createElement('div');
    layer.className = DETAIL_LAYER_CLASS;
    layer.style.cssText = 'position:fixed;inset:0;pointer-events:none;z-index:2147483646;';

    const row = document.createElement('div');
    row.className = DETAIL_ACTIONS_CLASS;
    row.setAttribute(DETAIL_ACTIONS_ATTR, '1');
    row.style.cssText = 'position:fixed;display:none;align-items:center;gap:8px;pointer-events:auto;';
    row.appendChild(makeBtn('download', '下载原图', 'hb_download'));
    row.appendChild(makeBtn('copy', '复制图片', 'copy'));
    layer.appendChild(row);
    (document.body || document.documentElement).appendChild(layer);

    let raf = null;
    function place() {
      raf = null;
      purgeLegacyHover();
      const img = detailMainImg();
      if (!img) { row.style.display = 'none'; return; }
      const r = img.getBoundingClientRect();
      if (!r.width || !r.height) { row.style.display = 'none'; return; }
      let right = window.innerWidth - (r.right - 8);
      let bottom = window.innerHeight - (r.bottom - 8);
      const col = img.parentElement && img.parentElement.parentElement;
      const sim = (col && col.querySelector) ? col.querySelector('a[href*="/similar"]') : null;
      if (sim) {
        const sr = sim.getBoundingClientRect();
        if (sr.width && sr.height) {
          const cy = sr.top + sr.height / 2;
          right = window.innerWidth - (sr.left - 8);
          bottom = window.innerHeight - (cy + 14);
        }
      }
      row.style.display = 'flex';
      row.style.right = Math.round(right) + 'px';
      row.style.bottom = Math.round(bottom) + 'px';
      row.style.left = 'auto';
      row.style.top = 'auto';
    }
    function schedule() { if (raf) return; raf = requestAnimationFrame(place); }

    window.addEventListener('scroll', schedule, true);
    window.addEventListener('resize', schedule, true);
    const mo = new MutationObserver(schedule);
    mo.observe(document.documentElement || document, { childList: true, subtree: true });
    schedule();

    function dispose() {
      window.removeEventListener('scroll', schedule, true);
      window.removeEventListener('resize', schedule, true);
      try { mo.disconnect(); } catch (e) {}
      if (raf) { cancelAnimationFrame(raf); raf = null; }
      if (layer && layer.remove) layer.remove();
      const st = document.getElementById(DETAIL_STYLE_ID); if (st) st.remove();
    }
    window.__huabanDetailActions__ = { dispose: dispose, place: place, detailMainImg: detailMainImg };
    return { ok: true, buttons: 2, hasDetailImg: !!detailMainImg() };
  }

  /* =====================================================================
   * 模块六：右侧「商用素材」区域缩略图操作按钮（下载 / 复制）
   * 位置：每个缩略图包裹层 .__6BhM_e7Z 的右下角（right:6px; bottom:6px）
   * 覆盖：商用素材区域所有 tab（相似内容 / 搭配背景 / 搭配元素 / 相似成品）
   * 样式：与模块四/五按钮完全一致（28x28 圆形、悬停浅灰底、图标变深）
   * ===================================================================== */
  const THUMB_WRAP_SELECTOR = '.__6BhM_e7Z';
  const THUMB_ACTIONS_CLASS = 'hb-thumb-actions';
  const THUMB_ACTIONS_ATTR = 'data-hb-thumb-actions';
  const THUMB_STYLE_ID = 'hb-thumb-actions-style';

  function initSidebarThumbActions() {
    // 幂等：清理旧实例残留
    document.querySelectorAll('.' + THUMB_ACTIONS_CLASS).forEach(function (n) { n.remove(); });
    if (window.__huabanThumbActions__ && window.__huabanThumbActions__.dispose) {
      try { window.__huabanThumbActions__.dispose(); } catch (e) {}
    }

    const tools = window[NAME];
    if (!tools || typeof tools.toast !== 'function') return { ok: false, reason: 'thumb-api-missing' };

    // 样式：本模块独立注入一份（含按钮基础样式 + 按钮组定位），
    // 不依赖模块四/五是否已注入，避免定位规则因提前 return 而缺失。
    function ensureStyle() {
      const old = document.getElementById(THUMB_STYLE_ID); if (old) old.remove();
      const css = [
        '.' + CARD_BTN_CLASS + '{position:relative;width:28px;height:28px;border-radius:99px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:background .15s ease;}',
        '.' + CARD_BTN_CLASS + ' .hb-card-icon{font-size:18px;line-height:1;display:flex;align-items:center;justify-content:center;color:#7f8792;transition:color .15s ease;}',
        '.' + CARD_BTN_CLASS + ' .hb-card-icon svg{width:1em;height:1em;fill:currentColor;overflow:hidden;display:block;}',
        '.' + CARD_BTN_CLASS + ':hover{background:rgba(0,0,0,.04);}',
        '.' + CARD_BTN_CLASS + ':hover .hb-card-icon{color:#222529;}',
        '.' + THUMB_ACTIONS_CLASS + '{position:absolute;right:6px;bottom:6px;display:flex;align-items:center;gap:2px;z-index:9999;pointer-events:auto;}',
        '.' + THUMB_ACTIONS_CLASS + ' .' + CARD_BTN_CLASS + '{background:rgba(255,255,255,.92);box-shadow:0 1px 4px rgba(0,0,0,.18);}',
        '.' + THUMB_ACTIONS_CLASS + ' .' + CARD_BTN_CLASS + ':hover{background:#fff;}'
      ].join('');
      const st = document.createElement('style'); st.id = THUMB_STYLE_ID; st.textContent = css;
      (document.head || document.documentElement).appendChild(st);
    }
    ensureStyle();

    const SVGNS = 'http://www.w3.org/2000/svg';
    const XLINK = 'http://www.w3.org/1999/xlink';
    function makeIcon(symbolId) {
      const svg = document.createElementNS(SVGNS, 'svg');
      svg.setAttribute('viewBox', '0 0 1024 1024');
      const use = document.createElementNS(SVGNS, 'use');
      use.setAttribute('href', '#' + symbolId);
      try { use.setAttributeNS(XLINK, 'xlink:href', '#' + symbolId); } catch (e) {}
      svg.appendChild(use);
      return svg;
    }

    // 缩略图包裹层内的主图（面积最大的 img）
    function thumbImg(wrap) {
      const imgs = wrap.querySelectorAll('img');
      let best = null, ba = 0;
      for (let i = 0; i < imgs.length; i++) {
        const r = imgs[i].getBoundingClientRect();
        const a = r.width * r.height;
        if (a > ba) { ba = a; best = imgs[i]; }
      }
      return best || wrap.querySelector('img');
    }

    function copyImage(img) {
      if (!navigator.clipboard || typeof navigator.clipboard.write !== 'function' || typeof window.ClipboardItem !== 'function') {
        tools.toast('当前浏览器不支持复制图片'); return;
      }
      if (typeof tools.fetchBestBlob !== 'function') { tools.toast('复制失败：内部方法未就绪'); return; }
      tools.toast('复制中…');
      const pngPromise = (async function () {
        const hit = await tools.fetchBestBlob(img);
        if (!hit || !hit.blob) throw new Error('图片获取失败');
        let blob = hit.blob;
        if (blob.type !== 'image/png') {
          const bmp = await createImageBitmap(blob);
          const c = document.createElement('canvas');
          c.width = bmp.width; c.height = bmp.height;
          c.getContext('2d').drawImage(bmp, 0, 0);
          blob = await new Promise(function (res) { c.toBlob(res, 'image/png'); });
          if (!blob) throw new Error('PNG 编码失败');
        }
        return blob;
      })();
      navigator.clipboard.write([ new window.ClipboardItem({ 'image/png': pngPromise }) ])
        .then(function () { tools.toast('图片已复制到剪贴板'); })
        .catch(function (err) { tools.toast('复制失败：' + ((err && err.message) || err)); });
    }

    function onAction(kind, wrap) {
      const img = thumbImg(wrap);
      if (!img) { tools.toast('未找到图片'); return; }
      if (kind === 'download') { if (typeof tools.download === 'function') tools.download(img); }
      else if (kind === 'copy') { copyImage(img); }
    }

    function makeBtn(kind, title, symbolId, wrap) {
      const b = document.createElement('div');
      b.className = CARD_BTN_CLASS;
      b.setAttribute('role', 'button');
      b.setAttribute('tabindex', '0');
      b.setAttribute('title', title);
      b.setAttribute('aria-label', title);
      const icon = document.createElement('span');
      icon.className = 'hb-card-icon';
      icon.appendChild(makeIcon(symbolId));
      b.appendChild(icon);
      b.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); onAction(kind, wrap); }, true);
      b.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); e.stopPropagation(); onAction(kind, wrap); } }, true);
      return b;
    }

    // 仅处理右侧「商用素材」区域缩略图（含 pin 锚点，位于视口右半侧），
    // 借此避免误伤左侧主图区与瀑布流卡片
    function insertAll() {
      const wraps = document.querySelectorAll(THUMB_WRAP_SELECTOR);
      let inserted = 0;
      for (let i = 0; i < wraps.length; i++) {
        const wrap = wraps[i];
        if (!wrap.querySelector('a[href*="/pins/"]')) continue;
        const r = wrap.getBoundingClientRect();
        if (r.width && r.left + r.width / 2 < window.innerWidth * 0.55) continue;
        if (wrap.querySelector('.' + THUMB_ACTIONS_CLASS)) continue;   // 已插入
        const cs = getComputedStyle(wrap);
        if (cs.position === 'static') wrap.style.position = 'relative';
        const actions = document.createElement('div');
        actions.className = THUMB_ACTIONS_CLASS;
        actions.setAttribute(THUMB_ACTIONS_ATTR, '1');
        actions.appendChild(makeBtn('download', '下载原图', 'hb_download', wrap));
        actions.appendChild(makeBtn('copy', '复制图片', 'copy', wrap));
        wrap.appendChild(actions);
        wrap.setAttribute(THUMB_ACTIONS_ATTR, '1');
        inserted++;
      }

      // 其他图片模块（类 zjSSb8O3 o_7cy1tC brick，如「推荐画板」）：为画板卡片封面图添加按钮
      const bricks = document.querySelectorAll('.zjSSb8O3');
      for (let i = 0; i < bricks.length; i++) {
        const b = bricks[i];
        if (b.querySelector('.__5mD3UK1y')) continue;              // 卡片行由模块四处理
        if (b.closest && b.closest('#pin_detail, .BcRurZFt')) continue;   // 详情主图由模块五处理
        const links = b.querySelectorAll('a[href*="/boards/"]');
        for (let j = 0; j < links.length; j++) {
          const a = links[j];
          if (a.querySelector('.' + THUMB_ACTIONS_CLASS)) continue;   // 已插入
          const imgs = a.querySelectorAll('img');
          let best = null, ba = 0;
          for (let k = 0; k < imgs.length; k++) {
            const rr = imgs[k].getBoundingClientRect();
            const ar = rr.width * rr.height;
            if (ar > ba) { ba = ar; best = imgs[k]; }
          }
          if (!best || ba < 100 * 100) continue;               // 仅处理明显封面图，跳过小图标
          const host = best.parentElement;
          if (!host) continue;
          if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
          const acts = document.createElement('div');
          acts.className = THUMB_ACTIONS_CLASS;
          acts.setAttribute(THUMB_ACTIONS_ATTR, '1');
          acts.appendChild(makeBtn('download', '下载原图', 'hb_download', a));
          acts.appendChild(makeBtn('copy', '复制图片', 'copy', a));
          host.appendChild(acts);
          a.setAttribute(THUMB_ACTIONS_ATTR, '1');
          inserted++;
        }
      }
      return inserted;
    }

    insertAll();

    let timer = null;
    const observer = new MutationObserver(function () {
      if (timer) return;
      timer = setTimeout(function () { timer = null; insertAll(); }, CONFIG.rescanDelay);
    });
    observer.observe(document.documentElement || document, { childList: true, subtree: true });

    function dispose() {
      observer.disconnect();
      if (timer) { clearTimeout(timer); timer = null; }
      document.querySelectorAll('.' + THUMB_ACTIONS_CLASS).forEach(function (n) { n.remove(); });
      document.querySelectorAll('[' + THUMB_ACTIONS_ATTR + ']').forEach(function (n) { if (n && n.removeAttribute) n.removeAttribute(THUMB_ACTIONS_ATTR); });
      const st = document.getElementById(THUMB_STYLE_ID); if (st) st.remove();
    }
    window.__huabanThumbActions__ = { dispose: dispose, insertAll: insertAll };
    return {
      ok: true,
      wraps: document.querySelectorAll(THUMB_WRAP_SELECTOR).length,
      actions: document.querySelectorAll('.' + THUMB_ACTIONS_CLASS).length
    };
  }

  /* =====================================================================
   * 模块三：设置菜单项 + 设置弹框（入口为脚本下拉菜单，非页面悬浮按钮）
   * 所有类名/ID 均带 hbns- 前缀，避免与站点或其他脚本的 CSS/JS 重名冲突
   * ===================================================================== */
  let hbnsRoot = null;
  function initSettingsUI() {
    if (hbnsRoot && hbnsRoot.isConnected) return;
    const style = document.createElement('style');
    style.id = 'hbns-style';
    style.textContent = [
      // —— 遮罩 ——
      '.hbns-overlay{position:fixed;inset:0;z-index:2147483646;background:rgba(0,0,0,.35);display:none;}',
      // —— 弹框 ——
      '.hbns-dialog{position:fixed;left:50%;top:50%;transform:translate(-50%,-50%);z-index:2147483647;width:320px;',
      'background:#fff;border-radius:12px;box-shadow:0 10px 40px rgba(0,0,0,.32);display:none;overflow:hidden;',
      'font-family:system-ui,-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;}',
      '.hbns-dialog *{box-sizing:border-box;}',
      '.hbns-head{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid #eee;}',
      '.hbns-title{font-size:15px;font-weight:700;color:#222;margin:0;}',
      '.hbns-close{border:none;background:none;font-size:20px;line-height:1;color:#999;cursor:pointer;padding:2px 6px;border-radius:6px;}',
      '.hbns-close:hover{color:#333;background:#f2f2f2;}',
      '.hbns-body{padding:10px 16px 16px;}',
      '.hbns-row{display:flex;align-items:center;justify-content:space-between;padding:10px 0;}',
      '.hbns-row-label{font-size:14px;color:#333;}',
      // —— 开关（switch） ——
      '.hbns-switch{position:relative;display:inline-block;width:44px;height:24px;flex:none;cursor:pointer;}',
      '.hbns-switch input{position:absolute;opacity:0;width:0;height:0;}',
      '.hbns-sw-track{position:absolute;inset:0;background:#ccc;border-radius:12px;transition:background .2s;}',
      '.hbns-sw-thumb{position:absolute;top:2px;left:2px;width:20px;height:20px;background:#fff;border-radius:50%;',
      'box-shadow:0 1px 3px rgba(0,0,0,.3);transition:transform .2s;}',
      '.hbns-switch input:checked + .hbns-sw-track{background:#00D538;}',
      '.hbns-switch input:checked + .hbns-sw-track .hbns-sw-thumb{transform:translateX(20px);}'
    ].join('');
    (document.head || document.documentElement).appendChild(style);

    const root = document.createElement('div');
    root.id = 'hbns-root';
    root.innerHTML = [
      '<div class="hbns-overlay"></div>',
      '<div class="hbns-dialog">',
      '  <div class="hbns-head"><span class="hbns-title">插件设置</span><button type="button" class="hbns-close">×</button></div>',
      '  <div class="hbns-body">',
      '    <div class="hbns-row">',
      '      <span class="hbns-row-label">开启原生右键菜单</span>',
      '      <label class="hbns-switch"><input type="checkbox" class="hbns-switch-input"><span class="hbns-sw-track"><span class="hbns-sw-thumb"></span></span></label>',
      '    </div>',
      '    <div class="hbns-row">',
      '      <span class="hbns-row-label">商用图片红框提示</span>',
      '      <label class="hbns-switch"><input type="checkbox" class="hbns-switch-input-frame"><span class="hbns-sw-track"><span class="hbns-sw-thumb"></span></span></label>',
      '    </div>',
      '  </div>',
      '</div>'
    ].join('');
    (document.body || document.documentElement).appendChild(root);
    hbnsRoot = root;

    const overlay = root.querySelector('.hbns-overlay');
    const dialog = root.querySelector('.hbns-dialog');
    const closeBtn = root.querySelector('.hbns-close');
    const swInput = root.querySelector('.hbns-switch-input');
    const swFrameInput = root.querySelector('.hbns-switch-input-frame');

    function open() {
      swInput.checked = getPref(PREF_KEY_NATIVE_MENU, true);
      swFrameInput.checked = getPref(PREF_KEY_FRAME, true);
      overlay.style.display = 'block';
      dialog.style.display = 'block';
    }
    function close() {
      overlay.style.display = 'none';
      dialog.style.display = 'none';
    }

    overlay.addEventListener('click', close);
    closeBtn.addEventListener('click', close);
    // 脚本下拉菜单（油猴菜单）中的【设置】项：点击打开设置弹框
    if (typeof GM_registerMenuCommand === 'function') {
      try { GM_registerMenuCommand('设置', open); } catch (e) {}
    }
    swInput.addEventListener('change', function () {
      setPref(PREF_KEY_NATIVE_MENU, swInput.checked);
      if (swInput.checked) enableNativeMenu(); else disableNativeMenu();
    });
    swFrameInput.addEventListener('change', function () {
      setPref(PREF_KEY_FRAME, swFrameInput.checked);
      const tools = window[NAME];
      if (tools && typeof tools.setCommercialFrame === 'function') tools.setCommercialFrame(swFrameInput.checked);
    });
  }

  /* =====================================================================
   * 启动
   * ===================================================================== */
  // 模块一在 document-start 立即生效（按已保存的设置）
  syncNativeMenu();
  // 模块二/三需要 DOM 就绪（下载按钮、商用标记、设置按钮）
  function bootDom() {
    initThumbTools();
    initCardActions();
    initDetailActions();
    initSidebarThumbActions();
    initSettingsUI();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootDom, { once: true });
  } else {
    bootDom();
  }
})();
