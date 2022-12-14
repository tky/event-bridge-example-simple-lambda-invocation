# EventBridgeExample Simple Labmda Invocation

Very simple AWS EventBridge Example.

This example show how to create a very simple rule and invoke a lambda function.

```
$ aws ecr-public get-login-password --region us-east-1 | docker login --username AWS --password-stdin public.ecr.aws
```

```
$ cdk deploy SimpleLambdaInvocationStack
```

```
$ aws events put-events --entries file://sample.json
```
