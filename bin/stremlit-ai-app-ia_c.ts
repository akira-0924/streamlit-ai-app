#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import { StreamlitAppStack } from "../lib/stremlit-ai-app-ia_c-stack";

const app = new cdk.App();
new StreamlitAppStack(app, "StreamlitAppStack");
