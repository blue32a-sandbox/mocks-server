# Try out Mocks Server

> Node.js mock server running live, interactive mocks in place of real APIs

https://www.mocks-server.org/

## Server Start

```
docker-compose run --service-ports mocks
```

API mock: http://localhost:3100

管理REST APIのSwagger UI : http://localhost:3110

## コレクション選択の変更

[設定ファイル](server\mocks.config.js)で変更してサーバーを再起動する。

## REST Client

[REST Client for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

## メモ

- [File watch mode doesn't work in docker #462](https://github.com/mocks-server/main/issues/462) ([Hot reloading](https://www.mocks-server.org/docs/guides/organizing-files/#hot-reloading))
