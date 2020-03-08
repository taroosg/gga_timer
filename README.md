# GGA_timer

- GGAまでの時間をカウントダウンします．

## DEMO

[https://gga_timer.netlify.com](https://gga-timer.netlify.com)

## 雑な解説
- イベント情報はjsxファイルにハードコーディングせず，`data/events.json`に記述．
- `App.jsx`ファイルでjsonファイルを読み込み，`components/Counter.jsx`にイベント情報を渡す．
- `Counter.jsx`では受け取った情報を元にタイマーを生成し，表示．
- 複数イベント対応．
