# express-on-fargate

```
docker build -t express-on-fargate  .
docker run --rm -p 8080:8080 express-on-fargate:latest

ECR(https://ap-northeast-1.console.aws.amazon.com/ecr/repositories?region=ap-northeast-1)で登録
```



### AWS Fargate 設定概要

**1. セキュリティグループ**
- **名前**: training-sg-2
- **目的**: ウェブアプリのポートを解放

**2. IAM設定**
- **タスク実行ロール**: ecsTaskExecutionRole
  - **新規作成**: はい
  - **追加のポリシー**: CloudWatchFullAccess

**3. Fargate クラスター設定**
- **クラスター名**: training-cluster-2
- **VPC**: デフォルト

**4. タスク定義**
- **タスク定義ファミリー**: training-task-2
- **タスクロール**: ecsTaskExecutionRole
- **タスク実行ロール**: ecsTaskExecutionRole

**5. コンテナ設定**
- **コンテナ数**: 1
- **コンテナ詳細**:
  - **名前**: training-container-2
  - **イメージ URI**: 603713107417.dkr.ecr.ap-northeast-1.amazonaws.com/express-on-fargate
  - **ポートマッピング**: 8080 (TCP)

**6. サービス設定**
- **サービス名**: training-service-2
- **クラスター**: training-cluster-2
- **起動タイプ**: Fargate
- **ネットワーキング**:
  - **VPC**: デフォルト
  - **セキュリティグループ**: training-sg-2

クラスター → サービス → タスク → 設定 → パブリック IP
