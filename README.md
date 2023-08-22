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

training-cluster-2
training-task-2
training-container-2
603713107417.dkr.ecr.ap-northeast-1.amazonaws.com/express-on-fargate
8080

training-service-2
training-sg-2
ロードバランス用のコンテナの選択
8080
リスナー 80:HTTP
