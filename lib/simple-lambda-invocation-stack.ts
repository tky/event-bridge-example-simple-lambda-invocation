import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {EventBus, Rule, RuleTargetInput, EventField} from 'aws-cdk-lib/aws-events';
import {NodejsFunction} from 'aws-cdk-lib/aws-lambda-nodejs';
import {LambdaFunction} from 'aws-cdk-lib/aws-events-targets';

export class SimpleLambdaInvocationStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: cdk.StackProps) {
    super(scope, id, props);

    const eventBus = new EventBus(this, "event-bus", {
      eventBusName: "simple-lambda-invocation-bus"
    });

    const handler = new NodejsFunction(this, "handler", {
      functionName: "simple-lambda-invocation-hander",
    });

    new Rule(this, 'event-rule', {
      description: "simple lambda invocation rule",
      enabled: true,
      eventBus,
      ruleName: "simple-lambda-invocation",
      eventPattern: {
        source: [
          "custom"
        ]
      },
      targets: [
        new LambdaFunction(handler, {
          event: RuleTargetInput.fromObject({
            name: EventField.fromPath("$.detail.name"),
            detail: EventField.fromPath("$.detail.detail"),
          })
        })
      ]
    });
  }
}
