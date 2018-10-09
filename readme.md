# demo-serverless-shootout

The purpose of this demo is to compare and contrast "serverless" Api deployments across three of the most 
popular cloud vendors. Moving forward much infrastructure will be transitioning to this deployment model, so
we thought it would be interesting to do an indepth comparision. 


### [Serverless](https://serverless.com/) Node Library For Cross-Vendor Deployment

To simplify and standardize our Serverless shootout we have utilized the Serverless Framework.
We hope you enjoy our analysis below. 

### [Build/Deploy](https://ronniehicks.visualstudio.com/Demo)


| Feature | AWS | GCP | AZURE | 
| ------- | --- | --- | ----- |
| Performance | [Meh](https://ronniehicks.github.io/demo-serverless-shootout/performance/aws/index.html) | [Great](https://ronniehicks.github.io/demo-serverless-shootout/performance/google/index.html) | [Good](https://ronniehicks.github.io/demo-serverless-shootout/performance/azure/index.html)|
| Cost | [Low](https://console.aws.amazon.com/billing/home?region=us-west-2#/) | [Low](https://console.cloud.google.com/billing/0150B0-E8E5D9-2A653F/budgets) | [Low](https://portal.azure.com/#@lumeris.com/resource/subscriptions/f9861fb5-3903-4e0b-a98f-0dd72b41c61f/overview) | 
| Logging | [CloudWatch](https://us-west-2.console.aws.amazon.com/cloudwatch/home?region=us-west-2#logStream:group=/aws/lambda/my-express-application-dev-app) | [StackDriver](https://console.cloud.google.com/logs/viewer?project=serverlessdemo-218122&minLogLevel=0) | [AppInsights](https://portal.azure.com/#blade/Microsoft_Azure_Monitoring/AzureMonitoringBrowseBlade/overview) | 
| Monitoring | [CloudWatch](https://us-west-2.console.aws.amazon.com/cloudwatch/home?region=us-west-2#dashboards:name=ServerlessDashboard) | [StackDriver](https://app.google.stackdriver.com/dashboards/8617359297541043837?project=serverlessdemo-218122) | [AppInsights](https://portal.azure.com/#blade/Microsoft_Azure_Monitoring/AzureMonitoringBrowseBlade/overview) |
| Infrastructure | [CFN](docs/infrastructure/aws/template.yml) | [DM (Flaky Updates)](docs/infrastructure/gcp/template.yml) | [ARM (Most Complex)](docs/infrastructure/azure) |
| Languages | [Some](https://aws.amazon.com/lambda/faqs/) | [Very Few](https://cloud.google.com/functions/docs/writing/) | [Most](https://docs.microsoft.com/en-us/azure/azure-functions/supported-languages) |
| Limitations | [TimeCrunch](https://docs.aws.amazon.com/lambda/latest/dg/limits.html) | [MemoryCrunch](https://cloud.google.com/functions/quotas) | [Unclear](https://docs.microsoft.com/en-us/azure/azure-subscription-service-limits) |
