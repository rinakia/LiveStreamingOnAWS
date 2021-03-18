# Live Streaming on AWS with MediaPacakge

動画ストリーミング配信(HLS)をブラウザ視聴するためのソリューション

## アジェンダ
- [今までの課題と目的](#purpose)
- [構成図](#architecture-overview)
- [構築手順](#howto)
- [Author](#author)

## 目的
MediapackageにてHLSプロトコルを用いた動画配信を行った際に、クライアント端末内のWebブラウザにおいて動画を視聴するためには以下の2つの方法がある。
* 各クライアント端末内のWebブラウザでHLSが視聴できるように拡張機能をインストールする(Safariはデフォルト)
* Webサーバを構築し、視聴を行うためのスクリプト(js)をWebサーバからクライアント端末に配布することで視聴を行う。

本ソリューションにおいては、2つ目のWebサーバを構築する方法を行う。
WebサーバとしてはS3を使用する。

## 構成図
![Architecture](architecture.png)


## 構築手順

### 0. 事前準備
* MediaLive, MediaPackage, CloudFrontが利用可能な状態であること。
* MediaPackageにおいて、HLS用のエンドポイントが作成されていること。

### 1. S3
[次のURL](https://github.com/rinakia/LiveStreamingOnAWS) においてソースをダウンロードする。

「DemoS3bucket」-「assets」フォルダ内の「aws-exports.js」を以下のように修正する。
* hls_manifest: [MediaPackageをオリジンとしているCloudFrontのURL]

S3を新規作成し、「DemoS3bucket」フォルダ内のファイル/フォルダを全てS3にアップロードする。


### 2. CloudFront
CloudFrontを新規作成し、オリジンとして作成したS3を選択する。
設定概要は以下
* Origin Domain Name: [作成したS3]
* Restrict Bucket Access: Yes
* Grant Read Permissions on Bucket: Yes, Update Bucket Policy


### 3. Webブラウザ
作成したCloudFrontの状態が[Enable]であることを確認し、以下のURLにアクセスする。
http://[作成したCloudFrontのドメイン名]/index.html

動画配信が行われている際に、「PreviewHLS」ボタンを選択すると視聴が開始されることを確認する。


## Author

(C) 2021 A.Tada


