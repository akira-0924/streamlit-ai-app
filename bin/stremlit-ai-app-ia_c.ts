#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { StremlitAiAppIaCStack } from '../lib/stremlit-ai-app-ia_c-stack';

const app = new cdk.App();
new StremlitAiAppIaCStack(app, 'StremlitAiAppIaCStack');
