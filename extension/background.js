'use strict';

const extensionApi = globalThis.browser || globalThis.chrome;

extensionApi.action.onClicked.addListener(async function (tab) {
  if (!tab.id || !tab.url || !/^https?:\/\/([^/]+\.)?huaban\.com(?:\/|$)/i.test(tab.url)) return;
  try {
    await extensionApi.tabs.sendMessage(tab.id, { type: 'open-settings' });
  } catch (error) {
    console.warn('请刷新花瓣页面后再打开设置', error);
  }
});

extensionApi.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (!message || !['fetch-image', 'copy-image'].includes(message.type)) return;
  (async function () {
    try {
      if (!sender.tab || !/^https?:\/\/([^/]+\.)?huaban\.com(?:\/|$)/i.test(sender.url || '')) {
        throw new Error('请求来源不是花瓣页面');
      }
      if (message.type === 'copy-image') {
        if (typeof message.data !== 'string' || !extensionApi.clipboard?.setImageData) {
          throw new Error('当前浏览器不支持后台复制图片');
        }
        const bytes = Uint8Array.from(atob(message.data), function (c) { return c.charCodeAt(0); });
        await extensionApi.clipboard.setImageData(bytes.buffer, 'png');
        sendResponse({ ok: true });
        return;
      }
      const url = new URL(message.url);
      if (!['https:', 'http:'].includes(url.protocol) ||
          !/(^|\.)(huaban\.com|huabanimg\.com|hbimg\.cn|dancf\.com)$/i.test(url.hostname)) {
        throw new Error('图片地址不在授权域名内');
      }
      const response = await fetch(url.href, { credentials: 'omit', redirect: 'error', signal: AbortSignal.timeout(20000) });
      if (!response.ok) throw new Error('图片请求失败：' + response.status);
      const blob = await response.blob();
      if (!blob.size || !blob.type.startsWith('image/')) throw new Error('响应不是有效图片');
      // Chrome 消息使用 JSON，图片转成 Base64 后交给内容脚本下载或复制。
      const bytes = new Uint8Array(await blob.arrayBuffer());
      const parts = [];
      for (let i = 0; i < bytes.length; i += 32768) {
        parts.push(String.fromCharCode.apply(null, bytes.subarray(i, i + 32768)));
      }
      sendResponse({ data: btoa(parts.join('')), mime: blob.type });
    } catch (error) {
      sendResponse({ error: error.message });
    }
  })();
  return true;
});
