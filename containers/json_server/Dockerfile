# Node.jsの公式イメージからベースイメージを選択
FROM node:14

# 作業ディレクトリの作成
WORKDIR /app

# json-serverのグローバルインストール
RUN npm install -g json-server

# ホストからコンテナへデータをコピー
# COPY db.json ./db.json

# ポートの公開
EXPOSE 3000

# json-serverの起動
CMD ["json-server", "--watch", "db.json", "--host", "0.0.0.0"]
