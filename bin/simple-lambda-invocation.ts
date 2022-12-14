#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { SimpleLambdaInvocationStack } from '../lib/simple-lambda-invocation-stack';

const app = new cdk.App();
new SimpleLambdaInvocationStack(app, 'SimpleLambdaInvocationStack', {
});
