module.exports = {
  root: true, // このファイルがある親階層の設定ファイルを探しにいかなくなる
  env: {
    // 検証するJSの実行環境を設定する。ブラウザで動作させるJsなのか、node.jsで動作させるJSなのか指定する。
    browser: true,
    es2020: true, // es2020以下のコードでエラーがでなくなる。
  },
  parserOptions: {
    sourceType: 'module', // importやexportでエラーがでなくなる。
  },
  extends: ['eslint:recommended', 'plugin:prettier/recommended'], // 外部で提供されるルールを適用する
  rules: {
    'prefer-const': 'error', // 更新をしない式にconst以外が設定されていたらエラーが出る。
  },
};
