// ==UserScript==
// @name         花瓣网 - 原生右键+原图下载+商用标签
// @namespace    https://huaban.com/
// @version      1.1.1
// @description  ① 恢复浏览器/系统的原生右键菜单（可在脚本下拉菜单【设置】中关闭）；② 识别花瓣网商用素材（列表/瀑布流卡片“版权素材”徽标、详情页主图授权标识、以及“商用素材”区块缩略图），在图片上叠加红色描边并显示胶囊形“商用”标签；③ 鼠标经过任意缩略图、以及详情页主图（#pin_detail 内的大图）时显示胶囊形绿色【下载】按钮，点击一键下载“原始 master 文件”（与详情页大图“右键→存储为”一致，最清晰、无 CDN 二次压缩）。点击脚本下拉菜单（油猴菜单）中的【设置】可打开设置弹框，实时开关【开启原生右键菜单】。
// @author       liteyais
// @match        *://huaban.com/*
// @match        *://*.huaban.com/*
// @icon         data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgZmlsbD0ibm9uZSI+PGcgY2xpcC1wYXRoPSJ1cmwoI2EpIj48bWFzayBpZD0iYiIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIyIiB4PSI1IiB5PSIxMiIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgc3R5bGU9Im1hc2stdHlwZTpsdW1pbmFuY2UiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0yNC43MjUgMTIuOTY4SDV2MjAuMzZoMTkuNzI1eiIvPjwvbWFzaz48ZyBtYXNrPSJ1cmwoI2IpIj48cGF0aCBmaWxsPSJ1cmwoI2MpIiBmaWxsLW9wYWNpdHk9Ii42OCIgZD0iTTUuMDc2IDE3Ljk0MWMwIDcuNzk1IDYuMzI3IDE0LjExNSAxNC4xMyAxNC4xMTVoNC45OHYtNC45NzNjMC03Ljc5NS02LjMyOC0xNC4xMTUtMTQuMTMtMTQuMTE1aC00Ljk4eiIvPjxwYXRoIGZpbGw9InVybCgjZCkiIGQ9Ik0xMy4yMSAyNy44OGM2LjA1NSAwIDEwLjk2NS01LjAzIDEwLjk2NS0xMS4wNjJ2LTMuODVIMjAuMzFjLTYuMDU1IDAtMTEuMDU1IDQuODkyLTExLjA1NSAxMC45MjR2My45ODl6Ii8+PC9nPjxwYXRoIGZpbGw9IiMwMDAiIGQ9Ik03LjA5NiA5LjkxNGEuOTM3LjkzNyAwIDAgMCAuNjg5IDEuMzU2YzMuNzk1LjU4MyA5LjgyMSAxLjM2MyAxMS4wOC45NTIuNjE4LS4yMDMgMS43NDMtLjQ3NiAyLjk0Mi0uNjdhMjMgMjMgMCAwIDEtLjI3NC0yLjAwNGMtMi4xMDIuMTctMTAuMjM0LS44NC0xNC4wMzctMS4zNjUtLjEzMS44MzctLjI2NyAxLjQ3LS40IDEuNzMiLz48cGF0aCBmaWxsPSIjRkYyQjJCIiBkPSJNMjEuOTk1IDMuMjU0Yy4xODMtLjQ5My4wNy0xLjA3Ny0uMzkyLTEuMzI2QzE5LjA5MS41NzYgMTQuMDAxLS43NTIgOC45NDIuNTAyYS45Ny45NyAwIDAgMC0uNzIyLjg3MWMtLjE1NSAxLjk4NS0uNDI3IDQuOTE2LS43MjQgNi44MSAzLjgwMy41MjYgMTEuOTM1IDEuNTM1IDE0LjAzNyAxLjM2NS0uMTg3LTEuOTgtLjE5Ni00LjUyLjQ2Mi02LjI5NE03LjA5NiA5LjkxNGMtMS4xNzctLjM4NS0zLjc2Ni0uOTIzLTQuNzA4IDAtMS4xNzcgMS4xNTQuNTg5IDIuODg1IDEuNzY1IDMuNDYxIDEuMS41NCAxMC4wODMgMS40OSAxNy45NzguNjcgMS4wNi0uMTEgMi4xMzQuMTIzIDMuMDI2LjcwNi4yNC4xNTYuNTQuMTkuODAzLjA4IDEuMDIzLS40MjkgMi40NDQtMS4xOTUgMS45MzItMi42MS0uNjI3LTEuNzMtMy44Ni0xLjAzLTYuMDg1LS42Ny0xLjItLjE5NS0yLjMyNC40NjgtMi45NDIuNjctMS4yNTkuNDEyLTcuMjg1LS4zNjgtMTEuMDgtLjk1MWEuOTM3LjkzNyAwIDAgMS0uNjktMS4zNTYiLz48L2c+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJjIiB4MT0iMjAuMDEzIiB4Mj0iOS4xNTYiIHkxPSIxNy4wOTYiIHkyPSIyNy45MzYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBzdG9wLWNvbG9yPSIjRkYyODRCIiBzdG9wLW9wYWNpdHk9Ii43NiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI0ZGMjg0QiIgc3RvcC1vcGFjaXR5PSIuMjQiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iZCIgeDE9IjI0LjE4NSIgeDI9IjkuNDIyIiB5MT0iMTIuOTY4IiB5Mj0iMjcuNjQ5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agc3RvcC1jb2xvcj0iI0ZGMjg0QiIgc3RvcC1vcGFjaXR5PSIuODQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGRjI4NEIiIHN0b3Atb3BhY2l0eT0iLjE2Ii8+PC9saW5lYXJHcmFkaWVudD48Y2xpcFBhdGggaWQ9ImEiPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik0wIDBoMzJ2MzJIMHoiLz48L2NsaXBQYXRoPjwvZGVmcz48L3N2Zz4=
// @license      MIT
// @run-at       document-start
// @grant        GM_registerMenuCommand
// ==/UserScript==

(function () {
  'use strict';

  /* =====================================================================
   * 模块〇：设置存储（localStorage，键名前缀 hb_ 防冲突）
   * ===================================================================== */
  const PREF_KEY_NATIVE_MENU = 'hb_native_menu_enabled';
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
   * 模块二：商用素材红框标记 + 缩略图/详情主图一键下载（原缩略图工具，配色已更新）
   * ===================================================================== */
  const NAME = '__huabanThumbTools__';
  const DL_CLASS = 'hb-dl-btn';
  const LAYER_CLASS = 'hb-dl-layer';
  const FRAME_CLASS = 'hb-commercial-frame';
  const LABEL_CLASS = 'hb-commercial-label';
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

    // —— 商用标记外观：纯红描边 + 右下角标签 ——
    borderColor: 'rgba(255,0,0,1)',        // 红框描边（亮红、不透明）
    borderWidth: '3px',
    label: '商用',
    labelBg: '#E20000',                    // 标签底色
    labelBorder: '1px solid #FF4848',      // 标签描边
    labelRadius: '200px',                  // 标签圆角（胶囊形）
    labelColor: '#ffffff',
    cornerRadius: '12px',                  // 红框圆角

    // —— 下载按钮 ——
    dlText: '下载',
    dlBg: '#00A92D',                       // 下载按钮底色
    dlBorder: '1px solid #00D839',         // 下载按钮描边
    dlRadius: '200px',                     // 下载按钮圆角（胶囊形）
    dlHoverBg: '#008E24',                  // 下载按钮悬停底色（加深）

    // —— 下载/商用按钮：统一尺寸 + 垂直间距 ——
    btnW: '56px',               // 两按钮统一宽度
    btnH: '28px',               // 两按钮统一高度
    btnGap: 18,                 // 按钮中心相对图片中心的偏移(px)；两按钮间距 = btnGap*2 - 28 = 8px
    // 兜底派生尺寸（仅在原始 master 取不到时才用）：这些是 CDN 二次编码的 webp，可能更大且更糊
    sizeOrder: ['_fw1200webp', '_fw960webp', '_fw480webp', '_fw240webp'],

    // —— 详情页主图容器选择器（点击后展示详情大图的那张图，位于其内）——
    detailRootSelector: '#pin_detail',

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
        // 顶层下载按钮层：固定在 body 顶端，压过站点所有悬浮层
        '.' + LAYER_CLASS + '{position:fixed;inset:0;pointer-events:none;z-index:2147483647;}',
        '.' + DL_CLASS + '{position:fixed;display:none;pointer-events:auto;z-index:2147483647;',
        'background:' + CONFIG.dlBg + ';border:' + CONFIG.dlBorder + ';color:#fff;font-size:12px;line-height:1;',
        'width:' + CONFIG.btnW + ';height:' + CONFIG.btnH + ';display:flex;align-items:center;justify-content:center;box-sizing:border-box;',
        'border-radius:' + CONFIG.dlRadius + ';cursor:pointer;white-space:nowrap;user-select:none;font-weight:600;',
        'font-family:system-ui,-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;}',
        '.' + DL_CLASS + ':hover{background:' + CONFIG.dlHoverBg + ';}',
        // 商用：纯红描边
        '.' + FRAME_CLASS + '{position:absolute;inset:0;z-index:9998;pointer-events:none;',
        'border-radius:' + CONFIG.cornerRadius + ';',
        'box-shadow:inset 0 0 0 ' + CONFIG.borderWidth + ' ' + CONFIG.borderColor + ';}',
        // 商用：图片中央“商用”标签
        '.' + LABEL_CLASS + '{position:absolute;left:50%;top:50%;transform:translate(-50%,calc(-50% - ' + CONFIG.btnGap + 'px));z-index:9999;pointer-events:none;',
        'background:' + CONFIG.labelBg + ';border:' + CONFIG.labelBorder + ';color:' + CONFIG.labelColor + ';font-size:12px;line-height:1;',
        'width:' + CONFIG.btnW + ';height:' + CONFIG.btnH + ';display:flex;align-items:center;justify-content:center;box-sizing:border-box;',
        'border-radius:' + CONFIG.labelRadius + ';font-weight:700;',
        'font-family:system-ui,-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;}',
        // 提示条
        '.hb-toast{position:fixed;left:50%;bottom:40px;transform:translateX(-50%);z-index:2147483647;',
        'background:rgba(0,0,0,.84);color:#fff;font-size:13px;padding:8px 14px;border-radius:8px;',
        'font-family:system-ui,-apple-system,"PingFang SC","Microsoft YaHei",sans-serif;pointer-events:none;}'
      ].join('');
      const s = document.createElement('style'); s.id = STYLE_ID; s.textContent = css;
      (document.head || document.documentElement).appendChild(s);
    }
    injectStyle();

    /* ------------- 顶层下载按钮 ------------- */
    const layer = document.createElement('div'); layer.className = LAYER_CLASS;
    const dlBtn = document.createElement('div'); dlBtn.className = DL_CLASS; dlBtn.textContent = CONFIG.dlText;
    layer.appendChild(dlBtn);
    (document.body || document.documentElement).appendChild(layer);

    let currentImg = null, currentBox = null, lastX = -1, lastY = -1, rafPending = false, lastLeft = -1, lastTop = -1, BTN_W = 56, BTN_H = 26;
    const PAD = 4;        // 命中边缘容差，避免在卡片边界抖动导致按钮忽隐忽现
    const HIDE_DELAY = 150; // 指针离开卡片/按钮后，按钮继续保留的时长(ms)，消除卡片间隙与边缘抖动造成的闪烁
    let hideTimer = null;   // 延迟隐藏定时器
    let posDirty = false;   // 滚动/窗口尺寸变化后需要重新对位
    // 一次性测量按钮尺寸（避免每帧读 offsetWidth 触发重排/尺寸跳动，消除闪烁）
    (function measureBtn() {
      dlBtn.style.display = 'block'; dlBtn.style.visibility = 'hidden';
      dlBtn.style.left = '-9999px'; dlBtn.style.top = '0px';
      BTN_W = dlBtn.offsetWidth || 56; BTN_H = dlBtn.offsetHeight || 26;
      dlBtn.style.display = 'none'; dlBtn.style.visibility = ''; dlBtn.style.left = ''; dlBtn.style.top = '';
    })();

    // 延迟隐藏：指针离开卡片/按钮后，按钮仍保留 HIDE_DELAY 毫秒，避免快速划过卡片间隙/边界时按钮忽隐忽现
    function cancelHide() {
      if (hideTimer) { clearTimeout(hideTimer); hideTimer = null; }
    }
    function scheduleHide() {
      if (hideTimer) return;
      hideTimer = setTimeout(function () { hideTimer = null; hideBtn(); }, HIDE_DELAY);
    }

    function pinCardOf(el) {
      while (el && el !== document.body) {
        if (el.tagName === 'A' && el.querySelector && el.querySelector('img') &&
            (el.getAttribute('href') || '').indexOf('/pins/') !== -1) return el;
        el = el.parentElement;
      }
      return null;
    }

    // 详情页主图：点击后展示详情大图的那张（#pin_detail 内面积最大的图，排除头像/按钮小图）
    function detailMainImg() {
      const root = document.querySelector(CONFIG.detailRootSelector);
      if (!root) return null;
      let main = null, area = 0;
      const imgs = root.querySelectorAll('img');
      for (let i = 0; i < imgs.length; i++) {
        const r = imgs[i].getBoundingClientRect();
        if (r.width < 200 || r.height < 200) continue;   // 排除头像(24px)/按钮图等小图
        const a = r.width * r.height;
        if (a > area) { area = a; main = imgs[i]; }
      }
      return main;
    }

    // 统一解析光标下的“可下载图片”目标：返回 { img, box }
    function targetUnderPoint(x, y) {
      const el = document.elementFromPoint(x, y);
      // 1) 采集卡片（列表/瀑布流/详情页“相似内容”等 a[href*="/pins/"] 卡片）
      const card = pinCardOf(el);
      if (card && card.isConnected) {
        const img = card.querySelector('img');
        if (img) return { img: img, box: img };
      }
      // 2) 详情页主图（#pin_detail 内的大图）
      if (el && el.closest && el.closest(CONFIG.detailRootSelector)) {
        const main = detailMainImg();
        if (main) return { img: main, box: main };
      }
      // 3) 几何兜底：按矩形命中并取“面积最小”的卡片（最具体），避免选中跨区的大容器
      const links = document.querySelectorAll('a[href*="/pins/"]');
      let best = null, bestArea = Infinity;
      for (let i = 0; i < links.length; i++) {
        const a = links[i];
        if (!a.isConnected || !a.querySelector('img')) continue;
        const r = a.getBoundingClientRect();
        if (r.width > 0 && r.height > 0 && x >= r.left - PAD && x <= r.right + PAD && y >= r.top - PAD && y <= r.bottom + PAD) {
          const area = r.width * r.height;
          if (area < bestArea) { bestArea = area; best = a; }
        }
      }
      if (best) { const img = best.querySelector('img'); if (img) return { img: img, box: img }; }
      return null;
    }

    function positionBtn(box) {
      const r = box.getBoundingClientRect();   // 以图片自身矩形为锚点，避免容器与图片尺寸不一致导致按钮偏移
      if (!r.width || !r.height) return;            // 被回收/尺寸为 0 时跳过，避免跳到左上角
      const left = Math.max(4, Math.round(r.left + r.width / 2 - BTN_W / 2));
      const top = Math.max(4, Math.round(r.top + r.height / 2 - BTN_H / 2 + CONFIG.btnGap));
      if (dlBtn.style.display !== 'block') dlBtn.style.display = 'block';
      if (left !== lastLeft) { dlBtn.style.left = left + 'px'; lastLeft = left; }
      if (top !== lastTop) { dlBtn.style.top = top + 'px'; lastTop = top; }
    }
    function hideBtn() {
      cancelHide();
      if (dlBtn.style.display === 'none') return;
      dlBtn.style.display = 'none'; currentImg = null; currentBox = null; lastLeft = -1; lastTop = -1;
    }

    function update() {
      rafPending = false;
      if (lastX < 0) return;
      const hit = document.elementFromPoint(lastX, lastY);
      const onBtn = hit && (hit === dlBtn || (hit.classList && hit.classList.contains(DL_CLASS)) || (hit.closest && hit.closest('.' + LAYER_CLASS)));
      if (onBtn) {
        // 指针悬停在按钮上：取消隐藏、保持显示；位置冻结，仅在滚动/尺寸变化后重新对位，
        // 避免缩略图 hover 缩放动画带动按钮移动而在按钮边缘反复显示/隐藏造成闪烁
        cancelHide();
        if (!currentBox) return;
        if (dlBtn.style.display !== 'block') dlBtn.style.display = 'block';
        if (posDirty) { positionBtn(currentBox); posDirty = false; }
        return;
      }
      posDirty = false;
      const t = targetUnderPoint(lastX, lastY);
      if (t) { cancelHide(); currentImg = t.img; currentBox = t.box; positionBtn(t.box); }
      else scheduleHide();
    }
    function onMove(e) {
      lastX = e.clientX; lastY = e.clientY;
      if (rafPending) return;
      rafPending = true;
      requestAnimationFrame(update);
    }
    function onScrollResize() { posDirty = true; if (rafPending) return; rafPending = true; requestAnimationFrame(update); }

    document.addEventListener('mousemove', onMove, true);
    document.addEventListener('pointermove', onMove, true);
    window.addEventListener('scroll', onScrollResize, true);
    window.addEventListener('resize', onScrollResize, true);
    document.addEventListener('mouseleave', scheduleHide, true);
    document.addEventListener('pointerleave', scheduleHide, true);

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
    async function download(img) {
      const src = img.currentSrc || img.src || '';
      if (!src) { toast('未找到图片地址'); return { ok: false }; }
      toast('下载中…');
      let blob = null, usedUrl = null;
      const cands = urlCandidates(src);
      for (let i = 0; i < cands.length; i++) {
        try { const r = await fetch(cands[i], { mode: 'cors' }); if (r.ok) { blob = await r.blob(); usedUrl = cands[i]; break; } }
        catch (e) { /* 试下一个尺寸 */ }
      }
      if (!blob) { toast('下载失败（跨域或尺寸不可用）'); return { ok: false }; }
      const ext = ((blob.type.split('/')[1] || 'webp') + '').replace('jpeg', 'jpg');
      const id = idOf(img);
      const href = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = href; link.download = 'huaban_' + id + '.' + ext;
      document.body.appendChild(link); link.click(); link.remove();
      setTimeout(function () { URL.revokeObjectURL(href); }, 15000);
      toast('已下载 ' + link.download + ' (' + Math.round(blob.size / 1024) + 'KB)');
      return { ok: true, name: link.download, size: blob.size };
    }
    function onBtnClick(e) {
      e.preventDefault(); e.stopPropagation();
      if (currentImg) download(currentImg);
    }
    dlBtn.addEventListener('click', onBtnClick, true);

    /* ------------- 商用标记（纯描边 + 图片中央标签） ------------- */
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
      const label = document.createElement('div'); label.className = LABEL_CLASS; label.textContent = CONFIG.label;
      wrapper.appendChild(frame); wrapper.appendChild(label);
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
    function scan() { scanCommercialCards(); scanCommercialDetail(); scanCommercialSections(); }

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
      document.removeEventListener('mousemove', onMove, true);
      document.removeEventListener('pointermove', onMove, true);
      document.removeEventListener('mouseleave', scheduleHide, true);
      document.removeEventListener('pointerleave', scheduleHide, true);
      window.removeEventListener('scroll', onScrollResize, true);
      window.removeEventListener('resize', onScrollResize, true);
      dlBtn.removeEventListener('click', onBtnClick, true);
      observer.disconnect();
      if (timer) { clearTimeout(timer); timer = null; }
      if (layer && layer.remove) layer.remove();
      document.querySelectorAll('.' + FRAME_CLASS + ',.' + LABEL_CLASS).forEach(function (b) { b.remove(); });
      document.querySelectorAll('[' + CM_ATTR + ']').forEach(function (w) { w.removeAttribute(CM_ATTR); });
      document.querySelectorAll('[' + REL_ATTR + '="1"]').forEach(function (w) { w.style.position = ''; w.removeAttribute(REL_ATTR); });
      const st = document.getElementById(STYLE_ID); if (st) st.remove();
      const tt = document.querySelector('.hb-toast'); if (tt) tt.remove();
    }
    window[NAME] = {
      dispose: disposeThumbTools,
      scan: scan,
      download: download,
      detailMainImg: detailMainImg,
      config: CONFIG
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
      '  </div>',
      '</div>'
    ].join('');
    (document.body || document.documentElement).appendChild(root);
    hbnsRoot = root;

    const overlay = root.querySelector('.hbns-overlay');
    const dialog = root.querySelector('.hbns-dialog');
    const closeBtn = root.querySelector('.hbns-close');
    const swInput = root.querySelector('.hbns-switch-input');

    function open() {
      swInput.checked = getPref(PREF_KEY_NATIVE_MENU, true);
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
  }

  /* =====================================================================
   * 启动
   * ===================================================================== */
  // 模块一在 document-start 立即生效（按已保存的设置）
  syncNativeMenu();
  // 模块二/三需要 DOM 就绪（下载按钮、商用标记、设置按钮）
  function bootDom() {
    initThumbTools();
    initSettingsUI();
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootDom, { once: true });
  } else {
    bootDom();
  }
})();
