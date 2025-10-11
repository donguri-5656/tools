// toolData.js

const allToolData = [
    {
        id: 'category-util',
        name: '🔢 計算・変換・日常ツール',
        tools: [
            { id: 'tool-moji', name: '文字数カウント', url: '/tools/moji.html', description: '文章の文字数、単語数を瞬時に測定。', keywords: '文字数 カウント 文章 測定', kana: 'もじすうかうんといもじすう' },
            { id: 'tool-qr', name: 'QRコード生成', url: '/tools/qr.html', description: 'URLやテキストからQRコードを作成。', keywords: 'QRコード 生成 作成 リンク URL', kana: 'きゅーあーるこーどきゅーあーる' },
            { id: 'tool-pass', name: 'パスワード生成', url: '/tools/pass.html', description: '強力で安全なパスワードを自動生成。', keywords: 'パスワード 生成 作成 セキュリティ 鍵', kana: 'ぱすわーどせいせいぱすわーど' },
            { id: 'tool-unit', name: '単位変換ツール', url: '/tools/unit.html', description: '長さ、重さ、温度などの単位を相互変換。', keywords: '単位 変換 計算 長さ 重さ 温度', kana: 'たんいへんかんつーるたんいへんかん' }
        ]
    },
    {
        id: 'category-design',
        name: '🎨 画像・デザイン・クリエイティブ',
        tools: [
            { id: 'tool-color', name: 'カラーピッカー', url: '/tools/color.html', description: '画面上の色やコードから色を選択・変換。', keywords: 'カラーピッカー 色 コード HEX RGB デザイン', kana: 'からーぴっかーからー' },
            { id: 'tool-resize', name: '画像サイズ変更', url: '/tools/resize.html', description: '画像の縦横比を維持してリサイズ。', keywords: '画像 サイズ 変更 リサイズ 縮小', kana: 'がぞうさいずへんこうがぞう' },
            { id: 'tool-pdf', name: 'PDF結合・分割', url: '/tools/pdf.html', description: '複数のPDFファイルをまとめたり、分割したり。', keywords: 'PDF 結合 分割 ファイル 編集', kana: 'ぴーでぃーえふけつごうぶんかつぴーでぃーえふ' },
            { id: 'tool-bgremove', name: '背景透過処理', url: '/tools/bgremove.html', description: '写真から背景を自動で削除。', keywords: '背景 透過 処理 削除 写真', kana: 'はいけいとうかしょりはけい' }
        ]
    },
    {
        id: 'category-game',
        name: '🕹️ ゲーム＆エンタメ',
        tools: [
            { id: 'game-othello', name: 'オセロ', url: '/games/othello.html', description: 'コンピューターまたは友達と対戦。', keywords: 'オセロ リバーシ ゲーム 対戦 ボード', kana: 'おせろりばーし' },
            { id: 'game-tetris', name: 'テトリス', url: '/games/teto.html', description: '定番のブロックパズルゲーム。', keywords: 'テトリス パズル ブロック ゲーム', kana: 'てとるすぱずる' },
            { id: 'game-3dmaze', name: '3D迷路', url: '/games/3dmaze.html', description: '一人称視点で出口を探す立体迷路。', keywords: '3D 迷路 メイズ ゲーム 立体', kana: 'すりーでーめいろめいろ' },
            { id: 'game-janken', name: 'じゃんけん', url: '/games/janken.html', description: 'シンプルなオンラインじゃんけんゲーム。', keywords: 'じゃんけん 運試し ゲーム', kana: 'じゃんけんうんたなめし' }
        ]
    }
];
