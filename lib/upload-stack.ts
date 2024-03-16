import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as dotenv from "dotenv";
import * as ssm from "aws-cdk-lib/aws-ssm";

export class UploadStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    dotenv.config();
    new ssm.StringParameter(this, "parameter", {
      parameterName: "/openapi/API_KEY",
      stringValue: `${process.env.OPENAI_API_KEY}`,
    });

    new ssm.StringParameter(this, "parameter1", {
      parameterName: "/S3/ENDPOINT",
      stringValue: `${process.env.REACT_APP_S3_ENDPOINT}`,
    });

    new ssm.StringParameter(this, "parameter2", {
      parameterName: "/API/ENDPOINT",
      stringValue: `${process.env.REACT_APP_API_ENDPOINT}`,
    });
  }
}
