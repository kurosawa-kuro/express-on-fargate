# express-on-fargate

```
docker build -t express-on-fargate  .
docker run --rm -p 8080:8080 express-on-fargate:latest

ECR(https://ap-northeast-1.console.aws.amazon.com/ecr/repositories?region=ap-northeast-1)で登録
```

セキュリティグループ作成
ウェブアプリのポートを空ける

ecsTaskExecutionRoleは新しいロールで自動的に作成される
それにCloudWatchの権限を追加する

IAM
ecsTaskExecutionRole
ポリシーの追加
CloudWatchFullAccess
ポリシーのアタッチ

クラスター設定
クラスター名
training-cluster-2

VPC
デフォルト

タスク定義
タスク定義の設定
タスク定義ファミリー
training-task-2

- 条件付きのタスクロール
タスク実行ロール
ecsTaskExecutionRole
タスクロール
ecsTaskExecutionRole


コンテナ - 1
コンテナの詳細
名前
training-container-2
イメージ URI
603713107417.dkr.ecr.ap-northeast-1.amazonaws.com/express-on-fargate
他のポートマッピングの追加
8080
TCP

サービスの作成
既存のクラスター
training-cluster-2
コンピューティング設定 ((アドバンスト))
コンピューティングオプション
起動タイプ
Fargate

デプロイ設定
サービス
training-service-2

ネットワーキング
VPC
デフォルト

セキュリティグループ
training-sg-2

