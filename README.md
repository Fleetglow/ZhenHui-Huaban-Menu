# 臻绘花瓣菜单 · ZhenHui Huaban Menu

版本：1.0.8 · 维护：[Fleetglow](https://github.com/Fleetglow) · 原项目声明协议：MIT

项目仓库：[Fleetglow/ZhenHui-Huaban-Menu](https://github.com/Fleetglow/ZhenHui-Huaban-Menu)

基于原作者 [liteyais](https://github.com/liteyais) 的 [huaban-userscripts](https://github.com/liteyais/huaban-userscripts) 改编，保留原脚本的主要功能，迁移为独立浏览器扩展。感谢原作者提供脚本。

独立浏览器扩展，支持 Chrome / Edge 121+，不需要 Tampermonkey。提供原生右键、商用素材红框、原图下载和图片复制。两种浏览器共用 `extension/` 文件夹。

## 安装

1. 在本仓库点击「Code → Download ZIP」，解压并保留 `extension/` 文件夹。
2. Chrome 打开 `chrome://extensions`，Edge 打开 `edge://extensions`，开启「开发者模式」。
3. 点击「加载已解压的扩展程序」，选择 `extension/` 文件夹，里面包含 `manifest.json`。
4. 关闭旧的花瓣油猴脚本，刷新已打开的花瓣页面。
5. 在浏览器工具栏的扩展菜单中固定本扩展。在花瓣页面点击扩展图标，即可打开设置。

无需安装依赖或构建。更新文件后，在扩展管理页面点击「重新加载」，再刷新花瓣页面。

## 功能

- 恢复浏览器原生右键菜单，设置中可关闭。
- 根据花瓣页面中的版权、商用授权标识显示红框，设置中可关闭；红框不代表额外授予使用权。
- 在瀑布流卡片、详情页大图、商用素材缩略图和推荐画板封面添加下载、复制按钮。
- 下载优先获取无尺寸后缀的原图，不可用时尝试派生尺寸。复制图片时转换成 PNG。
- 两项设置默认开启，保存在扩展中，并同步到已打开的花瓣页面；首次安装使用默认值，不继承旧脚本的设置。

## 权限与文件

`storage` 保存设置；`clipboardWrite` 复制图片。Chrome / Edge 使用页面剪贴板接口。内容脚本只在花瓣页面运行，后台图片请求限定于花瓣及其图片域名、稿定 CDN（`huaban.com`、`huabanimg.com`、`hbimg.cn`、`dancf.com`），不申请所有网站权限。

```text
ZhenHui-Huaban-Menu/
├── README.md
├── LICENSE
└── extension/             ← 浏览器加载此文件夹
    ├── manifest.json      扩展配置
    ├── background.js      设置入口与图片请求
    ├── content.js         图片操作、红框、右键与设置
    └── icon.png           扩展图标
```

`extension/` 只包含扩展运行文件，README 与 Git 元数据留在项目根目录。

## 手动验收

加载扩展后打开花瓣，检查原生右键、红框、下载和复制；点击扩展图标切换两项设置，检查页面立即变化，刷新后保留设置。

本次迁移及兼容适配未执行测试或构建。
