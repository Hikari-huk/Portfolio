# Lab Manager  研究室在庫管理システム

## アプリの概要
研究室の在庫を管理するために、中間テーブルを用いた貸し借り機能を実装した。

## 開発環境
［言語］PHP(Laravel 9)、JavaScript(Inertia.js)  
［その他］AWS(Cluod9、EC2、S3)、MYSQL

## 機能
- ログイン機能
- マルチ認証機能
- 管理者用の機能
 - 実験器具のCRUD(Create,Read,Update,Delete)  
- 一般ユーザ
 - 在庫の一覧表示
 - 在庫の貸借機能
 - 欲しい器具の注文CRUD

## 注力した機能や工夫した点
注力した機能は実験器具の画像のCRUDと貸借機能です。
- 実験器具の画像はAWSのS3を使用して、追加と削除ができるようにしました。特に画像の編集をする際に、新たに画像を追加することや、元々ある画像を削除できるような処理を実装しました。
- 多対多の中間テーブルを作成して誰が何を借りたのか、また何日までに返すのかを記録できるようにしました。

## [URL](http://hikari-labmanager.com/)とテストアカウント
URL: [Lab Manager](http://hikari-labmanager.com/)  
Email：test@outlook.jp  
pass: test1234

## デモ画面
実験器具の編集画面（管理者用）
![Readme3](https://user-images.githubusercontent.com/82071436/194884122-59f90049-ab54-48fe-b56e-01e6e80c78ac.png)

実験器具の詳細画面（一般ユーザ）
![Readme1](https://user-images.githubusercontent.com/82071436/194884533-0a3b0aae-8f43-4897-a387-a1e0227a6ab8.png)

実験器具を借りる際の画面（一般ユーザ）
![Readme2](https://user-images.githubusercontent.com/82071436/194884615-0ff76078-bebc-486d-8686-050f67888b62.png)
