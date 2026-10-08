# Agua Vida — GitHub Pages / Top Page

このフォルダは、Agua Vida の仮トップページ用です。
GitHub Pages にアップロードして動かせるよう、HTML / CSS / JS / assets を分離しています。

## フォルダ構成

```text
agua-vida-github-pages/
├─ index.html
├─ css/
│  └─ style.css
├─ js/
│  └─ main.js
├─ assets/
│  ├─ logo.png
│  ├─ favicon.png
│  ├─ product-20l.jpg
│  ├─ hero-home.jpg
│  └─ hero-office.jpg
└─ README.md
```

## GitHub Pagesへの公開手順

### 1. GitHubにリポジトリを作成

GitHubアカウントが `AguaVidaBolivia` の場合、ユーザーサイトとして

`AguaVidaBolivia.github.io`

というリポジトリ名にできます。

GitHubのユーザー名が違う場合は、そのユーザー名に合わせたリポジトリ名が必要です。

### 2. このフォルダの中身をアップロード

`index.html` がリポジトリの一番上（root）に来るようにアップロードします。

```text
Repository
│
├─ index.html  ← ここ
├─ css/
├─ js/
└─ assets/
```

### 3. GitHub Pagesを有効化

GitHubのリポジトリで

Settings
→ Pages
→ Build and deployment
→ Source: Deploy from a branch
→ Branch: main
→ Folder: / (root)
→ Save

とします。

数分後にGitHub PagesのURLで確認できます。

## 3枚のファーストビュー

現在は自動スライドです。1・2枚目の背景は今回いただいたサイトたたき台画像をベースにした仮素材です。正式なオフィス・家庭写真が届いたら差し替えます。

1. 家庭向け
2. オフィス向け
3. 商品訴求

`js/main.js` の `interval = 5500` を変更すると切り替え時間を変更できます。

## 実物のウォーターサーバー写真が届いたら

現在の `assets/hero-office.jpg` などを、正式な写真に差し替えればOKです。

例えば、

```text
assets/
└─ hero-office.jpg
```

を同じファイル名の正式写真に置き換えるだけでも反映できます。

もしファイル名を変更する場合は `index.html` の

```html
--hero-image: url('../assets/hero-office.jpg');
```

も変更します。

## ボトルを逆さまにしたとき

商品写真全体に

```css
transform: rotate(180deg);
```

を適用しています。

そのため、ボトルだけでなくラベルも同じ画像の一部として180度回転します。

これは「ボトルだけ回転してラベルが残る」実装ではありません。

## ©年について

フッターの年は固定値ではありません。

`js/main.js` で

```js
timeZone: "America/La_Paz"
```

を指定しています。

そのため、日本時間ではなくボリビア時間を基準にして、ボリビアの1月1日になった時点で自動的に年が切り替わります。

例：
- 2026年12月31日（ボリビア時間）→ 2026
- 2027年1月1日（ボリビア時間）→ 2027

## 今後の正式版

会社のGO（Go / OK）が出たら、以下を順番に追加できます。

- Nosotros
- Nuestros Productos
- Calidad
- Contacto
- WhatsAppボタン
- Google Maps
- 正式な会社情報
- 正式なウォーターサーバー写真
- 各商品の写真
- SEO
- OGP / SNS共有画像
- 独自ドメイン
- `www.aguavida.bo` への接続

---

# Agua Vida — página inicial

Esta es una versión preliminar para GitHub Pages.

La estructura está separada para que otra persona pueda modificar fácilmente:

- `index.html` → contenido de la página
- `css/style.css` → diseño
- `js/main.js` → menú, carrusel, giro del bidón y año del pie de página
- `assets/` → fotografías, logo y favicon

Cuando Agua Vida apruebe el diseño, se pueden agregar las demás páginas sin tener que rehacer esta estructura.
