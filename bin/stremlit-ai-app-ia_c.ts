#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { StreamlitAppStack } from "../lib/stremlit-ai-app-stack";
import { UploadStack } from "../lib/upload-stack";

const app = new cdk.App();
new StreamlitAppStack(app, "StreamlitAppStack");
new UploadStack(app, "UploadStack");
